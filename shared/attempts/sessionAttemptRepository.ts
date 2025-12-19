import type { AttemptRepository, QuizAttempt, SubjectId } from "./attempt";

function getStorageKey(subjectId: SubjectId) {
  return `learningapp:attempt:${subjectId}`;
}

export function createSessionAttemptRepository(): AttemptRepository {
  return {
    async loadLatestAttemptBySubjectId(subjectId) {
      if (typeof window === "undefined") return null;
      try {
        const raw = window.sessionStorage.getItem(getStorageKey(subjectId));
        if (!raw) return null;
        return JSON.parse(raw) as QuizAttempt;
      } catch {
        return null;
      }
    },

    async saveLatestAttempt(attempt) {
      if (typeof window === "undefined") return;
      window.sessionStorage.setItem(getStorageKey(attempt.subjectId), JSON.stringify(attempt));
    },

    async clearLatestAttemptBySubjectId(subjectId) {
      if (typeof window === "undefined") return;
      window.sessionStorage.removeItem(getStorageKey(subjectId));
    },
  };
}

