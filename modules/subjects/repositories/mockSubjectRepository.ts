import type { Subject, SubjectId } from "../domain/subject";
import type { SubjectRepository } from "./subjectRepository";

const SUBJECTS: Subject[] = [
  {
    id: "js-fundamentals",
    name: "JavaScript Fundamentals",
    description: "Core language concepts and everyday patterns.",
    questionCount: 10,
  },
  {
    id: "react-basics",
    name: "React Basics",
    description: "Components, props, state, and rendering behavior.",
    questionCount: 10,
  },
  {
    id: "web-accessibility",
    name: "Web Accessibility",
    description: "Practical a11y for forms, keyboard, and semantics.",
    questionCount: 10,
  },
];

export function createMockSubjectRepository(): SubjectRepository {
  return {
    async listSubjects() {
      return SUBJECTS;
    },
    async getSubjectById(id: SubjectId) {
      return SUBJECTS.find((s) => s.id === id) ?? null;
    },
  };
}

