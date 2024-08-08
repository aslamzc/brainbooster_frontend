"use client";
import VideoModal from "@/components/sharedComponents/VideoModal";
import { IconPlayerPlayFilled } from "@tabler/icons-react";
import { useState } from "react";

function VideoButtonTen() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="absolute left-1/2 top-1/2  -translate-x-1/2 -translate-y-1/2 text-primaryColor"
      >
        <IconPlayerPlayFilled size={40} />
      </button>
      <VideoModal isOpen={isOpen} setOpen={setOpen} videoId="4DCTTrGjGU4" />
    </>
  );
}

export default VideoButtonTen;
