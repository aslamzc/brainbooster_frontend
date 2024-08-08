"use client";
import detailsImage3 from "@/../public/images/event-details/event-detail-3.png";
import ButtonVideo from "@/components/button/ButtonVideoTwo";
import VideoModal from "@/components/sharedComponents/VideoModal";
import Image from "next/image";
import { useState } from "react";

const EventDetailsVideo = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="relative">
      <Image
        src={detailsImage3}
        width={856}
        height={400}
        alt="Details Image 3"
        className="rounded-16px"
      />
      <ButtonVideo setOpen={setOpen} className="p-4" iconSize={24} />
      <VideoModal isOpen={isOpen} setOpen={setOpen} videoId="4DCTTrGjGU4" />
    </div>
  );
};

export default EventDetailsVideo;
