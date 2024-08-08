import NewsLetter from "@/components/pages/about-us/NewsLetter";
import InstructorCourseBanner from "@/components/pages/instructor/InstructorCourseBanner";
import InstructorList from "@/components/pages/instructor/InstructorList";
import TestimonialSlider from "@/components/pages/instructor/TestimonialSlider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Instructors - Education & Online Course With Community",
  description: "Education & Online Course With Community",
};

const Instructor = () => {
  return (
    <div>
      <InstructorList />
      <InstructorCourseBanner />
      <TestimonialSlider />
      <NewsLetter />
    </div>
  );
};

export default Instructor;
