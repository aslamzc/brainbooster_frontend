"use client";
import { IconPlayerPlayFilled } from "@tabler/icons-react";
import { useState } from "react";
export default function CircleText() {
  const cirleText = " Watch the video Watch the video";
  const [modal, setModal] = useState(false);
  return (
    <>
      <div className="relative z-50 flex h-[80px] w-[80px] cursor-pointer items-center justify-center rounded-full sm:h-[100px] sm:w-[100px]">
        <div
          className="circle-text absolute h-full w-full rounded-full bg-primaryColor "
          onClick={() => setModal(true)}
        >
          <p className="">
            {cirleText.split("").map((char, i) => (
              <span
                className="absolute left-1/2 origin-[0_50px] text-[9.6px] font-semibold text-neutral-700  sm:origin-[0_50px] "
                key={i}
                style={{ transform: `rotate(${i * 15}deg)` }}
              >
                {char}
              </span>
            ))}
          </p>
        </div>
        <div className="relative z-40 rounded-full bg-bgColorOne p-4">
          <IconPlayerPlayFilled />
        </div>
      </div>
    </>
  );
}
