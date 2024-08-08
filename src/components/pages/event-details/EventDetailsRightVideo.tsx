"use client";
import authorImage from "@/../public/images/courses/coursesDetailsone/author.png";
import ButtonVideo from "@/components/button/ButtonVideoTwo";
import VideoModal from "@/components/sharedComponents/VideoModal";
import VectorHomeTwoRightBottom from "@/components/vector/VectorHomeTwoRightBottom";
import Image from "next/image";
import { useState } from "react";

const EventDetailsRightVideo = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="relative mx-auto w-fit">
        <Image
          src={authorImage}
          width={400}
          height={272}
          alt="Author Image"
          className="rounded-16px"
        />
        <VectorHomeTwoRightBottom />
        <ButtonVideo className="p-[10px]" iconSize={24} setOpen={setOpen} />
      </div>
      <VideoModal isOpen={isOpen} setOpen={setOpen} videoId="4DCTTrGjGU4" />
    </>
  );
};

export default EventDetailsRightVideo;
