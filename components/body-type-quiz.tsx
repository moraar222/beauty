"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog";

const questions = [
  {
    id: 1,
    question: "How would you describe your shoulders?",
    options: [
      { value: "A", label: "Narrow and sloping" },
      { value: "B", label: "Broad and angular" },
      { value: "C", label: "Same width as hips" },
      { value: "D", label: "Rounded and soft" },
    ],
  },
  {
    id: 2,
    question: "What is your waist definition?",
    options: [
      { value: "A", label: "Very defined, naturally small" },
      { value: "B", label: "Straight, athletic" },
      { value: "C", label: "Gently curved" },
      { value: "D", label: "Softly defined" },
    ],
  },
  {
    id: 3,
    question: "How would you describe your hip area?",
    options: [
      { value: "A", label: "Narrow, straight" },
      { value: "B", label: "Straight, athletic" },
      { value: "C", label: "Full, round" },
      { value: "D", label: "Wide, curved" },
    ],
  },
];

const bodyTypes = {
  RECTANGLE: {
    title: "Rectangle Body Type",
    description: "Your shoulders, waist, and hips are fairly similar in width. You have a straight up and down figure.",
    recommendations: [
      "Create curves with peplum tops and dresses",
      "Belt at the waist to create definition",
      "Layer pieces to add dimension",
      "Wear tops with embellishments or ruffles",
    ],
  },
  HOURGLASS: {
    title: "Hourglass Body Type",
    description: "Your shoulders and hips are about the same width with a defined waist.",
    recommendations: [
      "Wear fitted clothing that shows your waist",
      "Choose wrap dresses and tops",
      "Opt for high-waisted bottoms",
      "Select V-neck or scoop necklines",
    ],
  },
  PEAR: {
    title: "Pear Body Type",
    description: "Your hips are wider than your shoulders with a defined waist.",
    recommendations: [
      "Draw attention upward with detailed tops",
      "Choose A-line skirts and dresses",
      "Wear darker colors on bottom",
      "Select boat neck and cowl necklines",
    ],
  },
  INVERTED_TRIANGLE: {
    title: "Inverted Triangle Body Type",
    description: "Your shoulders are wider than your hips with an athletic build.",
    recommendations: [
      "Balance proportions with full skirts",
      "Choose wide-leg pants",
      "Wear darker colors on top",
      "Select V-neck and scoop necklines",
    ],
  },
};

export default function BodyTypeQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [bodyType, setBodyType] = useState<keyof typeof bodyTypes | null>(null);

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [questions[currentQuestion].id]: value });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateBodyType();
      setShowResults(true);
    }
  };

  const calculateBodyType = () => {
    // Simple calculation logic - can be made more sophisticated
    const answerValues = Object.values(answers);
    const mostCommon = answerValues.sort((a, b) =>
      answerValues.filter(v => v === a).length - answerValues.filter(v => v === b).length
    ).pop();

    switch (mostCommon) {
      case "A":
        setBodyType("RECTANGLE");
        break;
      case "B":
        setBodyType("INVERTED_TRIANGLE");
        break;
      case "C":
        setBodyType("HOURGLASS");
        break;
      case "D":
        setBodyType("PEAR");
        break;
      default:
        setBodyType("HOURGLASS");
    }
  };

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8" id="quiz">
      <div className="max-w-3xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Body Type Quiz</CardTitle>
            <CardDescription>
              Answer a few questions to discover your body type and get personalized style recommendations.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!showResults ? (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">
                    {questions[currentQuestion].question}
                  </h3>
                  <RadioGroup
                    onValueChange={handleAnswer}
                    value={answers[questions[currentQuestion].id]}
                  >
                    {questions[currentQuestion].options.map((option) => (
                      <div key={option.value} className="flex items-center space-x-2 mb-2">
                        <RadioGroupItem value={option.value} id={option.value} />
                        <Label htmlFor={option.value}>{option.label}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
                <Button
                  onClick={handleNext}
                  disabled={!answers[questions[currentQuestion].id]}
                >
                  {currentQuestion < questions.length - 1 ? "Next" : "See Results"}
                </Button>
              </div>
            ) : null}
          </CardContent>
        </Card>

        <Dialog open={showResults} onOpenChange={setShowResults}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>{bodyType && bodyTypes[bodyType].title}</DialogTitle>
              <DialogDescription>
                {bodyType && bodyTypes[bodyType].description}
              </DialogDescription>
            </DialogHeader>
            <div className="mt-4">
              <h4 className="font-medium mb-2">Style Recommendations:</h4>
              <ul className="list-disc pl-4 space-y-1">
                {bodyType &&
                  bodyTypes[bodyType].recommendations.map((rec, index) => (
                    <li key={index} className="text-sm text-muted-foreground">
                      {rec}
                    </li>
                  ))}
              </ul>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}