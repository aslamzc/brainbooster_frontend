import imageIllustration from "@/../public/images/instructor/primary-banner.png";
import Fade from "@/motionEffect/Fade";
import Image from "next/image";
import StartTechPrimaryBannerRight from "./StartTechPrimaryBannerRight";

const InstructorCourseBanner = () => {
  return (
    <section className="relative z-20 overflow-hidden">
      <div className="absolute bottom-0 left-0 -z-10 h-1/3 w-full bg-white"></div>
      <div className="z-20 mx-auto max-w-[1600px] bg-primaryColor max-xl:py-10 lg:ps-[152px] xl:rounded-16px xl:pe-[84px]">
        <div className="container grid-cols-12 items-center justify-between gap-24 xl:grid">
          <div className="col-start-1 col-end-6">
            <Fade>
              <Image
                src={imageIllustration}
                width={497}
                height={424}
                alt="Newsletter illustration"
              />
            </Fade>
          </div>
          <StartTechPrimaryBannerRight
            title="Let’s Find The Right Course For You!"
            text="…and achieve their learning goals. With our expert tutors, your goals are closer than ever!"
            buttonText="Start Learning"
            link="/courses/courses-one"
          />
        </div>
      </div>
    </section>
  );
};

export default InstructorCourseBanner;
