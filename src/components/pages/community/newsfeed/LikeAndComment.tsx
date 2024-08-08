"use client";
import { IconMessage } from "@tabler/icons-react";
import { useState } from "react";
import AnimateHeight from "react-animate-height";
import LikeButton from "./LikeButton";
import ReplayComment from "./ReplayComment";

const LikeAndComment = () => {
  const [like, setLike] = useState(false);
  const [replayInputOpen, setReplayInputOpen] = useState(false);

  const handleReplay = () => {
    setReplayInputOpen(!replayInputOpen);
  };
  return (
    <>
      <div className="mt-5 flex items-center gap-8 text-neutral-500">
        <LikeButton />
        <div className="flex items-center justify-between gap-1">
          <button
            onClick={handleReplay}
            className="theme-transition-3 hover:text-secondaryColor"
          >
            <IconMessage />
          </button>{" "}
          <p>12</p>
        </div>
      </div>
      {/* replay comment start */}
      <AnimateHeight
        duration={500}
        height={replayInputOpen ? "auto" : 0}
        aria-label={`example-panel-replay-input-32`}
      >
        <ReplayComment />
      </AnimateHeight>
    </>
  );
};

export default LikeAndComment;
