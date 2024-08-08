"use client";
import banner1 from "@/../public/images/home-four/banner-1.png";
import banner2 from "@/../public/images/home-four/banner-2.png";
import bannerMedium1 from "@/../public/images/home-four/banner-medium-1.png";
import bannerMedium2 from "@/../public/images/home-four/banner-medium-2.png";
import bannerSmall1 from "@/../public/images/home-four/banner-small-1.png";
import bannerSmall2 from "@/../public/images/home-four/banner-small-2.png";
import roundedText from "@/../public/images/home-four/rounded-text.png";
import D2 from "@/components/sharedComponents/D2";
import TextXL from "@/components/sharedComponents/TextXL";
import VideoModal from "@/components/sharedComponents/VideoModal";
import Fade from "@/motionEffect/Fade";
import FadeDownToTop from "@/motionEffect/FadeDownToTop";
import FadeLeft from "@/motionEffect/FadeLeft";
import FadeRight from "@/motionEffect/FadeRight";
import FadeTopToDown from "@/motionEffect/FadeTopToDown";
import { IconCircleCheckFilled, IconDiscountCheck } from "@tabler/icons-react";
import Image from "next/image";
import { useState } from "react";
import H5 from "../../sharedComponents/H5";
import BannerButtonAndVideo from "../home-three/BannerButtonAndVideo";
// import banner2 from "@/../public/images/home-four/banner-2.png"
const BannerFour = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="container grid-cols-12 items-center gap-6 max-xl:overflow-hidden lg:grid">
      <div className="col-start-1 col-end-8 max-lg:padding-t-80">
        <div>
          <FadeLeft>
            <H5>Elevate Your Learning</H5>
          </FadeLeft>
          <FadeRight>
            <D2 className="pt-4 !font-bold uppercase max-sm:text-h2">
              Learn,Grow,{" "}
              <span className="border-b-2 border-secondaryColorTwo text-secondaryColorTwo">
                Succeed
              </span>{" "}
            </D2>
          </FadeRight>
          <div className="padding-t-40 gap-40px flex max-sm:flex-col sm:items-center">
            <FadeLeft className="flex items-center gap-3">
              <IconDiscountCheck /> <TextXL>8.7 Million+ Learners</TextXL>
            </FadeLeft>
            <FadeRight className="flex items-center gap-3">
              <IconDiscountCheck /> <TextXL>66% Alumni Career Tran</TextXL>
            </FadeRight>
          </div>
          <Fade>
            <BannerButtonAndVideo setOpen={setOpen} />
          </Fade>
        </div>
      </div>
      <div className="relative col-start-8 col-end-13 max-lg:padding-t-80 4xl:-mr-40">
        <div className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 rounded-full border border-neutral-500 bg-white p-2 ">
          <div className="relative">
            <Image
              src={roundedText}
              width={161}
              height={161}
              alt="Rounded Text"
              className=" animate-spin-slow"
            />
            <div className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 rounded-full border border-neutral-500 bg-white p-3 text-secondaryColorTwo sm:p-5 ">
              <div>
                <IconCircleCheckFilled size={72} />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:gap-5 lg:gap-8 ">
          <div className=" padding-b-60 flex flex-col items-center">
            <div>
              <FadeTopToDown>
                <Image
                  src={banner1}
                  width={240}
                  height={405}
                  alt="banner image one"
                  className="max-sm:max-w-[150px]"
                />{" "}
              </FadeTopToDown>
            </div>
            <div className="self-start">
              <FadeDownToTop>
                <Image
                  src={bannerSmall1}
                  width={60}
                  height={60}
                  alt="banner small"
                  className=" rounded-full"
                />
              </FadeDownToTop>
            </div>
            <div>
              <FadeTopToDown>
                <Image
                  src={bannerMedium1}
                  width={160}
                  height={160}
                  alt="banner medium image"
                  className=" rounded-full max-sm:w-[100px]"
                />{" "}
              </FadeTopToDown>
            </div>
          </div>
          <div className=" padding-t-60 flex flex-col items-center">
            <div>
              <FadeDownToTop>
                <Image
                  src={bannerMedium2}
                  width={160}
                  height={160}
                  alt="banner image one"
                  className="rounded-full max-sm:w-[100px]"
                />{" "}
              </FadeDownToTop>
            </div>
            <div className="self-end">
              <Image
                src={bannerSmall2}
                width={60}
                height={60}
                alt="banner small"
                className=" rounded-full"
              />
            </div>
            <div>
              <FadeDownToTop>
                <Image
                  src={banner2}
                  width={240}
                  height={405}
                  alt="banner medium image"
                  className="max-sm:max-w-[150px]"
                />{" "}
              </FadeDownToTop>
            </div>
          </div>
        </div>
      </div>
      <VideoModal isOpen={isOpen} setOpen={setOpen} videoId="4DCTTrGjGU4" />
    </div>
  );
};

export default BannerFour;
