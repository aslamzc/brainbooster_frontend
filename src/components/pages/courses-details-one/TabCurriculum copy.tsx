"use client";
import BorderHorizontalN40 from "@/components/customBorder/BorderHorizontalN40";
import { IconCaretUp, IconLock, IconVideo } from "@tabler/icons-react";
import React, { useState } from "react";
import AnimateHeight from "react-animate-height";
import { lectureData } from "../../../../public/data/lactureData";

const TabCurriculum = () => {
  const [dropDown, setDropDown] = useState("dsd");
  const handleDropDown = (id: string) => {
    if (dropDown === id) {
      setDropDown("");
    } else {
      setDropDown(id);
    }
  };

  return (
    <div className="flex flex-col justify-between gap-6">
      {lectureData?.map(({ id, module, moduleData }) => (
        <div key={id} className="rounded-16px bg-neutral-20 shadow-gray ">
          <div
            onClick={() => handleDropDown(id)}
            className={`theme-transition-3 flex items-center justify-between gap-6 rounded-16px ${
              dropDown === id ? "bg-primaryColor" : ""
            } px-4 py-3 sm:px-8 sm:py-5`}
          >
            <h6 className="h5 font-semibold">{module}</h6>{" "}
            <div
              className={`theme-transition-3 ${
                dropDown === id ? "rotate-180" : ""
              }`}
            >
              <IconCaretUp />
            </div>
          </div>
          <AnimateHeight
            duration={500}
            height={dropDown === id ? "auto" : 0}
            aria-label={`example-panel-${id}`}
          >
            {moduleData.map(({ id, lecture, title, duration }, index) => (
              <React.Fragment key={id}>
                <div className="flex justify-between px-4 py-5 text-mText font-medium max-sm:flex-col max-sm:gap-3 sm:items-center sm:px-8 sm:text-center">
                  <div className="flex items-center gap-3">
                    <IconVideo /> <p>{lecture}</p>
                  </div>{" "}
                  <p>{title}</p>
                  <div className="flex items-center gap-3">
                    <span>{duration}</span> <IconLock />
                  </div>
                </div>
                <div
                  className={`${
                    moduleData.length - 1 === index ? "hidden" : ""
                  }`}
                >
                  <BorderHorizontalN40 />
                </div>
              </React.Fragment>
            ))}
          </AnimateHeight>
        </div>
      ))}
    </div>
  );
};

export default TabCurriculum;
