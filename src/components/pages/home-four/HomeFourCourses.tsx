"use client";
import CoursesCard from "@/components/Card/CoursesCard";
import ButtonUnderLine from "@/components/button/ButtonUnderLine";
import D4 from "@/components/sharedComponents/D4";
import FadeLeft from "@/motionEffect/FadeLeft";
import { useState } from "react";
import { coursesData } from "../../../../public/data/coursesData";
import ButtonTabOutline from "./ButtonTabOutline";

const HomeFourCourses = () => {
  const [courseList, setCourseList] = useState(coursesData);
  const [activeTab, setActiveTab] = useState("All Categories");
  const buttonData = ["All Categories", "Design", "Finance"];

  const handleTabClick = (category: string) => {
    setActiveTab(category);
    // Filter the course list based on the selected category
    const filteredCourses = coursesData.filter((course) => {
      return category === "All Categories" || course.courseType === category;
    });

    setCourseList(filteredCourses);
  };
  return (
    <div className="container section-gap-top section-gap-bottom overflow-hidden">
      <div className="grid-cols-12 items-center gap-6 lg:grid">
        <FadeLeft className="col-start-1 col-end-7">
          <D4>Find Your From The Featured Courses</D4>
        </FadeLeft>
        <div className="col-start-7 col-end-13 flex  items-center gap-4 max-lg:padding-t-40 max-sm:flex-wrap xxl:col-start-8">
          {buttonData.map((buttonText, index) => (
            <ButtonTabOutline
              key={index}
              buttonText={buttonText}
              isActive={activeTab === buttonText}
              onClick={() => handleTabClick(buttonText)}
            />
          ))}
        </div>
      </div>
      <div className="padding-t-60">
        <div className=" grid items-center justify-center gap-12 md:grid-cols-2 xl:grid-cols-3">
          {courseList.slice(0, 6).map(({ id, ...props }) => (
            <CoursesCard key={id} {...props} />
          ))}
        </div>
        <div className="padding-t-60 mx-auto w-fit">
          <ButtonUnderLine
            buttonText="See all courses"
            link="/courses/courses-one"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeFourCourses;
