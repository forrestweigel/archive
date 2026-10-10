import { createHash } from "node:crypto";

const fields = [
  ["players", "Players", 2],
  ["duration", "Game duration (minutes)", 5],
  ["exchanges", "Archive Exchanges", 500],
  ["search", "Failed Search", 3000],
  ["ending", "Game ending", 1000],
  ["notes", "Enjoyment, rules questions, and other feedback", 5000],
] as const;
const maxBodyBytes = 64 * 1024;

function error(message: string, status: number) {
  return Response.json({ error: message }, { status });
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) {
    return error("Please submit feedback from this website.", 403);
  }
  if (request.headers.get("content-type")?.split(";")[0].trim() !== "application/json") {
    return error("Expected a feedback form submission.", 415);
  }

  let data: Record<string, unknown>;
  try {
    // Bound the actual stream, including requests without Content-Length.
    const reader = request.body?.getReader();
    if (!reader) return error("Please complete the feedback form.", 400);
    const chunks: Uint8Array[] = [];
    let size = 0;
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > maxBodyBytes) {
        await reader.cancel();
        return error("Your feedback is too long. Please shorten it and try again.", 413);
      }
      chunks.push(value);
    }
    data = JSON.parse(Buffer.concat(chunks).toString("utf8"));
    if (!data || typeof data !== "object" || Array.isArray(data)) {
      return error("Please complete the feedback form.", 400);
    }
  } catch {
    return error("Could not read your feedback. Please try again.", 400);
  }

  // A hidden field catches basic form-filling bots without adding a player task.
  if (data.website !== "") return error("Could not submit this form.", 400);
  if (typeof data.submissionId !== "string" || !/^[0-9a-f-]{36}$/i.test(data.submissionId)) {
    return error("Please reload the page before submitting.", 400);
  }
  const answers: Record<string, string> = {};
  for (const [key, label, limit] of fields) {
    const value = data[key] ?? "";
    if (typeof value !== "string" || value.length > limit) {
      return error(`${label} must be no longer than ${limit} characters.`, 400);
    }
    answers[key] = value.trim();
  }
  if (!/^\d+$/.test(answers.players) || Number(answers.players) < 2 || Number(answers.players) > 99) {
    return error("Enter a whole number of players between 2 and 99.", 400);
  }
  if (!/^\d+$/.test(answers.duration) || Number(answers.duration) < 1 || Number(answers.duration) > 99999) {
    return error("Enter a game length between 1 and 99999 minutes.", 400);
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.FEEDBACK_FROM_EMAIL;
  const to = process.env.FEEDBACK_TO_EMAIL || "eldrxofficial@gmail.com";
  if (!apiKey || !from) {
    return error("Feedback delivery is not available yet. Please download your report and try again later.", 503);
  }
  const text = [
    "ARCHIVE ALPHA — PLAYTEST REPORT",
    ...fields.map(([key, label]) => `${label}: ${answers[key] || "Not provided"}`),
  ].join("\n\n");
  // Retries of unchanged answers reuse the key; edited answers get a new key.
  const hash = createHash("sha256").update(text).digest("hex");
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "Idempotency-Key": `feedback/${data.submissionId}/${hash}`,
      },
      body: JSON.stringify({ from, to: [to], subject: "Archive Alpha playtest feedback", text }),
      signal: AbortSignal.timeout(10000),
    });
    if (!response.ok) {
      console.error("Feedback email service returned status", response.status);
      return error("We could not send your feedback. Your answers are still here; please try again or download your report.", 502);
    }
    const result = await response.json();
    if (typeof result?.id !== "string" || !result.id) throw new Error("Missing email ID");
    return Response.json({ ok: true });
  } catch {
    return error("We could not confirm your submission. Your answers are still here; please try again or download your report.", 502);
  }
}
