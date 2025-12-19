import type { Id } from "@/shared/types/ids";

export type SubjectId = Id;

export type Subject = {
  id: SubjectId;
  name: string;
  description?: string;
  questionCount: number;
};

