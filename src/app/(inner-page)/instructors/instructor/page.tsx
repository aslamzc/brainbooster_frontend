import NewsLetter from "@/components/pages/about-us/NewsLetter";

import bannerImage from "@/../public/images/instructor/all-course-banner.png";
import AllCourseBody from "@/components/pages/all-courses/AllCourseBody";
import Banner1600WithBreadCrumbsInstructor from "@/components/sharedComponents/Banner1600WithBreadCrumbsInstructor";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Instructor - Education & Online Course With Community",
  description: "Education & Online Course With Community",
};

const AllCourse = () => {
  return (
    <div>
      <Banner1600WithBreadCrumbsInstructor
        bannerImage={bannerImage}
        page="Instructors"
        subPage="Instructor"
        pageLink="/instructor"
      />
      <AllCourseBody />
      <NewsLetter />
    </div>
  );
};

export default AllCourse;
