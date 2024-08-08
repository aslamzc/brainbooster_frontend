"use client";
import banner1 from "@/../public/images/home-five/banner-boy.png";
import banner2 from "@/../public/images/home-five/banner-girl.png";
import threeLine from "@/../public/images/home-five/banner-three-line.png";
import bannerWave from "@/../public/images/home-five/banner-wave.png";
import gradientBg from "@/../public/images/home-five/gradient-illipse.png";
import icon from "@/../public/images/home-five/icon.png";
import roundedText from "@/../public/images/home-four/rounded-text.png";
import ButtonOutline from "@/components/button/ButtonOutline";
import ButtonPrimary from "@/components/button/ButtonPrimary";
import D2 from "@/components/sharedComponents/D2";
import H2 from "@/components/sharedComponents/H2";
import H4 from "@/components/sharedComponents/H4";
import TextM from "@/components/sharedComponents/TextM";
import TextS from "@/components/sharedComponents/TextS";
import TextXL from "@/components/sharedComponents/TextXL";
import Users from "@/components/sharedComponents/Users";
import VideoModal from "@/components/sharedComponents/VideoModal";
import Fade from "@/motionEffect/Fade";
import FadeDownToTop from "@/motionEffect/FadeDownToTop";
import FadeTopToDown from "@/motionEffect/FadeTopToDown";
import {
  IconCircleCheckFilled,
  IconPlayerPlayFilled,
  IconPlus,
} from "@tabler/icons-react";
import Image from "next/image";
import { useState } from "react";
import SubTitle from "./SubTitle";

const BannerFive = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="relative">
      <div className="container grid-cols-12 items-center gap-6 max-xl:section-gap-top max-xl:overflow-hidden xl:grid">
        <div className="col-start-1 col-end-7 max-lg:padding-t-80">
          <Fade>
            <SubTitle text="Empower Your Journey" />
            <D2 className="pt-4 uppercase max-sm:text-h3">
              Learn Beyond Limits,
              <span className=" text-secondaryColorTwo ">Succeed</span>{" "}
            </D2>
            <TextXL className="padding-t-40">
              Welcome to a new era of education! Unleash your potential, learn
              from experts, and grow with us.
            </TextXL>
            <div className="padding-t-40 gap-40px flex items-center max-sm:flex-col">
              <ButtonPrimary
                buttonText="Explore More"
                button
                link="/blog/blog-classic"
              />
              <ButtonOutline button buttonText="Contact Us" link="contact-us" />
            </div>
          </Fade>
        </div>
        <div className="relative col-start-7 col-end-13 max-xl:padding-t-80  xxl:col-start-8 4xl:-mr-40">
          <div className="absolute z-30 rounded-full border border-neutral-500 bg-white p-2 max-md:bottom-5 max-md:left-0 max-sm:hidden md:right-16 md:top-36 4xl:top-10">
            <div className="relative">
              <Image
                src={roundedText}
                width={161}
                height={161}
                alt="Rounded Text"
                className="animate-spin-slow max-4xl:w-32"
              />
              <div className="absolute left-1/2 top-1/2  z-30 -translate-x-1/2 -translate-y-1/2 rounded-full border border-neutral-500 bg-white p-2 text-secondaryColorTwo xl:top-1/2 4xl:p-5 ">
                <div>
                  <IconCircleCheckFilled size={72} />
                </div>
              </div>
            </div>
          </div>
          <div className="grid w-fit grid-cols-2 items-end justify-center sm:gap-5 lg:gap-8 4xl:-mt-32">
            <FadeTopToDown className="z-20 shrink-0 pb-10 sm:pb-40 md:pb-[170px]">
              <Image
                src={banner1}
                width={490}
                height={728}
                alt="banner image one"
                className="max-4xl:w-[350px] xl:max-w-[unset] 4xl:min-w-max"
              />{" "}
            </FadeTopToDown>
            <FadeDownToTop className="h-fit xl:pt-52 4xl:pt-[260px]">
              <Image
                src={banner2}
                width={347}
                height={640}
                alt="banner medium image"
                className="z-0 4xl:min-w-max "
              />{" "}
            </FadeDownToTop>
            <div className="absolute -right-5 hidden max-xxl:top-[calc(50%-40px)] xl:block xxl:-right-16 xxl:top-1/2 ">
              <Image src={icon} width={96} height={96} alt="Icon" />
            </div>
            <div className="absolute top-10 z-30 flex items-center gap-4 rounded-full border border-neutral-30 bg-neutral-20 px-6 py-3 max-md:right-0 max-[500px]:hidden md:max-xl:right-0 md:max-xl:top-10 xl:-left-1/3 xl:top-20">
              <Users data={<IconPlus />} plusBg="bg-secondaryColor" />{" "}
              <div className="flex flex-col gap-1">
                <H4>1k+</H4>
                <TextS>Courses</TextS>
              </div>
            </div>
            <div className="absolute bottom-20 left-0 z-30 flex flex-col items-center gap-1 rounded-full border-[12px] border-white bg-secondaryColorTwo px-6 py-10 text-white max-lg:hidden 4xl:left-20">
              <div className="relative flex flex-col items-center gap-1">
                <H2>3.6k+</H2>
                <TextM>Students</TextM>
                <Image
                  src={threeLine}
                  width={55}
                  height={55}
                  alt="Three Line"
                  className="absolute -bottom-16 -left-16 shrink-0"
                />
              </div>
            </div>
            <div className="absolute bottom-1/2 z-30 translate-y-1/2 rounded-full border-[5px] border-white bg-white text-secondaryColorTwo max-lg:left-[40%]  lg:-left-10">
              <button
                onClick={() => setOpen(true)}
                className=" rounded-full border-4 border-secondaryColor bg-white p-3 sm:border-[12px]  "
              >
                <IconPlayerPlayFilled size={32} />
              </button>
            </div>
          </div>
        </div>
        <VideoModal isOpen={isOpen} setOpen={setOpen} videoId="4DCTTrGjGU4" />
      </div>
      <div className="absolute left-0 top-0 -z-10">
        <Image
          src={gradientBg}
          width={652}
          height={900}
          alt="gradient background"
        />
      </div>

      <Image
        src={bannerWave}
        width={838}
        height={627}
        alt="Banner Wave"
        className="absolute -top-[200px] right-0 z-20 hidden xxl:block"
      />
    </div>
  );
};

export default BannerFive;
