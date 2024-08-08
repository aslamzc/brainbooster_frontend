"use client";
import { IconThumbUp } from "@tabler/icons-react";
import { useState } from "react";

const LikeButton = () => {
  const [like, setLike] = useState(false);

  const handleLinkClick = () => {
    setLike(!like);
  };

  return (
    <button
      onClick={handleLinkClick}
      className={` ${
        like ? "text-secondaryColor" : ""
      } flex items-center justify-between gap-1`}
    >
      <IconThumbUp /> {like ? 178 + 1 : 178}
    </button>
  );
};

export default LikeButton;
