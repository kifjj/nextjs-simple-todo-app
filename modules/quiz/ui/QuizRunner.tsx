"use client";

import { useEffect, useId, useMemo } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { createSessionAttemptRepository } from "@/shared/attempts";

import type { Question, SubjectId } from "../domain/question";
import { useQuizController } from "../state/useQuizController";
import { ProgressBar } from "./ProgressBar";

export function QuizRunner({
  subjectId,
  subjectName,
  questions,
}: {
  subjectId: SubjectId;
  subjectName: string;
  questions: Question[];
}) {
  const router = useRouter();
  const radioName = useId();
  const repo = useMemo(() => createSessionAttemptRepository(), []);

  const quiz = useQuizController(questions);

  useEffect(() => {
    if (!quiz.currentQuestion && questions.length === 0) {
      // If there are no questions, bounce back to subjects.
      router.replace("/subjects");
    }
  }, [questions.length, quiz.currentQuestion, router]);

  if (!quiz.currentQuestion) return null;

  const q = quiz.currentQuestion;
  const questionNumber = quiz.index + 1;
  const canGoNext = Boolean(quiz.currentSelection);

  async function completeQuiz() {
    await repo.saveLatestAttempt({
      subjectId,
      answers: questions
        .map((question) => {
          const selectedOptionId = quiz.selections[question.id];
          if (!selectedOptionId) return null;
          return { questionId: question.id, selectedOptionId };
        })
        .filter((x): x is NonNullable<typeof x> => x !== null),
      completedAtIso: new Date().toISOString(),
    });

    router.push(`/results/${subjectId}`);
  }

  async function onNext() {
    if (!canGoNext) return;
    if (quiz.isLast) {
      await completeQuiz();
      return;
    }
    quiz.goNext();
  }

  function onBack() {
    quiz.goBack();
  }

  function onExit() {
    router.push("/subjects");
  }

  return (
    <div className="mx-auto w-full max-w-2xl p-4 sm:p-6">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">{subjectName}</h1>
          <p className="text-sm text-muted-foreground">
            Question {questionNumber} of {quiz.total}
          </p>
        </div>
        <Button variant="outline" onClick={onExit}>
          Exit
        </Button>
      </div>

      <ProgressBar value={questionNumber} max={quiz.total} className="mb-4" />

      <Card>
        <CardHeader>
          <CardTitle className="text-base leading-relaxed">{q.prompt}</CardTitle>
        </CardHeader>
        <CardContent>
          <fieldset className="space-y-2" aria-label="Answer options">
            {q.options.map((opt) => {
              const checked = quiz.currentSelection === opt.id;
              const inputId = `${radioName}-${q.id}-${opt.id}`;
              return (
                <label
                  key={opt.id}
                  htmlFor={inputId}
                  className={cn(
                    "flex cursor-pointer items-start gap-3 rounded-lg border p-3 transition-colors",
                    "hover:bg-accent",
                    checked
                      ? "border-primary bg-primary/5 ring-2 ring-primary/20"
                      : "border-border"
                  )}
                >
                  <input
                    id={inputId}
                    name={radioName}
                    type="radio"
                    className="mt-1"
                    checked={checked}
                    onChange={() => quiz.selectOption(q.id, opt.id)}
                  />
                  <span className="text-sm leading-relaxed">{opt.text}</span>
                </label>
              );
            })}
          </fieldset>

          <div className="mt-6 flex items-center justify-between gap-3">
            <Button variant="outline" onClick={onBack} disabled={quiz.isFirst}>
              Back
            </Button>
            <Button onClick={onNext} disabled={!canGoNext}>
              {quiz.isLast ? "Finish" : "Next"}
            </Button>
          </div>

          <div className="mt-4 text-xs text-muted-foreground">
            Tip: Use Tab to move focus, Arrow keys to change selection, and Enter/Space to
            activate buttons.
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

