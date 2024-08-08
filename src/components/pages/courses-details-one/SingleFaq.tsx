"use client";
import BorderHorizontalN40 from "@/components/customBorder/BorderHorizontalN40";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import React from "react";
import AnimateHeight from "react-animate-height";

const SingleFaq = ({
  id,
  question,
  answer,
  dropDown,
  setDropDown,
}: {
  id: string;
  question: string;
  answer: string;
  dropDown: string;
  setDropDown: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const handleDropDown = (id: string) => {
    if (dropDown === id) {
      setDropDown("");
    } else {
      setDropDown(id);
    }
  };

  return (
    <div
      key={id}
      className={`theme-transition-3  rounded-16px px-4 py-4 sm:px-8 ${
        dropDown === id ? "bg-primaryColor" : "bg-neutral-20"
      }`}
    >
      <div
        onClick={() => handleDropDown(id)}
        className={`theme-transition-3  flex items-center justify-between gap-6 rounded-16px ${
          dropDown === id ? " mb-3" : ""
        }`}
      >
        <h6 className="h5 font-semibold">{question}</h6>{" "}
        <div
          className={`theme-transition-4 rounded-full border border-neutral-30 bg-bgColorOne p-2 text-primaryColor ${
            dropDown === id ? "rotate-180" : ""
          }`}
        >
          {dropDown === id ? <IconMinus /> : <IconPlus />}
        </div>
      </div>
      <AnimateHeight
        duration={500}
        height={dropDown === id ? "auto" : 0}
        aria-label={`example-panel-${id}`}
      >
        <BorderHorizontalN40 />
        <p className=" mt-3 text-sText">{answer}</p>
      </AnimateHeight>
    </div>
  );
};

export default SingleFaq;
