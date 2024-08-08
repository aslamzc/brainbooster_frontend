"use client";
import { IconMessage } from "@tabler/icons-react";
import { useState } from "react";
import AnimateHeight from "react-animate-height";
import LikeButton from "./LikeButton";
import ReplayComment from "./ReplayComment";
import ShareButton from "./ShareButton";

const LikeCommentShare = () => {
  const [like, setLike] = useState(false);
  const [replayInputOpen, setReplayInputOpen] = useState(false);

  const handleReplay = () => {
    setReplayInputOpen(!replayInputOpen);
  };

  const handleLinkClick = () => {
    setLike(!like);
  };

  return (
    <>
      <div className="flex items-center justify-between gap-2 text-neutral-500 sm:gap-6">
        <div className="flex items-center justify-between gap-4 sm:gap-8">
          <LikeButton />
          <button
            onClick={handleReplay}
            className="theme-transition-3 flex items-center justify-between gap-1 hover:text-secondaryColor"
          >
            <IconMessage />

            <p>12</p>
          </button>
          <ShareButton />
        </div>
        <div className="flex items-center justify-between gap-1 ">
          <p>100k+</p>
          <p>Views</p>
        </div>
      </div>
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

export default LikeCommentShare;
