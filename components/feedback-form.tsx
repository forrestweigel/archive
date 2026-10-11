"use client";
import { useRef, useState } from "react";
import { Check, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";
export function FeedbackForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");
  const submissionId = useRef("");
  const sending = useRef(false);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending.current) return;
    sending.current = true;
    submissionId.current ||= crypto.randomUUID();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    setStatus("sending");
    setError("");
    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, submissionId: submissionId.current }),
        signal: AbortSignal.timeout(20000),
      });
      const result = await response.json();
      if (!response.ok || result.ok !== true) {
        throw new Error(result.error || "Could not send your feedback. Please try again.");
      }
      setStatus("sent");
    } catch (error) {
      setStatus("error");
      setError(error instanceof Error && error.name === "Error"
        ? error.message
        : "Could not confirm your submission. Your answers are still here; please try again.");
    } finally {
      sending.current = false;
    }
  }

  return (
    <form
      onSubmit={submit}
      aria-busy={status === "sending"}
      onChange={() => {
        if (status !== "sending") setStatus("idle");
      }}
      className="space-y-7"
    >
      <fieldset disabled={status === "sending"} className="space-y-7 disabled:opacity-70">
        <legend className="sr-only">Playtest feedback</legend>
        <div hidden aria-hidden="true">
          <label htmlFor="website">Leave this field empty</label>
          <Input id="website" name="website" tabIndex={-1} autoComplete="off" />
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="players" className="form-label">
              Number of players *
            </label>
            <Input
              id="players"
              name="players"
              type="number"
              min="2"
              max="99"
              required
              placeholder="4"
            />
          </div>
          <div>
            <label htmlFor="duration" className="form-label">
              Game length (minutes) *
            </label>
            <Input
              id="duration"
              name="duration"
              type="number"
              min="1"
              max="99999"
              required
              placeholder="60"
            />
          </div>
        </div>
        <div>
          <label htmlFor="exchanges" className="form-label">
            How often did players use Exchange?
          </label>
          <Input
            id="exchanges"
            name="exchanges"
            maxLength={500}
            placeholder="A rough estimate is fine"
          />
        </div>
        <div>
          <label htmlFor="search" className="form-label">
            Did Failed Search occur, and how did it affect the game?
          </label>
          <Textarea
            id="search"
            name="search"
            maxLength={3000}
          />
        </div>
        <div>
          <label htmlFor="ending" className="form-label">
            How did the game end?
          </label>
          <Input
            id="ending"
            name="ending"
            maxLength={1000}
            placeholder="And did the smaller Library affect the game?"
          />
        </div>
        <div>
          <label htmlFor="notes" className="form-label">
            What worked well, and which rules were unclear?
          </label>
          <Textarea
            id="notes"
            name="notes"
            maxLength={5000}
          />
        </div>
      </fieldset>
      <p className="text-xs leading-6 text-muted-foreground">
        Submitting sends your answers to Archive by email. Please avoid including
        personal or sensitive information.
      </p>
      <div className="flex flex-wrap gap-3">
        <Button type="submit" disabled={status === "sending" || status === "sent"}>
          {status === "sent" ? <Check /> : <Send />}
          {status === "sending" ? "Sending…" : status === "sent" ? "Feedback submitted" : "Submit feedback"}
        </Button>
      </div>
      <div role="status" aria-live="polite" className="text-sm">
        {status === "sent" && <p>Thank you! Your feedback has been submitted to Archive.</p>}
      </div>
      {status === "error" && <p role="alert" className="text-sm text-destructive">{error}</p>}
    </form>
  );
}
