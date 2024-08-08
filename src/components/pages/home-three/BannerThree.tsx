"use client";
import bannerImage from "@/../public/images/home-three/home-three-banner.png";
import element from "@/../public/images/homeOne/element-why-choose-us.png";
import ButtonUnderLine from "@/components/button/ButtonUnderLine";
import BorderHorizontalN40 from "@/components/customBorder/BorderHorizontalN40";
import BorderVerticalN700 from "@/components/customBorder/BorderVerticalN700";
import ReactCounterUp from "@/components/sharedComponents/Counter";
import D3 from "@/components/sharedComponents/D3";
import H2 from "@/components/sharedComponents/H2";
import TextL from "@/components/sharedComponents/TextL";
import TextM from "@/components/sharedComponents/TextM";
import TextXL from "@/components/sharedComponents/TextXL";
import Users from "@/components/sharedComponents/Users";
import VideoModal from "@/components/sharedComponents/VideoModal";
import VectorBannerThree from "@/components/vector/VectorBannerThree";
import Fade from "@/motionEffect/Fade";
import FadeDownToTop from "@/motionEffect/FadeDownToTop";
import FadeLeft from "@/motionEffect/FadeLeft";
import FadeRight from "@/motionEffect/FadeRight";
import { IconPlus } from "@tabler/icons-react";
import Image from "next/image";
import { useState } from "react";
import BannerButtonAndVideo from "./BannerButtonAndVideo";

const BannerThree = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className=" relative overflow-hidden">
      <div className="container section-gap-top grid-cols-12 items-center gap-6 xl:grid">
        <div className="col-start-1 col-end-6">
          <FadeLeft>
            <D3>Education for a Bright Future with Us</D3>
          </FadeLeft>
          <FadeRight>
            <TextXL className="pt-6">
              Welcome to a new era of education! Unleash your potential, learn
              from experts, and grow with us.
            </TextXL>
          </FadeRight>
          <Fade>
            <BannerButtonAndVideo setOpen={setOpen} />
          </Fade>
        </div>
        <div className="col-start-6 col-end-13 max-xl:padding-t-60">
          <div className="grid-cols-7 items-center gap-12 sm:grid">
            <div className="relative col-start-1 col-end-5 w-fit">
              <Image
                src={bannerImage}
                height={613}
                width={416}
                alt="Banner Image"
                className="rounded-32px"
              />
              <VectorBannerThree />
            </div>
            <div className="col-start-5 col-end-8 flex flex-col gap-14  max-sm:padding-t-40">
              <div className="flex flex-col gap-6 ">
                <Users data={<IconPlus />} />
                <BorderHorizontalN40 />
                <FadeRight>
                  <TextL>
                    Learning is a lifelong endeavor, and your quest starts here.{" "}
                  </TextL>
                </FadeRight>
                <ButtonUnderLine buttonText="Join Community" />
              </div>
              <FadeDownToTop>
                <div className="flex items-center justify-between gap-6 max-sm:flex-col">
                  <div className="flex flex-col gap-3">
                    <H2>
                      <ReactCounterUp end={2.6} decimals={1} />K
                    </H2>
                    <TextM>Courses Completed</TextM>
                  </div>
                  <div className="relative h-20 shrink-0 max-sm:hidden">
                    <BorderVerticalN700 />
                  </div>
                  <div className="flex flex-col gap-3">
                    <H2>
                      <ReactCounterUp end={7.6} decimals={1} />K
                    </H2>
                    <TextM>Students Community</TextM>
                  </div>
                </div>
              </FadeDownToTop>
            </div>
          </div>
        </div>
        <VideoModal isOpen={isOpen} setOpen={setOpen} videoId="4DCTTrGjGU4" />
      </div>
      <div className="section-gap-top absolute right-16 top-40 hidden md:block xl:-top-5 4xl:top-0">
        <Image
          src={element}
          width={200}
          height={117}
          alt="Element"
          className="animate-ping-smooth max-xxl:w-[150px] xxl:max-4xl:w-[200px] 4xl:w-[180px]"
        />
      </div>
    </div>
  );
};

export default BannerThree;
