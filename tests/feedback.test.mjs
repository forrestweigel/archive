import assert from "node:assert/strict";
import { afterEach, beforeEach, test } from "node:test";
import { POST } from "../app/api/feedback/route.ts";

const originalFetch = globalThis.fetch;
const originalEnv = { ...process.env };
const valid = {
  submissionId: "01234567-89ab-4def-8123-456789abcdef",
  website: "", players: "4", duration: "60", exchanges: "Often",
  search: "Once", ending: "Combat", notes: "Good game",
};
function request(data = valid, headers = {}) {
  return new Request("https://playarchivemtg.com/api/feedback", {
    method: "POST",
    headers: { "Content-Type": "application/json", origin: "https://playarchivemtg.com", ...headers },
    body: typeof data === "string" ? data : JSON.stringify(data),
  });
}
beforeEach(() => {
  process.env.RESEND_API_KEY = "test-key";
  process.env.FEEDBACK_FROM_EMAIL = "Archive <feedback@example.com>";
  delete process.env.FEEDBACK_TO_EMAIL;
  globalThis.fetch = async () => { throw new Error("Unexpected email attempt"); };
});
afterEach(() => {
  globalThis.fetch = originalFetch;
  for (const key of ["RESEND_API_KEY", "FEEDBACK_FROM_EMAIL", "FEEDBACK_TO_EMAIL"]) {
    if (originalEnv[key] === undefined) delete process.env[key];
    else process.env[key] = originalEnv[key];
  }
});

test("sends the complete report only to the configured recipient, with stable retry keys", async () => {
  const calls = [];
  globalThis.fetch = async (url, options) => {
    calls.push({ url, ...options });
    return Response.json({ id: "email-test" });
  };
  const response = await POST(request({ ...valid, to: "attacker@example.com" }));
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { ok: true });
  await POST(request());
  await POST(request({ ...valid, notes: "Changed answer" }));
  assert.equal(calls[0].url, "https://api.resend.com/emails");
  const email = JSON.parse(calls[0].body);
  assert.deepEqual(email.to, ["eldrxofficial@gmail.com"]);
  assert.match(email.text, /Players: 4/);
  assert.match(email.text, /Game duration \(minutes\): 60/);
  assert.match(email.text, /Exchanges: Often/);
  assert.match(email.text, /Failed Search: Once/);
  assert.match(email.text, /Game ending: Combat/);
  assert.match(email.text, /Good game/);
  assert.equal(calls[0].headers["Idempotency-Key"], calls[1].headers["Idempotency-Key"]);
  assert.notEqual(calls[1].headers["Idempotency-Key"], calls[2].headers["Idempotency-Key"]);
});

test("rejects invalid answers and bots without contacting the email service", async () => {
  for (const changes of [
    { players: "1" }, { players: "100" }, { players: "2.5" },
    { duration: "0" }, { duration: "Infinity" }, { duration: 60 },
    { notes: "a".repeat(5001) }, { search: [] }, { website: "spam" },
    { submissionId: "invalid" },
  ]) {
    assert.equal((await POST(request({ ...valid, ...changes }))).status, 400);
  }
  assert.equal((await POST(request("{"))).status, 400);
  assert.equal((await POST(request("null"))).status, 400);
  assert.equal((await POST(request("a".repeat(65537)))).status, 413);
  assert.equal((await POST(request(valid, { origin: "https://elsewhere.example" }))).status, 403);
  assert.equal((await POST(request(valid, { "Content-Type": "text/plain" }))).status, 415);
});

test("missing credentials never claim successful submission", async () => {
  delete process.env.RESEND_API_KEY;
  assert.equal((await POST(request())).status, 503);
});

test("provider errors, malformed responses, and network failures never claim success", async () => {
  for (const mock of [
    async () => Response.json({ error: "private provider details" }, { status: 429 }),
    async () => Response.json({}),
    async () => { throw new Error("private network details"); },
  ]) {
    globalThis.fetch = mock;
    const response = await POST(request());
    assert.equal(response.status, 502);
    const result = await response.json();
    assert.equal(result.ok, undefined);
    assert.doesNotMatch(result.error, /private/);
  }
});
