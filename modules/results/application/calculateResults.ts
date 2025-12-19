import type { QuizAttempt } from "@/shared/attempts";
import type { Question } from "@/modules/quiz";

export type ResultItem = {
  questionId: string;
  prompt: string;
  selectedOptionText: string | null;
  correctOptionText: string;
  isCorrect: boolean;
};

export type ResultSummary = {
  total: number;
  correct: number;
  wrong: number;
  percent: number;
  items: ResultItem[];
};

export function calculateResults({
  questions,
  attempt,
}: {
  questions: Question[];
  attempt: QuizAttempt;
}): ResultSummary {
  const selectedByQuestionId = new Map<string, string>();
  for (const a of attempt.answers) selectedByQuestionId.set(a.questionId, a.selectedOptionId);

  const items: ResultItem[] = questions.map((q) => {
    const selectedOptionId = selectedByQuestionId.get(q.id) ?? null;
    const selectedOptionText =
      selectedOptionId ? q.options.find((o) => o.id === selectedOptionId)?.text ?? null : null;
    const correctOptionText = q.options.find((o) => o.id === q.correctOptionId)?.text ?? "";
    const isCorrect = selectedOptionId === q.correctOptionId;

    return {
      questionId: q.id,
      prompt: q.prompt,
      selectedOptionText,
      correctOptionText,
      isCorrect,
    };
  });

  const total = questions.length;
  const correct = items.filter((i) => i.isCorrect).length;
  const wrong = total - correct;
  const percent = total <= 0 ? 0 : Math.round((correct / total) * 100);

  return { total, correct, wrong, percent, items };
}

