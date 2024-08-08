"use client";
import roundedText from "@/../public/images/home-four/rounded-text.png";
import bannerFrame from "@/../public/images/home-seven/banner-fram.png";
import bannerImage from "@/../public/images/home-seven/banner.png";
import star1 from "@/../public/images/home-seven/star-1.png";
import star2 from "@/../public/images/home-seven/star-2.png";
import ButtonOutline from "@/components/button/ButtonOutline";
import ButtonPrimary from "@/components/button/ButtonPrimary";
import D2 from "@/components/sharedComponents/D2";
import H4 from "@/components/sharedComponents/H4";
import TextS from "@/components/sharedComponents/TextS";
import TextXL from "@/components/sharedComponents/TextXL";
import UsersVertical from "@/components/sharedComponents/UsersVertical";
import Fade from "@/motionEffect/Fade";
import FadeLeft from "@/motionEffect/FadeLeft";
import FadeRight from "@/motionEffect/FadeRight";
import { IconCircleCheckFilled, IconPlus } from "@tabler/icons-react";
import Image from "next/image";
import SubTitle from "./SubTitle";

const HomeSevenBanner = () => {
  return (
    <div className="relative overflow-hidden bg-secondaryColorTwo bg-opacity-5">
      <div className="container grid-cols-12  items-center gap-6 max-4xl:section-gap-top xxl:grid">
        {/* banner left side start */}
        <div className="col-start-1 col-end-7 max-lg:padding-t-80">
          <div>
            <SubTitle text="100% QUALITY COURSES" />
            <FadeLeft>
              <D2 className="pt-4 capitalize max-sm:text-h3">
                Discover Your Perfect Courses
              </D2>
            </FadeLeft>
            <FadeRight>
              <TextXL className="padding-t-40 !font-normal">
                We Have 40k+ Online Courses & 500K+ Online Registered Student.
              </TextXL>
            </FadeRight>
            <Fade className="padding-t-40 gap-40px flex items-center max-sm:flex-col">
              <ButtonPrimary
                buttonText="Browse courses"
                button
                link="/courses/courses-one"
              />
              <ButtonOutline button buttonText="Contact Us" link="contact-us" />
            </Fade>
          </div>
        </div>
        {/* banner left side end */}

        {/* banner right side start */}
        <Fade className="relative col-start-7 col-end-13 max-xxl:padding-t-80 4xl:col-start-8">
          <Image
            src={bannerImage}
            width={442}
            height={675}
            alt="Banner image"
          />
        </Fade>

        {/* banner right side end */}
      </div>
      <div>
        {/* rounded text */}
        <div className="absolute top-[60%] z-30 rounded-full border border-neutral-500 bg-white p-2 max-lg:left-20 max-sm:hidden lg:right-[40%] lg:top-[40%] 4xl:right-[35%] 4xl:top-52 ">
          <div className="relative">
            <Image
              src={roundedText}
              width={161}
              height={161}
              alt="Rounded Text"
              className="animate-spin-slow"
            />
            <div className="absolute left-1/2 top-1/2  z-30 -translate-x-1/2 -translate-y-1/2 rounded-full border border-neutral-500 bg-white p-3 text-secondaryColorTwo sm:p-5 xl:top-1/2 ">
              <div>
                <IconCircleCheckFilled size={72} />
              </div>
            </div>
          </div>
        </div>
        {/* users */}
        <div className="absolute z-30 flex flex-col items-center  gap-4 rounded-full bg-bgColorOne px-3 py-4 text-center text-white max-sm:bottom-20 max-sm:right-3 sm:max-lg:right-10 sm:max-md:bottom-[35%] md:max-xxl:bottom-20 md:max-lg:right-40 lg:max-xxl:left-1/2 xxl:right-60 xxl:top-72   ">
          <UsersVertical data={<IconPlus />} />{" "}
          <div className="flex flex-col gap-1">
            <H4>3k+</H4>
            <TextS className="!text-white">Active</TextS>
          </div>
        </div>
        <div className="absolute right-0 -z-10 hidden xxl:top-0 xxl:block">
          <Image
            src={bannerFrame}
            width={563}
            height={689}
            alt="Banner Frame"
          />
        </div>
        <div className="absolute right-80 hidden rounded-full bg-secondaryColor px-[18px]  py-[14px] text-center max-xxl:bottom-80 md:block xxl:top-24">
          <TextS>User</TextS>
          <H4>7k+</H4>
        </div>
        <Image
          src={star1}
          width={41}
          height={41}
          alt="star one"
          className="absolute top-5 animate-spin-slow max-md:right-20 sm:top-[8%] md:left-[55%] xxl:top-[20%]"
        />
        <Image
          src={star2}
          width={48}
          height={48}
          alt="star two"
          className="absolute animate-ping-smooth max-lg:bottom-[50%] max-sm:left-5 sm:max-xxl:right-[28%] lg:bottom-[15%] xxl:right-[5%]"
        />
      </div>
    </div>
  );
};

export default HomeSevenBanner;
