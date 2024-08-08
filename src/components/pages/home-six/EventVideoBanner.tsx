"use client";
import eventImage from "@/../public/images/home-six/event-banner.png";
import VideoModal from "@/components/sharedComponents/VideoModal";
import { IconPlayerPlayFilled } from "@tabler/icons-react";
import Image from "next/image";
import { useState } from "react";

const EventVideoBanner = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className=" relative col-start-9 col-end-13 mx-auto w-fit max-lg:padding-t-80">
      <div className="relative w-fit ">
        <Image
          src={eventImage}
          width={416}
          height={765}
          alt="Event image with video icon"
          className="rounded-16px object-cover max-lg:h-[300px]"
        />
        <div className="absolute left-1/2 top-1/2 z-30 flex h-fit w-fit -translate-x-1/2 -translate-y-1/2 flex-col items-center rounded-full  bg-primaryColor p-3 ">
          <button onClick={() => setOpen(!isOpen)}>
            <IconPlayerPlayFilled />
          </button>
        </div>
        <VideoModal isOpen={isOpen} setOpen={setOpen} videoId="4DCTTrGjGU4" />
      </div>
    </div>
  );
};

export default EventVideoBanner;
