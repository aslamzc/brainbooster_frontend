"use client";
import BorderHorizontalN40 from "@/components/customBorder/BorderHorizontalN40";
import H5 from "@/components/sharedComponents/H5";
import TextL from "@/components/sharedComponents/TextL";
import TextM from "@/components/sharedComponents/TextM";
import {
  IconEdit,
  IconMinus,
  IconPlayerPlayFilled,
  IconPlus,
} from "@tabler/icons-react";
import { useState } from "react";
import AnimateHeight from "react-animate-height";
import StudentProfileProgressbarWithText from "../subscriptions/StudentProfileProgressbarWithText";
import SingleModule from "./SingleModule";

const CoursesCurriculumDropdown = ({ title }: { title: string }) => {
  const [dropDown, setDropDown] = useState(false);
  const handleDropDown = () => {
    setDropDown(!dropDown);
  };

  return (
    <div>
      <div
        onClick={handleDropDown}
        className={`theme-transition-3 flex items-center justify-between gap-6 rounded-16px bg-neutral-20 px-4 py-4 sm:px-8`}
      >
        <div className="flex flex-col gap-2">
          <H5>{title}</H5>
          <TextM>(3 Lectures)</TextM>
        </div>
        <div
          className={`theme-transition-4 rounded-full border border-neutral-30 bg-bgColorOne p-2 text-primaryColor ${
            dropDown ? "rotate-180" : ""
          }`}
        >
          {dropDown ? <IconMinus /> : <IconPlus />}
        </div>
      </div>
      <AnimateHeight
        duration={500}
        height={dropDown ? "auto" : 0}
        aria-label="example-panel"
      >
        <div className="py-6">
          <BorderHorizontalN40 />
        </div>
        <StudentProfileProgressbarWithText text="1/2 Completed" width={90} />
        <div className="py-6">
          <BorderHorizontalN40 />
        </div>
        <div className="flex items-center justify-between gap-3 max-sm:flex-col sm:gap-6">
          <div className="flex items-center gap-3 max-sm:flex-col sm:gap-5">
            <span className="rounded-full bg-primaryColor p-3">
              <IconPlayerPlayFilled />
            </span>{" "}
            <TextL className="font-medium">
              Introduction to Health Sciences
            </TextL>
          </div>
          <TextL>15m 10s</TextL>
        </div>
        <div className="flex items-center gap-4 pt-6 font-medium">
          <button className="flex items-center gap-1 rounded-8px bg-secondaryColor px-4 py-2 text-sText">
            <IconEdit size={16} />
            <span>Note</span>
          </button>
          <button className="rounded-8px bg-primaryColor px-4 py-2 text-sText">
            Play Again
          </button>
        </div>
        <div className="mt-4 flex flex-col gap-4">
          <SingleModule
            time="5:20"
            title="Overview of Health Sciences and Medicine"
          />
          <SingleModule
            time="40:20"
            title="Historical Perspectives and Milestones"
          />
          <SingleModule
            time="10:00"
            title="Interdisciplinary Approach in Healthcare"
          />
        </div>
        <div className="py-6">
          <BorderHorizontalN40 />
        </div>
        <div className="flex items-center justify-between gap-3 max-sm:flex-col sm:gap-6">
          <div className="flex items-center gap-3 max-sm:flex-col sm:gap-5">
            <span className="rounded-full bg-primaryColor p-3">
              <IconPlayerPlayFilled />
            </span>{" "}
            <TextL className="font-medium">
              Introduction to Health Sciences
            </TextL>
          </div>
          <TextL>15m 10s</TextL>
        </div>
      </AnimateHeight>
    </div>
  );
};

export default CoursesCurriculumDropdown;
