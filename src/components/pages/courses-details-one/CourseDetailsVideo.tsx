"use client";
import authorImage from "@/../public/images/courses/coursesDetailsone/author.png";
import ButtonVideo from "@/components/button/ButtonVideoTwo";
import VideoModal from "@/components/sharedComponents/VideoModal";
import VectorCardRightBottom from "@/components/vector/VectorCardRightBottom";
import Image from "next/image";
import { useState } from "react";

const CourseDetailsVideo = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="relative mx-auto w-fit">
        <Image
          src={authorImage}
          width={400}
          height={272}
          alt="Author Image"
          className="rounded-32px"
        />

        <VectorCardRightBottom />
        <ButtonVideo setOpen={setOpen} className="p-[10px]" iconSize={24} />
      </div>
      <VideoModal isOpen={isOpen} setOpen={setOpen} videoId="4DCTTrGjGU4" />
    </>
  );
};

export default CourseDetailsVideo;
