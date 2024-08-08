"use client";
import { IconHeart } from "@tabler/icons-react";
import { useState } from "react";

const ButtonHart = () => {
  const [activeLove, setLove] = useState(false);
  return (
    <button
      onClick={() => setLove(!activeLove)}
      className={`theme-transition-3 rounded-8px p-2 ${
        activeLove ? "bg-bgColorTwo" : " bg-neutral-20 "
      }`}
    >
      <IconHeart
        className={`theme-transition-3 ${
          activeLove ? "text-secondaryColor" : ""
        }`}
      />
    </button>
  );
};

export default ButtonHart;
