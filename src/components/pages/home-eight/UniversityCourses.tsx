import SectionHeading from "@/components/sharedComponents/SectionHeading";
import StaggerEffectTwo from "@/motionEffect/StaggerEffectTwo";
import { v4 as uuidv4 } from "uuid";
import { homeEightUniversityCoursesData } from "../../../../public/data/homeEightUniversityCoursesData";
import HomeEightUniversityCard from "./HomeEightUniversityCard";

const UniversityCourses = () => {
  return (
    <div className="overflow-hidden bg-neutral-20">
      <div className="container section-gap-top section-gap-bottom">
        <SectionHeading
          title="Explore Our Premier University Courses"
          description="Embark on a journey of academic excellence with our premier courses. Designed to challenge and inspire, these offerings represent"
          link="/courses/courses-one"
          buttonText="See All Courses"
        />
        <div className="padding-t-60">
          <div className=" grid items-center justify-center gap-6 xxl:grid-cols-2 ">
            {homeEightUniversityCoursesData?.map(({ ...props }, index) => (
              <StaggerEffectTwo key={uuidv4()} id={index}>
                <HomeEightUniversityCard {...props} />
              </StaggerEffectTwo>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversityCourses;
