import Link from "next/link";

import type { Subject } from "../domain/subject";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function SubjectList({ subjects }: { subjects: Subject[] }) {
  if (subjects.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>No subjects yet</CardTitle>
          <CardDescription>
            Once you add subjects, they’ll show up here. (Coming soon)
          </CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-between gap-3">
          <div className="text-sm text-muted-foreground">
            For now, this increment uses mock data.
          </div>
          <Button disabled aria-disabled>
            Add subject (Coming soon)
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Subjects</h1>
          <p className="text-sm text-muted-foreground">
            Pick a subject to start a short multiple-choice quiz.
          </p>
        </div>
        <Button disabled aria-disabled title="Coming soon">
          Add subject (Coming soon)
        </Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {subjects.map((subject) => (
          <Link
            key={subject.id}
            href={`/quiz/${subject.id}`}
            className="group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-xl"
          >
            <Card className="h-full transition-shadow group-hover:shadow-md">
              <CardHeader>
                <CardTitle className="text-base">{subject.name}</CardTitle>
                {subject.description ? (
                  <CardDescription>{subject.description}</CardDescription>
                ) : null}
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {subject.questionCount} questions
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

