import type { SubjectId } from "./domain/question";
import { createMockQuestionRepository } from "./repositories/mockQuestionRepository";

export type { Question, OptionId, QuestionId, SubjectId } from "./domain/question";
export { QuizRunner } from "./ui/QuizRunner";

const repo = createMockQuestionRepository();

export async function listQuestionsBySubjectId(subjectId: SubjectId) {
  return repo.listQuestionsBySubjectId(subjectId);
}

