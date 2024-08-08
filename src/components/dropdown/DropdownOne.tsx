"use client";
import useClickOutside from "@/hooks/useClickOutside";
import { IconChevronDown } from "@tabler/icons-react";
// import useClickOutside from "@/hooks/_useClickOutside";
import { useState } from "react";
export default function DropdownOne({
  isLabel,
  label,
  isImportant,
  dropDownItems,
  isBorder,
}: {
  isLabel: boolean;
  isImportant?: boolean;
  label?: string;
  dropDownItems: string[];
  isBorder?: boolean;
}) {
  const [select, setSelect] = useState<string>(dropDownItems[0]);

  const { modalRef, modal, setModal } = useClickOutside();
  return (
    <div className="flex w-full flex-col">
      {isLabel && (
        <label className="l-body text-mText">
          {label}
          {isImportant && <span className="text-mText ">*</span>}
        </label>
      )}
      <div
        className={` ${
          isBorder ? "border" : ""
        } relative flex cursor-pointer items-center justify-between rounded-lg px-5 py-3 outline-none`}
        onClick={() => setModal((prev) => !prev)}
        ref={modalRef}
      >
        <div className="flex w-full justify-between">
          <span className={` text-[#6D6D6D]`}>{select}</span>{" "}
          <span>
            <IconChevronDown />
          </span>
        </div>
        <i className={`ri-arrow-down-s-line pl-2 `}></i>
        <ul
          className={`shadow2 absolute left-0 top-12 max-h-[300px] w-full overflow-y-scroll rounded-xl bg-white text-black  ${
            modal
              ? "visible z-[999999] translate-y-0 opacity-100"
              : "invisible z-[-55] translate-y-[-20px] opacity-0"
          } flex flex-col items-start justify-start overflow-hidden duration-500`}
        >
          {dropDownItems.map((category, idx) => (
            <li
              key={idx}
              className="hover:text-primary rounded-lg  px-6 py-2 duration-700 hover:translate-x-1
                 "
              onClick={() => setSelect(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
