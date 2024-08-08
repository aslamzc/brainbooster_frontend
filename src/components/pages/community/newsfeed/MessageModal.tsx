"use client";
import { IconEdit } from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";

const MessageModal = () => {
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
    <div className="relative flex items-center" ref={modalRef}>
      <button onClick={buttonModalAction}>
        <IconEdit />
      </button>

      <ul
        className={`absolute right-[-10px] top-5 z-[20000] flex translate-y-0 flex-col gap-2 space-y-2 rounded-md bg-bgColorTwo px-4 py-6 text-white  shadow-md transition-all duration-300  md:top-11 lg:justify-between  ${
          buttonModalOpen ? "translate-y-0 opacity-100" : "invisible opacity-0"
        }`}
      >
        <li className="whitespace-nowrap">
          <button
            type="button"
            className=" theme-transition-3 hover:tracking-wide hover:text-secondaryColor"
          >
            Edit Profile
          </button>
        </li>
        <li className="whitespace-nowrap">
          <button
            type="button"
            className=" theme-transition-3 hover:tracking-wide hover:text-secondaryColor"
          >
            Change Profile
          </button>
        </li>
      </ul>
    </div>
  );
};

export default MessageModal;
