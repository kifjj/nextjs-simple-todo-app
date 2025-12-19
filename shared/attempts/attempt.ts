import type { Id } from "@/shared/types/ids";

export type SubjectId = Id;
export type QuestionId = Id;
export type OptionId = Id;

export type QuizAttemptAnswer = {
  questionId: QuestionId;
  selectedOptionId: OptionId;
};

export type QuizAttempt = {
  subjectId: SubjectId;
  answers: QuizAttemptAnswer[];
  completedAtIso: string;
};

export type AttemptRepository = {
  loadLatestAttemptBySubjectId(subjectId: SubjectId): Promise<QuizAttempt | null>;
  saveLatestAttempt(attempt: QuizAttempt): Promise<void>;
  clearLatestAttemptBySubjectId(subjectId: SubjectId): Promise<void>;
};

