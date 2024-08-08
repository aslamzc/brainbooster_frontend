import roundedText from "@/../public/images/home-four/rounded-text.png";
import banner from "@/../public/images/home-nine/banner.png";
import ButtonOutline from "@/components/button/ButtonOutline";
import ButtonPrimary from "@/components/button/ButtonPrimary";
import D3 from "@/components/sharedComponents/D3";
import TextM from "@/components/sharedComponents/TextM";
import TextXL from "@/components/sharedComponents/TextXL";

import Fade from "@/motionEffect/Fade";
import FadeLeft from "@/motionEffect/FadeLeft";
import FadeRight from "@/motionEffect/FadeRight";
import {
  IconCircleCheckFilled,
  IconStarFilled,
  IconStarHalfFilled,
  IconUsers,
} from "@tabler/icons-react";
import Image from "next/image";
import BannerInspireText from "./BannerInspireText";

const BannerNine = () => {
  return (
    <div className="relative overflow-clip">
      <div className="container">
        <div className="grid-cols-12 xl:grid">
          <div className="section-gap-top col-start-1 col-end-8 flex flex-col justify-between">
            <div className="col-start-1 col-end-7 max-w-[636px]">
              <BannerInspireText />
              <div>
                <FadeLeft>
                  <D3 className="pt-4 max-sm:text-h3">
                    Education Beyond Boundaries
                  </D3>
                </FadeLeft>
                <FadeRight>
                  <TextXL className="padding-t-40">
                    Explore a world of knowledge and possibilities at our
                    school. Unleash your potential in an environment dedicated
                  </TextXL>
                </FadeRight>
              </div>
              <Fade className="padding-t-40 gap-40px flex items-center max-sm:flex-col">
                <div className="shrink-0">
                  <ButtonPrimary buttonText="Apply Now" button link="/signup" />
                </div>
                <ButtonOutline button buttonText="About Us" link="/about-us" />
              </Fade>
            </div>
            <div className="section-gap-top max-xl:mx-auto">
              <div className="padding-e-60 padding-t-32 padding-b-32 relative flex items-center gap-3 bg-neutral-20 sm:gap-6 ">
                <div className="absolute bottom-0 left-[-50%] z-[-1] h-full w-full bg-neutral-20"></div>
                <div className="absolute bottom-0 right-[-50%] z-[-1] h-full w-full bg-neutral-20 xl:hidden"></div>
                <div className="flex gap-3 border-e border-neutral-700 pe-3 max-md:flex-col sm:pe-6 md:items-center">
                  <TextM>
                    Rated <span className="font-semibold">Excellent</span> On
                  </TextM>
                  <div className="flex items-center gap-2">
                    <IconStarFilled size={20} className="text-secondaryColor" />
                    <TextM>Trustpilot</TextM>
                  </div>
                  <div className="flex items-center gap-1">
                    <IconStarFilled size={20} className="text-secondaryColor" />
                    <IconStarFilled size={20} className="text-secondaryColor" />
                    <IconStarFilled size={20} className="text-secondaryColor" />
                    <IconStarFilled size={20} className="text-secondaryColor" />
                    <IconStarHalfFilled
                      size={20}
                      className="text-secondaryColor"
                    />
                  </div>
                </div>

                <div className="flex gap-2 whitespace-nowrap text-mText font-semibold max-sm:flex-col sm:items-center sm:gap-3">
                  <IconUsers size={20} /> <p>30 Million </p>{" "}
                  <span className="font-normal">+Students</span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative col-start-8 col-end-13 md:pb-6 md:ps-6">
            <Image
              src={banner}
              width={838}
              height={733}
              alt="Banner image"
              className="relative z-10 overflow-hidden md:max-w-[unset]"
            />
            {/* rounded text */}
            <div className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 rounded-full border border-neutral-500 bg-white p-2 xl:left-0 xl:top-2/3">
              <div className="relative">
                <Image
                  src={roundedText}
                  width={161}
                  height={161}
                  alt="Rounded Text"
                  className="animate-spin-slow max-sm:w-32"
                />
                <div className="absolute left-1/2 top-1/2  z-30 -translate-x-1/2 -translate-y-1/2 rounded-full border border-neutral-500 bg-white p-1 text-secondaryColorTwo sm:p-5 md:p-3 xl:top-1/2 ">
                  <div>
                    <IconCircleCheckFilled size={72} />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 z-0 h-[733px] w-[838px] border border-neutral-50 max-md:hidden"></div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default BannerNine;
