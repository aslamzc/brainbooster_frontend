"use client";
import { IconDotsVertical } from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const PostModal = () => {
  const buttonData = [
    {
      text: "Saved Post",
    },
    {
      text: "Unfollow",
    },
    {
      text: "Hide Post",
    },
    {
      text: "Block",
    },
    {
      text: "Report Post",
    },
  ];
  const [buttonModalOpen, setButtonModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const buttonModalAction = () => {
    setButtonModalOpen(!buttonModalOpen);
  };

  const closeModal = (e: MouseEvent) => {
    // Check if the click occurred outside of the modal
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setButtonModalOpen(false);
    }
  };

  useEffect(() => {
    // Attach the event listener when the component mounts
    document.addEventListener("click", closeModal);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", closeModal);
    };
  }, []);

  return (
    <div className="relative" ref={modalRef}>
      <button onClick={buttonModalAction}>
        <IconDotsVertical />
      </button>

      <ul
        className={`absolute right-[-10px] top-5 z-[20000] flex w-[180px] translate-y-0 flex-col gap-2 space-y-2 rounded-md bg-bgColorTwo px-4 py-6 text-white  shadow-md transition-all duration-300  md:top-11 lg:justify-between  ${
          buttonModalOpen ? "translate-y-0 opacity-100" : "invisible opacity-0"
        }`}
      >
        {buttonData.map(({ text }) => (
          <li key={uuidv4()}>
            <button
              type="button"
              className=" theme-transition-3 hover:tracking-wide hover:text-secondaryColor"
            >
              {text}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostModal;
