import platformVector from "@/../public/images/home-four/platform-vector.png";
import platform from "@/../public/images/home-four/platform.png";
import ButtonPrimary from "@/components/button/ButtonPrimary";
import D4 from "@/components/sharedComponents/D4";
import H5 from "@/components/sharedComponents/H5";
import InfoPlatFormFour from "@/components/sharedComponents/InfoPlatFormFour";
import TextL from "@/components/sharedComponents/TextL";
import TextM from "@/components/sharedComponents/TextM";
import TextXL from "@/components/sharedComponents/TextXL";
import Users from "@/components/sharedComponents/Users";
import FadeDownToTop from "@/motionEffect/FadeDownToTop";
import FadeLeft from "@/motionEffect/FadeLeft";
import { IconDiscountCheck } from "@tabler/icons-react";
import Image from "next/image";

const HomeFourBestPlatform = () => {
  return (
    <div className="container section-gap-top section-gap-bottom grid-cols-12 items-center gap-10 max-xxl:overflow-hidden lg:grid">
      <FadeLeft className="gap-40px col-start-1 col-end-7 flex flex-col ">
        <div className="flex flex-col gap-3">
          <H5>Best Online Learning Platform</H5>
          <div className="flex flex-col gap-6">
            <D4>
              The Edufast Journey: A Legacy of{" "}
              <span className=" text-secondaryColorTwo">Learning</span>
            </D4>
            <TextL>
              Our story is a journey of passion, commitment, and dedication to
              empowering learners like you.
            </TextL>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="text-secondaryColorTwo">
              <IconDiscountCheck />
            </div>{" "}
            <TextXL>9/10 Average Satisfaction Rate</TextXL>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-secondaryColorTwo">
              <IconDiscountCheck />
            </div>{" "}
            <TextXL>96% Completitation Rate</TextXL>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-secondaryColorTwo">
              <IconDiscountCheck />
            </div>{" "}
            <TextXL>Friendly Environment & Expert Teacher</TextXL>
          </div>
        </div>
        <ButtonPrimary button buttonText="Read More" />
      </FadeLeft>
      <FadeDownToTop className="col-start-7 col-end-13 mx-auto w-fit max-xl:padding-t-40 xl:col-start-8">
        <div className="relative">
          <Image
            src={platform}
            width={526}
            height={526}
            alt="Platform image"
            className="rounded-full"
          />
          <div className="absolute -left-10 top-16 -z-10 hidden xxl:block">
            <Image
              src={platformVector}
              width={162}
              height={372}
              alt="Platform vector"
            />
          </div>

          <div className="absolute right-0 top-10 hidden sm:block xl:-right-6 xxl:-right-14 xxl:top-20">
            <InfoPlatFormFour>
              <TextM className="!font-semibold">
                <span className="text-secondaryColorTwo">36+ </span>{" "}
                <span className="font-medium text-neutral-500">
                  Enrolled Students
                </span>
              </TextM>

              <Users />
            </InfoPlatFormFour>
          </div>
          <div className="absolute bottom-5 left-0 sm:bottom-20 md:-left-14">
            <InfoPlatFormFour>
              <TextM className="!font-semibold">
                <span className="text-secondaryColorTwo">Success</span>{" "}
                <span className="font-medium text-neutral-500">Rate 4.9%</span>
              </TextM>
              <div className="flex flex-col gap-2">
                <div className="h-1.5 w-full rounded-full bg-neutral-20">
                  <div className="h-1.5 w-3/4 rounded-full bg-secondaryColorTwo"></div>
                </div>
                <div className="h-1.5 w-full rounded-full bg-neutral-20">
                  <div className="h-1.5 w-2/4 rounded-full bg-secondaryColor"></div>
                </div>
                <div className="h-1.5 w-full rounded-full bg-neutral-20">
                  <div className="h-1.5 w-1/4 rounded-full bg-neutral-500"></div>
                </div>
              </div>
            </InfoPlatFormFour>
          </div>
        </div>
      </FadeDownToTop>
    </div>
  );
};

export default HomeFourBestPlatform;
