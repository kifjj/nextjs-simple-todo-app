import type { Id } from "@/shared/types/ids";

export type SubjectId = Id;
export type QuestionId = Id;
export type OptionId = Id;

export type QuestionOption = {
  id: OptionId;
  text: string;
};

export type Question = {
  id: QuestionId;
  subjectId: SubjectId;
  prompt: string;
  options: [QuestionOption, QuestionOption, QuestionOption, QuestionOption];
  correctOptionId: OptionId;
};

