"use client";
import { IconPlayerPlayFilled } from "@tabler/icons-react";

const ButtonVideo = ({
  className = "p-4",
  iconSize = 32,
  setOpen,
}: {
  className?: string;
  iconSize?: number;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={`absolute left-1/2 top-1/2 mx-auto -translate-x-1/2 -translate-y-1/2 rounded-full bg-primaryColor ${className}`}
      >
        <IconPlayerPlayFilled size={iconSize} />
      </button>
    </>
  );
};

export default ButtonVideo;
