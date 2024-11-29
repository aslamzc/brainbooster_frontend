import QuizDetailsContent from "@/components/pages/quiz-details/QuizDetailsContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quiz | BrainBooster",
  description: "Quiz Details",
};

const QuizDetails = () => {
  return (
    <div className="bg-neutral-20">
      <QuizDetailsContent />
    </div>
  );
};

export default QuizDetails;
