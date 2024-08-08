"use client";
import { IconDotsVertical, IconEdit, IconTrash } from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TableModal = ({ index, length }: { index: number; length: number }) => {
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
        className={`absolute right-[-10px] z-[20000] flex w-32 translate-y-0 flex-col gap-2 space-y-2 rounded-md bg-bgColorTwo px-4 py-6 text-white  shadow-md transition-all duration-300  lg:justify-between ${
          buttonModalOpen
            ? index > length - 3
              ? "-translate-x-16 -translate-y-[120px] opacity-100"
              : "-translate-y-0 opacity-100"
            : "invisible opacity-0"
        }   `}
      >
        <li key={uuidv4()}>
          <button
            type="button"
            className="theme-transition-3 flex w-20 justify-between gap-3 whitespace-nowrap hover:text-secondaryColor"
          >
            <span className="block">Edit</span>{" "}
            <span className="block">
              <IconEdit size={20} />
            </span>
          </button>
        </li>
        <li key={uuidv4()}>
          <button
            type="button"
            className="theme-transition-3 flex w-20 justify-between gap-3 whitespace-nowrap hover:text-secondaryColor"
          >
            <span className="block">Delete</span> <IconTrash size={20} />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default TableModal;
