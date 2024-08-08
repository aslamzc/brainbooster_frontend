import imageIllustration from "@/../public/images/courses-comparison/newsletter-illustration.png";
import element1 from "@/../public/images/event-details/element-message-1.png";
import element2 from "@/../public/images/event-details/element-message-2.png";
import element3 from "@/../public/images/event-details/element-message-3.png";
import element4 from "@/../public/images/event-details/element-message-4.png";
import Fade from "@/motionEffect/Fade";
import FadeLeft from "@/motionEffect/FadeLeft";
import FadeRight from "@/motionEffect/FadeRight";
import Image from "next/image";
import ButtonBlack from "../button/ButtonBlack";

const DiscoverCourse = () => {
  return (
    <section className="relative z-20 overflow-hidden">
      <div className="absolute bottom-0 left-0 -z-10 h-1/3 w-full bg-white"></div>
      <div className="z-20 mx-auto max-w-[1600px] bg-primaryColor max-xl:py-10 lg:ps-[152px] xl:rounded-16px xl:pe-[84px]">
        <div className="container grid-cols-12 items-end justify-between gap-24 xl:grid">
          <div className="relative col-start-1 col-end-6">
            <Fade>
              <Image
                src={imageIllustration}
                width={497}
                height={424}
                alt="Newsletter illustration"
              />
            </Fade>
            <Image
              src={element1}
              width={67}
              height={69}
              alt="Message element"
              className="absolute right-5 top-16 animate-pulse xxl:right-16"
            />
            <Image
              src={element2}
              width={65}
              height={67}
              alt="Message element"
              className="absolute right-10 top-0 animate-ping-smooth sm:right-0 xxl:right-5"
            />
            <Image
              src={element3}
              width={84}
              height={90}
              alt="Message element"
              className="absolute left-5 top-0 hidden animate-ping-small sm:left-0 sm:block "
            />
            <Image
              src={element4}
              width={52}
              height={53}
              alt="Message element"
              className="absolute left-5 top-10 animate-pulse-smooth sm:left-16  sm:top-20"
            />
          </div>
          <div className="padding-t-80 padding-b-80 col-start-6 col-end-13 xxl:col-start-7">
            <FadeLeft>
              <h3 className="d4 font-semibold">
                Discover Your Ideal Course Now!
              </h3>
            </FadeLeft>
            <FadeRight>
              <p className="lText mt-6 text-neutral-500">
                Embark on a journey of discovery with Edufast University.
                Explore our diverse range of courses tailored to your interests
                and aspirations.
              </p>
            </FadeRight>
            <Fade>
              <div className="mt-10">
                <ButtonBlack buttonText="Start Learning" />
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverCourse;
