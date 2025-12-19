import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getSubjectById } from "@/modules/subjects";
import { listQuestionsBySubjectId, QuizRunner, type SubjectId } from "@/modules/quiz";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ subjectId: string }>;
}): Promise<Metadata> {
  const { subjectId } = await params;
  const subject = await getSubjectById(subjectId as SubjectId);

  return {
    title: subject ? `Quiz — ${subject.name}` : "Quiz",
  };
}

export default async function QuizPage({
  params,
}: {
  params: Promise<{ subjectId: string }>;
}) {
  const { subjectId: rawSubjectId } = await params;
  const subjectId = rawSubjectId as SubjectId;

  const subject = await getSubjectById(subjectId);
  if (!subject) notFound();

  const questions = await listQuestionsBySubjectId(subjectId);

  return (
    <main className="min-h-screen">
      <QuizRunner subjectId={subjectId} subjectName={subject.name} questions={questions} />
    </main>
  );
}

