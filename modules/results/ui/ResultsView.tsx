"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { createSessionAttemptRepository, type QuizAttempt, type SubjectId } from "@/shared/attempts";

import type { Question } from "@/modules/quiz";
import { calculateResults } from "../application/calculateResults";

export function ResultsView({
  subjectId,
  subjectName,
  questions,
}: {
  subjectId: SubjectId;
  subjectName: string;
  questions: Question[];
}) {
  const router = useRouter();
  const repo = useMemo(() => createSessionAttemptRepository(), []);
  const [attempt, setAttempt] = useState<QuizAttempt | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const loaded = await repo.loadLatestAttemptBySubjectId(subjectId);
      if (!cancelled) {
        setAttempt(loaded);
        setIsLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [repo, subjectId]);

  async function retake() {
    await repo.clearLatestAttemptBySubjectId(subjectId);
    router.push(`/quiz/${subjectId}`);
  }

  if (isLoading) {
    return (
      <div className="mx-auto w-full max-w-3xl p-4 sm:p-6">
        <Card>
          <CardHeader>
            <CardTitle>Loading results…</CardTitle>
            <CardDescription>Fetching your latest attempt.</CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  if (!attempt) {
    return (
      <div className="mx-auto w-full max-w-3xl p-4 sm:p-6">
        <Card>
          <CardHeader>
            <CardTitle>No results found</CardTitle>
            <CardDescription>
              It looks like there isn’t a completed quiz attempt for this subject in this session.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            <Button asChild>
              <Link href={`/quiz/${subjectId}`}>Start quiz</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/subjects">Back to subjects</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const summary = calculateResults({ questions, attempt });

  return (
    <div className="mx-auto w-full max-w-3xl p-4 sm:p-6 space-y-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Results</h1>
          <p className="text-sm text-muted-foreground">{subjectName}</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={retake}>
            Retake
          </Button>
          <Button asChild>
            <Link href="/subjects">Done</Link>
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Summary</CardTitle>
          <CardDescription>Your score for this attempt.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-3 sm:grid-cols-4">
          <Metric label="Total" value={summary.total} />
          <Metric label="Correct" value={summary.correct} />
          <Metric label="Wrong" value={summary.wrong} />
          <Metric label="Score" value={`${summary.percent}%`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Review</CardTitle>
          <CardDescription>
            See what you answered and what the correct answer was.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {summary.items.map((item, idx) => (
            <div key={item.questionId} className="rounded-lg border p-3">
              <div className="flex items-start justify-between gap-3">
                <div className="font-medium text-sm">
                  {idx + 1}. {item.prompt}
                </div>
                <span
                  className={cn(
                    "text-xs rounded-full px-2 py-1 border",
                    item.isCorrect
                      ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300"
                      : "border-red-500/30 bg-red-500/10 text-red-700 dark:text-red-300"
                  )}
                >
                  {item.isCorrect ? "Correct" : "Wrong"}
                </span>
              </div>
              <div className="mt-2 grid gap-1 text-sm">
                <div>
                  <span className="text-muted-foreground">Your answer:</span>{" "}
                  {item.selectedOptionText ?? <span className="italic">No answer</span>}
                </div>
                <div>
                  <span className="text-muted-foreground">Correct answer:</span>{" "}
                  {item.correctOptionText}
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="rounded-lg border bg-card p-3">
      <div className="text-xs text-muted-foreground">{label}</div>
      <div className="text-lg font-semibold">{value}</div>
    </div>
  );
}

