"use client";
import { useEffect, useState } from "react";
import { aboutCoursesData } from "../../../../public/data/aboutCoursesData";
import AllCourses from "./AllCourses";
import CourseOneBannerWithLabel from "./CourseOneBannerWithLabel";

const BannerAndCourseCard = () => {
  const [courseList, setCourseList] = useState(aboutCoursesData);
  const [buttonData, setButtonData] = useState<string[]>([]);

  useEffect(() => {
    const uniqueTags = new Set<string>();

    aboutCoursesData.forEach((data) => {
      data.tags.forEach((tag) => {
        uniqueTags.add(tag.label);
      });
    });

    setButtonData(Array.from(uniqueTags));
  }, []);

  const handleTabClick = (tag: string) => {
    const filteredCourses = aboutCoursesData.filter((course) => {
      return course.tags.some((courseTag) => courseTag.label === tag);
    });

    setCourseList(filteredCourses);
  };

  return (
    <>
      <CourseOneBannerWithLabel
        title=" Explore Our Courses And Build Skills"
        buttonText={buttonData}
        handleTabClick={handleTabClick}
      />
      <AllCourses courseList={courseList} />
    </>
  );
};

export default BannerAndCourseCard;
