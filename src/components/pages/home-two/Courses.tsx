"use client";
import CoursesCardHorizontal from "@/components/Card/CoursesCardHorizontal";
import ButtonTab from "@/components/button/ButtonTab";
import SectionHeading from "@/components/sharedComponents/SectionHeading";
import StaggerEffectTwo from "@/motionEffect/StaggerEffectTwo";
import { useState } from "react";
import { coursesData } from "../../../../public/data/coursesData";

const Courses = () => {
  const [courseList, setCourseList] = useState(coursesData);
  const [activeTab, setActiveTab] = useState("All Categories");
  const buttonData = [
    "All Categories",
    "Design",
    "Front End",
    "Back End",
    "Marketing",
    "Academic",
    "Finance",
  ];

  const handleTabClick = (category: string) => {
    setActiveTab(category);
    // Filter the course list based on the selected category
    const filteredCourses = coursesData.filter((course) => {
      return category === "All Categories" || course.courseType === category;
    });

    setCourseList(filteredCourses);
  };
  return (
    <div className="section-gap-top section-gap-bottom overflow-hidden">
      <div className="container">
        {/* section heading */}
        <SectionHeading
          title="Explore Our Courses And Build Skills"
          description="Welcome to our diverse and dynamic course catalog. we're dedicated to providing you with access to high-quality education"
          link="/courses/courses-two"
          buttonText="See All Courses"
        />
        {/* courses tab */}
        <div className="mt-60px">
          <div className="flex flex-wrap justify-between gap-2.5 rounded-16px border border-neutral-40 p-3 xxl:justify-center">
            {buttonData.map((buttonText, index) => (
              <StaggerEffectTwo key={index} id={index}>
                <ButtonTab
                  key={index}
                  buttonText={buttonText}
                  isActive={activeTab === buttonText}
                  onClick={() => handleTabClick(buttonText)}
                />
              </StaggerEffectTwo>
            ))}
          </div>
        </div>
        {/* courses card */}
        <div className="mt-10">
          <div className=" grid grid-cols-1 items-center justify-center gap-8 lg:grid-cols-2 xl:grid-cols-3 xxl:grid-cols-2  xxl:gap-12">
            {courseList.slice(0, 6).map(({ id, ...props }) => (
              <CoursesCardHorizontal key={id} {...props} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
