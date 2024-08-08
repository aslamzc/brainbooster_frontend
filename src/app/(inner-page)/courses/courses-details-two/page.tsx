import NewsLetter from "@/components/pages/about-us/NewsLetter";
import CoursesDetailsTwoBody from "@/components/pages/courses-details-two/CoursesDetailsTwoBody";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Course Details Two - Education & Online Course With Community",
  description: "Education & Online Course With Community",
};

const CoursesDetailTwo = () => {
  return (
    <>
      <CoursesDetailsTwoBody />
      <NewsLetter />
    </>
  );
};

export default CoursesDetailTwo;
