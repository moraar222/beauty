import Hero from "@/components/hero";
import BodyTypeQuiz from "@/components/body-type-quiz";
import Features from "@/components/features";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <BodyTypeQuiz />
    </div>
  );
}