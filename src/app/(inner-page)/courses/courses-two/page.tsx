import NewsLetter from "@/components/pages/about-us/NewsLetter";
import CoursesTwoBody from "@/components/pages/course-two/CoursesTwoBody";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Course Two - Education & Online Course With Community",
  description: "Education & Online Course With Community",
};

const CoursesTwo = () => {
  return (
    <>
      <CoursesTwoBody />
      <NewsLetter />
    </>
  );
};

export default CoursesTwo;
