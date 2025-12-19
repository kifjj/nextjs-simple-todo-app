import type { Subject, SubjectId } from "../domain/subject";

export type SubjectRepository = {
  listSubjects(): Promise<Subject[]>;
  getSubjectById(id: SubjectId): Promise<Subject | null>;
};

