import QuizGridAllCards from "@/components/pages/blog-grid/QuizGridAllCards";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quiz | BrainBooster",
  description: "Educational quiz platform",
};

const QuizGrid = () => {
  return (
    <>
      <QuizGridAllCards />
    </>
  );
};

export default QuizGrid;
