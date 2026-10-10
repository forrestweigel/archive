"use client";
import { useState } from "react";
import { Download, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";
export function FeedbackForm() {
  const [downloaded, setDownloaded] = useState(false);
  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const text = [
      "ARCHIVE ALPHA — PLAYTEST REPORT",
      ...Array.from(data.entries()).map(
        ([key, value]) => `${key}: ${value || "Not provided"}`,
      ),
    ].join("\n\n");
    const url = URL.createObjectURL(
      new Blob([text], { type: "text/plain;charset=utf-8" }),
    );
    const a = document.createElement("a");
    a.href = url;
    a.download = "archive-alpha-playtest.txt";
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    setDownloaded(true);
  }
  return (
    <form
      onSubmit={submit}
      onChange={() => setDownloaded(false)}
      className="space-y-7"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="players" className="form-label">
            Number of players *
          </label>
          <Input
            id="players"
            name="Players"
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
            name="Game duration (minutes)"
            type="number"
            min="1"
            required
            placeholder="60"
          />
        </div>
      </div>
      <div>
        <label htmlFor="exchanges" className="form-label">
          How often did players use Archive Exchange?
        </label>
        <Input
          id="exchanges"
          name="Archive Exchanges"
          placeholder="A rough estimate is fine"
        />
      </div>
      <div>
        <label htmlFor="search" className="form-label">
          Did Failed Search occur, and how did it affect the game?
        </label>
        <Textarea
          id="search"
          name="Failed Search"
        />
      </div>
      <div>
        <label htmlFor="ending" className="form-label">
          How did the game end?
        </label>
        <Input
          id="ending"
          name="Game ending"
          placeholder="And did the smaller Library affect the game?"
        />
      </div>
      <div>
        <label htmlFor="notes" className="form-label">
          What worked well, and which rules were unclear?
        </label>
        <Textarea
          id="notes"
          name="Enjoyment, rules questions, and other feedback"
        />
      </div>
      <p className="text-xs leading-6 text-muted-foreground">
        Your answers are downloaded as a text file. They are not sent to Archive.
      </p>
      <Button type="submit">
        <Download /> Download playtest report
      </Button>
      {downloaded && (
        <p role="status" className="flex items-center gap-2 text-sm">
          <Check className="size-4" /> Report download started. No feedback was submitted.
        </p>
      )}
    </form>
  );
}
