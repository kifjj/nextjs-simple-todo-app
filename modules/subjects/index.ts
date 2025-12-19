import type { SubjectId } from "./domain/subject";
import { createMockSubjectRepository } from "./repositories/mockSubjectRepository";

export type { Subject, SubjectId } from "./domain/subject";
export { SubjectList } from "./ui/SubjectList";

const repo = createMockSubjectRepository();

export async function listSubjects() {
  return repo.listSubjects();
}

export async function getSubjectById(id: SubjectId) {
  return repo.getSubjectById(id);
}

