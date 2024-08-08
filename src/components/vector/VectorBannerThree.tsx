"use client";
import vector from "@/../public/images/home-three/vector-banner.png";
import Image from "next/image";
import BannerVideoButtonHomeThree from "../pages/home-one/BannerVideoButtonHomeThree";

const VectorBannerThree = () => {
  return (
    <div className="absolute bottom-0 right-0 hidden md:block">
      <div className="relative">
        <Image
          src={vector}
          width={154}
          height={154}
          alt="Vector image"
          className="relative max-md:w-[100px]"
        />
        <BannerVideoButtonHomeThree />{" "}
      </div>
    </div>
  );
};

export default VectorBannerThree;
