"use client";
import QuizGridAllCards from "@/components/pages/blog-grid/QuizGridAllCards";
import CourseOneBannerWithLabel from "@/components/pages/course-one/CourseOneBannerWithLabel";
import { useEffect, useState } from "react";
import { aboutCoursesData } from "../../../../public/data/aboutCoursesData";

const QuizGrid = () => {
  const [buttonData, setButtonData] = useState<string[]>([]);
  const handleTabClick = (tag: string) => { };
  return (
    <>
      <CourseOneBannerWithLabel
        title="Quizzes"
        buttonText={buttonData}
        handleTabClick={handleTabClick}
      />
      <QuizGridAllCards />

      <div className="section-gap-top">
        {/* <NewsLetter /> */}
      </div>
    </>
  );
};

export default QuizGrid;
