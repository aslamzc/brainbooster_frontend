import SectionHeading from "@/components/sharedComponents/SectionHeading";
import StaggerEffectTwo from "@/motionEffect/StaggerEffectTwo";
import { v4 as uuidv4 } from "uuid";
import { homeEightCourseCategoriesData } from "../../../../public/data/homeEightCourseCategoriesData";
import HomeEightCategoriesCard from "./HomeEightCategoriesCard";

const HomeEightCoursesCategories = () => {
  return (
    <div className="">
      <div className="container section-gap-top section-gap-bottom overflow-hidden">
        <SectionHeading
          title="Explore Our Courses And Build Skills"
          description="Welcome to our diverse and dynamic course catalog. we're dedicated to providing you with access to high-quality education"
          link="/courses/courses-one"
          buttonText="See All Courses"
        />
        <div className="padding-t-60">
          <div className=" grid items-center justify-center gap-6 md:grid-cols-2 xl:grid-cols-3">
            {homeEightCourseCategoriesData?.map(({ ...props }, index) => (
              <StaggerEffectTwo key={uuidv4()} id={index}>
                <HomeEightCategoriesCard key={uuidv4()} {...props} />
              </StaggerEffectTwo>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeEightCoursesCategories;
