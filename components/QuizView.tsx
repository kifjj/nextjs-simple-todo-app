"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LearningMaterial, Question } from "@/lib/types";
import { CheckCircle2, ChevronRight, RotateCcw, Home } from "lucide-react";

interface QuizViewProps {
  material: LearningMaterial;
  onBack: () => void;
}

export function QuizView({ material, onBack }: QuizViewProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isFinished, setIsFinished] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const currentQuestion = material.questions[currentIndex];

  const handleAnswer = (answer: string) => {
    if (isTransitioning) return;

    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: answer }));
    
    setIsTransitioning(true);
    
    // Smooth transition delay
    setTimeout(() => {
      if (currentIndex < material.questions.length - 1) {
        setCurrentIndex((prev) => prev + 1);
        setIsTransitioning(false);
      } else {
        setIsFinished(true);
        setIsTransitioning(false);
      }
    }, 300);
  };

  const calculateScore = () => {
    let score = 0;
    material.questions.forEach((q) => {
      if (answers[q.id] === q.correctAnswer) {
        score++;
      }
    });
    return score;
  };

  if (isFinished) {
    const score = calculateScore();
    return (
      <div className="max-w-2xl mx-auto p-6 animate-in fade-in zoom-in duration-500">
        <Card className="text-center p-8 shadow-2xl border-t-4 border-t-green-500">
          <CardHeader>
            <div className="flex justify-center mb-4">
              <div className="bg-green-100 p-4 rounded-full">
                <CheckCircle2 className="w-16 h-16 text-green-600" />
              </div>
            </div>
            <CardTitle className="text-3xl font-bold">Quiz Completed!</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl mb-2">You scored</p>
            <div className="text-6xl font-black text-blue-600 mb-4">
              {score} <span className="text-2xl text-zinc-400 font-normal">/ {material.questions.length}</span>
            </div>
            <p className="text-zinc-500">
              {score === material.questions.length 
                ? "Perfect! You're a master!" 
                : score >= 7 
                ? "Great job! Almost there." 
                : "Keep learning and try again!"}
            </p>
          </CardContent>
          <CardFooter className="flex gap-4 justify-center mt-6">
            <Button variant="outline" onClick={() => {
              setCurrentIndex(0);
              setAnswers({});
              setIsFinished(false);
            }}>
              <RotateCcw className="mr-2 h-4 w-4" /> Try Again
            </Button>
            <Button onClick={onBack}>
              <Home className="mr-2 h-4 w-4" /> Hub
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <Button variant="ghost" onClick={onBack} size="sm">
          ← Back to Hub
        </Button>
        <div className="text-sm font-medium text-zinc-500">
          Question {currentIndex + 1} of {material.questions.length}
        </div>
      </div>

      <div className="w-full bg-zinc-200 h-2 rounded-full mb-8 overflow-hidden">
        <div 
          className="bg-blue-600 h-full transition-all duration-500 ease-out"
          style={{ width: `${((currentIndex + 1) / material.questions.length) * 100}%` }}
        />
      </div>

      <div className={`transition-all duration-300 ease-in-out ${isTransitioning ? "opacity-0 -translate-x-8" : "opacity-100 translate-x-0"}`}>
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold leading-tight">
              {currentQuestion.text}
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 gap-3 mt-4">
            {currentQuestion.options.map((option, idx) => (
              <Button
                key={idx}
                variant="outline"
                className="h-auto p-4 justify-start text-left text-base whitespace-normal border-2 hover:border-blue-500 hover:bg-blue-50 transition-colors"
                onClick={() => handleAnswer(option)}
                disabled={isTransitioning}
              >
                <div className="flex items-center w-full">
                  <span className="w-8 h-8 flex items-center justify-center rounded-full bg-zinc-100 mr-3 text-sm font-bold text-zinc-500 shrink-0">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="flex-1">{option}</span>
                  <ChevronRight className="h-4 w-4 text-zinc-300 ml-2 shrink-0" />
                </div>
              </Button>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
