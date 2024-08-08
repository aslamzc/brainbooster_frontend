"use client";
import image1 from "@/../public/images/home-nine/home-nine-gallery-1.png";
import image2 from "@/../public/images/home-nine/home-nine-gallery-2.png";
import image3 from "@/../public/images/home-nine/home-nine-gallery-3.png";
import image4 from "@/../public/images/home-nine/home-nine-gallery-4.png";
import image5 from "@/../public/images/home-nine/home-nine-gallery-5.png";
import image6 from "@/../public/images/home-nine/home-nine-gallery-6.png";
import image7 from "@/../public/images/home-nine/home-nine-gallery-7.png";
import image8 from "@/../public/images/home-nine/home-nine-gallery-8.png";
import image9 from "@/../public/images/home-nine/home-nine-gallery-9.png";
import ButtonVideo from "@/components/button/ButtonVideoTwo";
import SectionHeading from "@/components/sharedComponents/SectionHeading";
import VideoModal from "@/components/sharedComponents/VideoModal";
import Image from "next/image";
import { useState } from "react";

const HomeNineGallery = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="container section-gap-top section-gap-bottom">
      <SectionHeading
        title="Memorable Highlights of Our Journey"
        description="Step into a collection of cherished memories and achievements that define our journey at Edufast School. 'Our Best Moments' is a tapestry"
        link="/"
        buttonText="See All Images"
      />
      <div className="padding-t-60 grid grid-cols-1 items-center justify-center gap-6 md:grid-cols-3">
        <div className="flex flex-col gap-6">
          {" "}
          <div className="group relative overflow-hidden rounded-16px">
            <Image
              src={image1}
              alt="image"
              className="theme-transition-3 w-full rounded-16px hover:scale-105"
            />
            <div className="theme-transition-3 opacity-0 hover:cursor-pointer group-hover:opacity-100">
              <ButtonVideo className="p-3" iconSize={24} setOpen={setOpen} />
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-16px">
            <Image
              src={image2}
              alt="image"
              className="theme-transition-3 w-full rounded-16px hover:scale-105"
            />
            <div className="theme-transition-3 opacity-0 hover:cursor-pointer group-hover:opacity-100">
              <ButtonVideo className="p-3" iconSize={24} setOpen={setOpen} />
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-16px">
            <Image
              src={image3}
              alt="image"
              className="theme-transition-3 w-full rounded-16px hover:scale-105"
            />
            <div className="theme-transition-3 opacity-0 hover:cursor-pointer group-hover:opacity-100">
              <ButtonVideo className="p-3" iconSize={24} setOpen={setOpen} />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="group relative overflow-hidden rounded-16px">
            <Image
              src={image4}
              alt="image"
              className="theme-transition-3 w-full rounded-16px hover:scale-105"
            />
            <div className="theme-transition-3 opacity-0 hover:cursor-pointer group-hover:opacity-100">
              <ButtonVideo className="p-3" iconSize={24} setOpen={setOpen} />
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-16px">
            <Image
              src={image5}
              alt="image"
              className="theme-transition-3 w-full rounded-16px hover:scale-105"
            />
            <div className="theme-transition-3 opacity-0 hover:cursor-pointer group-hover:opacity-100">
              <ButtonVideo className="p-3" iconSize={24} setOpen={setOpen} />
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-16px">
            <Image
              src={image6}
              alt="image"
              className="theme-transition-3 w-full rounded-16px hover:scale-105"
            />
            <div className="theme-transition-3 opacity-0 hover:cursor-pointer group-hover:opacity-100">
              <ButtonVideo className="p-3" iconSize={24} setOpen={setOpen} />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="group relative overflow-hidden rounded-16px">
            <Image
              src={image7}
              alt="image"
              className="theme-transition-3 w-full rounded-16px hover:scale-105"
            />
            <div className="theme-transition-3 opacity-0 hover:cursor-pointer group-hover:opacity-100">
              <ButtonVideo className="p-3" iconSize={24} setOpen={setOpen} />
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-16px">
            <Image
              src={image8}
              alt="image"
              className="theme-transition-3 w-full rounded-16px hover:scale-105"
            />
            <div className="theme-transition-3 opacity-0 hover:cursor-pointer group-hover:opacity-100">
              <ButtonVideo className="p-3" iconSize={24} setOpen={setOpen} />
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-16px">
            <Image
              src={image9}
              alt="image"
              className="theme-transition-3 w-full rounded-16px hover:scale-105"
            />
            <div className="theme-transition-3 opacity-0 hover:cursor-pointer group-hover:opacity-100">
              <ButtonVideo className="p-3" iconSize={24} setOpen={setOpen} />
            </div>
          </div>
        </div>
      </div>
      <VideoModal isOpen={isOpen} setOpen={setOpen} videoId="4DCTTrGjGU4" />
    </div>
  );
};

export default HomeNineGallery;
