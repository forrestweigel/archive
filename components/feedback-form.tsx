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
          Did Failed Search happen? Did it matter?
        </label>
        <Textarea
          id="search"
          name="Failed Search"
          placeholder="Tell us about a moment that stood out"
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
          How did it feel? Anything unclear?
        </label>
        <Textarea
          id="notes"
          name="Enjoyment, rules questions, and other feedback"
          placeholder="What worked, what surprised you, and what could be clearer"
        />
      </div>
      <p className="text-xs leading-6 text-muted-foreground">
        This form creates a report on your device. It does not send or store
        your answers. A direct submission channel will be added when available.
      </p>
      <Button type="submit">
        <Download /> Download playtest report
      </Button>
      {downloaded && (
        <p role="status" className="flex items-center gap-2 text-sm">
          <Check className="size-4" /> Your report is ready. Keep the downloaded
          file to share with the organizer.
        </p>
      )}
    </form>
  );
}
