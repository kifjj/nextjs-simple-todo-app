"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LearningMaterial } from "@/lib/types";

interface LearningHubProps {
  materials: LearningMaterial[];
  onSelectMaterial: (material: LearningMaterial) => void;
}

export function LearningHub({ materials, onSelectMaterial }: LearningHubProps) {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
        Learning Hub
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {materials.map((material) => (
          <Card 
            key={material.id} 
            className="cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-blue-500/50"
            onClick={() => onSelectMaterial(material)}
          >
            <CardHeader>
              <CardTitle className="text-xl">{material.title}</CardTitle>
              <CardDescription>{material.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-sm text-zinc-500 font-medium">
                <span>{material.questions.length} Questions</span>
                <span className="mx-2">•</span>
                <span>~10 mins</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
