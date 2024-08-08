import ButtonUnderLine from "@/components/button/ButtonUnderLine";
import D4 from "@/components/sharedComponents/D4";
import TextL from "@/components/sharedComponents/TextL";
import FadeLeft from "@/motionEffect/FadeLeft";
import FadeRight from "@/motionEffect/FadeRight";
import StaggerEffectTwo from "@/motionEffect/StaggerEffectTwo";
import { homeSevenOnlineCourseData } from "../../../../public/data/homeSevenOnlineCourseData";
import HomeSevenOnlineCoursesCard from "./HomeSevenOnlineCoursesCard";

const HomeSevenOnlineCourses = () => {
  return (
    <div className="section-gap-top section-gap-bottom overflow-hidden">
      <div className="container">
        {/* section heading */}
        <div className="mx-auto flex max-w-[636px] flex-col items-center text-center">
          <FadeLeft>
            <D4>Explore 9,000+ Free Online Courses</D4>
          </FadeLeft>
          <FadeRight>
            <TextL className="pt-6">
              Select a role and we&apos;ll show you relevant jobs for it!
            </TextL>
          </FadeRight>
        </div>
        <div className="padding-t-60 grid grid-cols-1 items-center gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {homeSevenOnlineCourseData.map(({ id, ...props }, index) => (
            <StaggerEffectTwo key={id} id={index}>
              <HomeSevenOnlineCoursesCard {...props} />
            </StaggerEffectTwo>
          ))}
        </div>
        <div className="padding-t-40 mx-auto w-fit">
          <ButtonUnderLine buttonText="See All Courses" />
        </div>
      </div>
    </div>
  );
};

export default HomeSevenOnlineCourses;
