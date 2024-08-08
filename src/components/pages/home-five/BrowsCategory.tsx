import LinkOutlineSmall from "@/components/button/LinkOutlineSmall";
import D4 from "@/components/sharedComponents/D4";
import TextL from "@/components/sharedComponents/TextL";
import FadeLeft from "@/motionEffect/FadeLeft";
import FadeRight from "@/motionEffect/FadeRight";
import StaggerEffectTwo from "@/motionEffect/StaggerEffectTwo";
import { homeFourOnlineCourseCardData } from "../../../../public/data/homeFourOnlineCourseCardData";
import BrowsCategoryCard from "./BrowsCategoryCard";
import SubTitle from "./SubTitle";

const BrowsCategory = () => {
  return (
    <div className="section-gap-top section-gap-bottom overflow-hidden">
      <div className="container">
        {/* section heading */}
        <div className="mx-auto flex max-w-[636px] flex-col items-center text-center">
          <SubTitle text="Browse Category" />
          <FadeLeft>
            <D4 className="pt-4">Discover jobs across popular roles</D4>
          </FadeLeft>
          <FadeRight>
            <TextL className="pt-6">
              Select a role and we&apos;ll show you relevant jobs for it!
            </TextL>
          </FadeRight>
        </div>
        <div className="padding-t-60 grid grid-cols-1 items-center gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {homeFourOnlineCourseCardData.map(({ id, ...props }, index) => (
            <StaggerEffectTwo key={id} id={index}>
              <BrowsCategoryCard key={id} {...props} />
            </StaggerEffectTwo>
          ))}
        </div>
        <div className="padding-t-40 mx-auto w-fit">
          <LinkOutlineSmall buttonText="See All" button />
        </div>
      </div>
    </div>
  );
};

export default BrowsCategory;
