import type { Question, SubjectId } from "../domain/question";

export type QuestionRepository = {
  listQuestionsBySubjectId(subjectId: SubjectId): Promise<Question[]>;
};

