import ButtonUnderLine from "@/components/button/ButtonUnderLine";
import D4 from "@/components/sharedComponents/D4";
import TextL from "@/components/sharedComponents/TextL";
import FadeLeft from "@/motionEffect/FadeLeft";
import FadeRight from "@/motionEffect/FadeRight";
import StaggerEffectTwo from "@/motionEffect/StaggerEffectTwo";
import { v4 as uuidv4 } from "uuid";
import { discoverCountryCoursesData } from "../../../../public/data/discoverCountryCoursesData";
import CountryCoursesCard from "./CountryCoursesCard";

function CountryCourses() {
  return (
    <div className="container section-gap-top section-gap-bottom overflow-hidden">
      <div className="mx-auto max-w-[636px] text-center">
        <FadeLeft>
          <D4>Discover 160+ Country Courses</D4>
        </FadeLeft>
        <FadeRight>
          <TextL className="pt-6">
            Select a role and we&apos;ll show you relevant jobs for it!
          </TextL>
        </FadeRight>
      </div>
      <div className="padding-t-60 grid grid-cols-1 items-center justify-between gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {discoverCountryCoursesData.map(({ id, ...props }, index) => (
          <StaggerEffectTwo key={uuidv4()} id={index}>
            <CountryCoursesCard {...props} />
          </StaggerEffectTwo>
        ))}
      </div>
      <div className="padding-t-40  mx-auto w-fit">
        <ButtonUnderLine buttonText="See All Country" />
      </div>
    </div>
  );
}

export default CountryCourses;
