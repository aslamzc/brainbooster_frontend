"use client";
import SectionHeading from "@/components/sharedComponents/SectionHeading";
import StaggerEffectTwo from "@/motionEffect/StaggerEffectTwo";
import { v4 as uuidv4 } from "uuid";
import { homeSevenBuildSkillsCardData } from "../../../../public/data/homeSevenBuildSkillsCardData";
import HomeSevenCourseCard from "../home-six/HomeSevenCourseCard";

const HomeSevenExploreCourses = () => {
  return (
    <div className="bg-secondaryColorTwo bg-opacity-5">
      <div className="container section-gap-top section-gap-bottom">
        <SectionHeading
          title="Explore Our Courses And Build Skills"
          description="Welcome to our diverse and dynamic course catalog. we're dedicated to providing you with access to high-quality education"
          link="/courses/courses-one"
          buttonText="See All Courses"
        />
        <div className="padding-t-60">
          <div className=" grid items-center justify-center gap-6 md:grid-cols-2 xl:grid-cols-3">
            {homeSevenBuildSkillsCardData?.map(({ ...props }, index) => (
              <StaggerEffectTwo key={uuidv4()} id={index}>
                <HomeSevenCourseCard {...props} />
              </StaggerEffectTwo>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSevenExploreCourses;
