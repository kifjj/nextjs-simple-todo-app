import type { Metadata } from "next";

import { listSubjects, SubjectList } from "@/modules/subjects";

export const metadata: Metadata = {
  title: "Subjects",
};

export default async function SubjectsPage() {
  const subjects = await listSubjects();

  return (
    <main className="mx-auto w-full max-w-5xl p-4 sm:p-6">
      <SubjectList subjects={subjects} />
    </main>
  );
}

