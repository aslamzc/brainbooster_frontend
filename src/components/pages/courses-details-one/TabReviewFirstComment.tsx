"use client";
import image from "@/../public/images/courses/coursesDetailsone/review-1.png";
import BorderHorizontal from "@/components/customBorder/BorderHorizontal";
import {
  IconMessage,
  IconSend,
  IconStarFilled,
  IconStarHalfFilled,
  IconThumbUp,
} from "@tabler/icons-react";
import Image from "next/image";
import { useRef, useState } from "react";
import AnimateHeight from "react-animate-height";

const TabReviewFirstComment = ({ bg = "gray" }: { bg?: "white" | "gray" }) => {
  const [like, setLike] = useState(false);
  const [replayInputOpen, setReplayInputOpen] = useState(true);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleLinkClick = () => {
    setLike(!like);
  };

  const handleReplay = () => {
    setReplayInputOpen(!replayInputOpen);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  return (
    <div
      className={`flex flex-col gap-6 rounded-16px border border-neutral-20  p-6  ${
        bg === "gray" ? "bg-white" : "bg-neutral-20"
      }`}
    >
      <div className="flex items-center gap-6 ">
        <p className="lText">Mar 03, 2023</p>{" "}
        <div className="h-1 w-1 rounded-full bg-primaryColor"></div>
        <p className="lText">09:01 am</p>{" "}
      </div>
      <BorderHorizontal />
      <div className="flex items-center gap-2 text-secondaryColor">
        <IconStarFilled />
        <IconStarFilled />
        <IconStarFilled />
        <IconStarFilled />
        <IconStarHalfFilled />
      </div>
      <p className="text-mText">
        &quot;I can&apos;t thank enough for the incredible courses they offer. I
        completed the &apos;Web Development Fundamentals&apos; course, and it
        not only gave me the skills.”
      </p>
      <BorderHorizontal />
      <div className="flex items-center gap-6">
        <Image
          src={image}
          width={60}
          height={60}
          alt="comment image 1"
          className="rounded-full"
        />
        <div>
          <p className="xlText font-medium">Esther Howard</p>
          <p className="mt-2 text-sText">Project Manager</p>
        </div>
      </div>
      <BorderHorizontal />
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-1">
          <button
            className={`${like ? "text-secondaryColor" : ""}`}
            onClick={handleLinkClick}
          >
            <IconThumbUp />
          </button>
          <p className="lText">{like ? 178 + 1 : 178}</p>
        </div>
        <button
          onClick={handleReplay}
          className="theme-transition-3 flex items-center gap-1 hover:text-secondaryColor"
        >
          <IconMessage />
          <p className="lText">Reply</p>
        </button>
      </div>
      <AnimateHeight
        duration={500}
        height={replayInputOpen ? "auto" : 0}
        aria-label={`example-panel-replay-input`}
      >
        <div className={`theme-transition-3 flex items-center gap-5 `}>
          <div>
            <Image
              src={image}
              width={60}
              height={60}
              alt="comment image 2"
              className="rounded-full"
            />
          </div>
          <form className="relative flex h-fit w-full flex-col gap-4">
            <div
              className={`flex min-w-full gap-2 rounded-32px border border-neutral-30 px-2 py-3 text-sText placeholder:to-neutral-50 placeholder:text-sText sm:gap-3 sm:px-5 sm:py-4 ${
                bg === "gray" ? "bg-neutral-20" : "bg-white"
              }`}
            >
              <input
                ref={inputRef}
                type="text"
                placeholder="Join the discussion..."
                className="w-full bg-inherit"
              />
              <button className=" self-end rounded-32px  text-neutral-500">
                <IconSend className="theme-transition-3 hover:rotate-45" />
              </button>
            </div>
          </form>
        </div>
      </AnimateHeight>
    </div>
  );
};

export default TabReviewFirstComment;
