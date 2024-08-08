import NewsLetter from "@/components/pages/about-us/NewsLetter";
import BannerAndCourseCard from "@/components/pages/course-one/BannerAndCourseCard";
import CustomersSay from "@/components/pages/home-one/CustomersSay";
import PricePlan from "@/components/pages/home-two/PricePlan";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Course One - Education & Online Course With Community",
  description: "Education & Online Course With Community",
};

const CoursesOne = () => {
  return (
    <>
      <BannerAndCourseCard />
      <PricePlan />
      <CustomersSay />
      <NewsLetter />
    </>
  );
};

export default CoursesOne;
