"use client";
import QuizGridAllCards from "@/components/pages/blog-grid/QuizGridAllCards";
import CourseOneBannerWithLabel from "@/components/pages/course-one/CourseOneBannerWithLabel";


const QuizGrid = () => {
  return (
    <>
      <CourseOneBannerWithLabel title="Quizzes" />
      <QuizGridAllCards />
    </>
  );
};

export default QuizGrid;
