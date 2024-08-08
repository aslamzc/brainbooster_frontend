import NewsLetter from "@/components/pages/about-us/NewsLetter";
import CoursesComparisonBody from "@/components/pages/courses-comparison/CoursesComparisonBody";
import StudentSaySlider from "@/components/pages/courses-comparison/StudentSaySlider";
import DiscoverCourse from "@/components/sharedComponents/DiscoverCourse";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Course Comparison - Education & Online Course With Community",
  description: "Education & Online Course With Community",
};

const CoursesComparison = () => {
  return (
    <div className="bg-neutral-20">
      <CoursesComparisonBody />
      <DiscoverCourse />
      <StudentSaySlider />
      <NewsLetter />
    </div>
  );
};

export default CoursesComparison;
