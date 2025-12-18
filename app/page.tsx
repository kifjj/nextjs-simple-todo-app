"use client";

import { useState } from "react";
import { LearningHub } from "@/components/LearningHub";
import { QuizView } from "@/components/QuizView";
import { LearningMaterial } from "@/lib/types";
import data from "@/lib/data.json";

export default function Home() {
  const [selectedMaterial, setSelectedMaterial] = useState<LearningMaterial | null>(null);

  const materials = data.learningMaterials as LearningMaterial[];

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 py-12">
      {selectedMaterial ? (
        <QuizView 
          material={selectedMaterial} 
          onBack={() => setSelectedMaterial(null)} 
        />
      ) : (
        <LearningHub 
          materials={materials} 
          onSelectMaterial={(material) => setSelectedMaterial(material)} 
        />
      )}
    </main>
  );
}
