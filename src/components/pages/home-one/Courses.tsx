"use client";
import rocket from "@/../public/images/homeOne/rocket.png";
import CoursesCard from "@/components/Card/CoursesCard";
import ButtonTab from "@/components/button/ButtonTab";
import SectionHeading from "@/components/sharedComponents/SectionHeading";
import StaggerEffectTwo from "@/motionEffect/StaggerEffectTwo";
import Image from "next/image";
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
    <div className="section-gap-top relative overflow-hidden">
      <div className="container">
        {/* section heading */}
        <SectionHeading
          title="Explore Our Courses And Build Skills"
          description="Welcome to our diverse and dynamic course catalog. we're
              dedicated to providing you with access to high-quality education"
          buttonText="See All Courses"
          link="/courses/courses-one"
        />

        {/* courses tab */}
        <div className="padding-t-60">
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
        <div className="padding-t-40">
          <div className=" grid items-center justify-center gap-8 md:grid-cols-2 xl:grid-cols-3 xxl:gap-12">
            {courseList.slice(0, 6).map(({ id, ...props }) => (
              <CoursesCard key={id} {...props} />
            ))}
          </div>
        </div>
      </div>
      {/* rocket element */}
      <div className="right-20 top-48 hidden 4xl:absolute 4xl:block">
        <Image src={rocket} width={126} height={128} alt="Rocket element" />
      </div>
    </div>
  );
};

export default Courses;
