import NewsLetter from "@/components/pages/about-us/NewsLetter";
import Banner from "@/components/pages/courses-details-one/Banner";
import Body from "@/components/pages/courses-details-one/Body";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Course Details one - Education & Online Course With Community",
  description: "Education & Online Course With Community",
};

const CoursesDetailOne = () => {
  return (
    <>
      <Banner />
      <Body />
      <NewsLetter />
    </>
  );
};

export default CoursesDetailOne;
