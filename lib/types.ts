export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: string;
}

export interface LearningMaterial {
  id: string;
  title: string;
  description: string;
  questions: Question[];
}

export interface QuizData {
  learningMaterials: LearningMaterial[];
}
