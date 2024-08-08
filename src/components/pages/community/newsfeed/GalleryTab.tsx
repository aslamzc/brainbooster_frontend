"use client";
import ButtonPagination from "@/components/button/ButtonPagination";
import ButtonVideo from "@/components/button/ButtonVideoTwo";
import BorderHorizontalN40 from "@/components/customBorder/BorderHorizontalN40";
import DropdownCoursesTwo from "@/components/dropdown/DropdownCoursesTwo";
import VideoModal from "@/components/sharedComponents/VideoModal";
import Image from "next/image";
import { useState } from "react";
import { galleryData } from "../../../../../public/data/gallery";

const GalleryTab = () => {
  const category = [{ label: "Video" }, { label: "Image" }];
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="padding-all-32 flex flex-col gap-6 rounded-16px bg-white">
      <div className="flex items-center justify-between gap-6 max-sm:flex-col  ">
        <p className="h4">Gallery</p>
        <div className="flex items-center gap-2">
          <p className="text-mText text-neutral-500">Sort By :</p>{" "}
          <DropdownCoursesTwo options={category} />
        </div>
      </div>
      <BorderHorizontalN40 />
      <div className="grid grid-cols-1 gap-4 min-[500px]:grid-cols-2 md:grid-cols-3">
        {galleryData.map(({ id, image }) => (
          <div
            key={id}
            className="group relative mx-auto overflow-hidden rounded-16px"
          >
            <Image
              src={image}
              width={248}
              height={196}
              alt="Gallery image"
              className="theme-transition-3 rounded-16px hover:scale-105"
            />
            <div className="theme-transition-3 opacity-0 hover:cursor-pointer group-hover:opacity-100">
              <ButtonVideo className="p-3" iconSize={24} setOpen={setOpen} />
            </div>
          </div>
        ))}
      </div>
      <div className="mx-auto">
        <ButtonPagination />
      </div>
      <VideoModal isOpen={isOpen} setOpen={setOpen} videoId="4DCTTrGjGU4" />
    </div>
  );
};

export default GalleryTab;
