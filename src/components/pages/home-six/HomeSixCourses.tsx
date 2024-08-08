"use client";
import ButtonUnderLine from "@/components/button/ButtonUnderLine";
import D4 from "@/components/sharedComponents/D4";
import FadeLeft from "@/motionEffect/FadeLeft";
import StaggerEffectTwo from "@/motionEffect/StaggerEffectTwo";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { homeSevenBuildSkillsCardData } from "../../../../public/data/homeSevenBuildSkillsCardData";
import ButtonTabOutline from "../home-four/ButtonTabOutline";
import HomeSixCourseCard from "./HomeSixCourseCard";

const HomeSixCourses = () => {
  const [courseList, setCourseList] = useState(homeSevenBuildSkillsCardData);
  const [activeTab, setActiveTab] = useState("All Courses");
  const buttonData = ["All Courses", "Design", "Finance"];

  const handleTabClick = (category: string) => {
    setActiveTab(category);
    // Filter the course list based on the selected category
    const filteredCourses = homeSevenBuildSkillsCardData.filter((course) => {
      return category === "All Courses" || course.courseType === category;
    });

    setCourseList(filteredCourses);
  };
  return (
    <div className="overflow-hidden bg-neutral-20">
      <div className="container section-gap-top section-gap-bottom">
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
          <div className=" grid items-center justify-center gap-6 md:grid-cols-2 xl:grid-cols-3">
            {courseList?.map(({ ...props }, index) => (
              <StaggerEffectTwo key={uuidv4()} id={index}>
                <HomeSixCourseCard {...props} />
              </StaggerEffectTwo>
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
    </div>
  );
};

export default HomeSixCourses;
