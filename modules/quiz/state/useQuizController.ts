"use client";

import { useMemo, useState } from "react";
import type { Question, QuestionId, OptionId } from "../domain/question";

export type QuizSelectionMap = Record<QuestionId, OptionId | undefined>;

export function useQuizController(questions: Question[]) {
  const total = questions.length;
  const [index, setIndex] = useState(0);
  const [selections, setSelections] = useState<QuizSelectionMap>({});

  const currentQuestion = questions[index] ?? null;
  const currentSelection = currentQuestion ? selections[currentQuestion.id] : undefined;

  const answeredCount = useMemo(() => {
    let count = 0;
    for (const q of questions) {
      if (selections[q.id]) count += 1;
    }
    return count;
  }, [questions, selections]);

  function selectOption(questionId: QuestionId, optionId: OptionId) {
    setSelections((prev) => ({ ...prev, [questionId]: optionId }));
  }

  function goNext() {
    setIndex((i) => Math.min(i + 1, total - 1));
  }

  function goBack() {
    setIndex((i) => Math.max(i - 1, 0));
  }

  const isFirst = index === 0;
  const isLast = index === total - 1;

  return {
    total,
    index,
    isFirst,
    isLast,
    answeredCount,
    selections,
    currentQuestion,
    currentSelection,
    selectOption,
    goNext,
    goBack,
  };
}

