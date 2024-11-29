import QuizGridAllCards from "@/components/pages/blog-grid/QuizGridAllCards";
import CourseOneBannerWithLabel from "@/components/pages/course-one/CourseOneBannerWithLabel";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quiz | BrainBooster",
  description: "Educational quiz platform",
};

const QuizGrid = () => {
  return (
    <>
      <CourseOneBannerWithLabel title="Quizzes" />
      <QuizGridAllCards />
    </>
  );
};

export default QuizGrid;
