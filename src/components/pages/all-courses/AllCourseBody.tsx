"use client";
import image from "@/../public/images/instructor/instructor-profile.png";
import ButtonCoursesDetailsOne from "@/components/button/ButtonCoursesDetailsOne";
import { IconCirclePlus } from "@tabler/icons-react";
import Image from "next/image";
import { useState } from "react";
import { allCourseTabName } from "../../../../public/data/allCourseTabName";
import AllCourseTab from "./AllCourseTab";
import AllCoursesRight from "./AllCoursesRight";
import OverViewTab from "./OverViewTab";
import ReviewTab from "./ReviewTab";

const AllCourseBody = () => {
  const [tabButtonText, setTabButtonText] = useState("All Course");
  return (
    <div className="container padding-b-80">
      {/* instructor profile image and tab start */}
      <div className="relative mx-auto -mt-28 w-fit items-end rounded-bl-32px rounded-br-32px rounded-tr-32px shadow-one md:-mt-40 xxl:-mt-60 xxl:flex">
        <div className=" mx-auto w-fit rounded-bl-32px rounded-tl-32px rounded-tr-32px bg-white max-xxl:rounded-br-32px max-xl:w-[250px] ">
          <Image
            src={image}
            width={306}
            height={306}
            alt="Instructor image"
            className=" rounded-bl-32px rounded-tl-32px rounded-tr-32px p-1 max-xxl:rounded-br-32px  "
          />
        </div>
        <div>
          <div className="padding-all-32 start-0 flex h-fit items-center justify-between gap-5 rounded-br-32px bg-white max-xxl:rounded-bl-32px max-xl:flex-col lg:gap-10 xxl:rounded-tr-32px">
            <div className="flex flex-col gap-3">
              <h3 className="h3 font-semibold">Isra Ahmed</h3>
              <p className="text-mText">UI/UX Designer</p>
            </div>
            <div className="flex items-center justify-between rounded-16px bg-neutral-20 p-3 max-md:flex-wrap max-md:gap-2">
              {allCourseTabName.map(({ id, ...props }) => (
                <ButtonCoursesDetailsOne
                  key={id}
                  {...props}
                  setTabButtonText={setTabButtonText}
                  tabButtonText={tabButtonText}
                />
              ))}
            </div>
            <button className="py group theme-transition-3 flex w-fit items-center justify-center gap-2 rounded-32px bg-primaryColor px-6 py-3 text-base font-semibold capitalize text-neutral-700 shadow-five hover:bg-bgColorTwo hover:text-white hover:shadow-five-theme  ">
              <IconCirclePlus />
              <span>Follow</span>
            </button>
          </div>
        </div>
      </div>
      {/* instructor profile image and tab end */}
      {/* all Course tab */}
      {tabButtonText === "All Course" && <AllCourseTab />}
      {tabButtonText === "Overview" && (
        <div className="padding-t-60 grid grid-cols-12 gap-6">
          <div className="col-start-1 col-end-13 lg:col-end-9">
            {/* Over View tab */}
            <OverViewTab />
          </div>
          <div className="col-start-1 col-end-13 flex flex-col gap-6 lg:col-start-9">
            <AllCoursesRight />
          </div>
        </div>
      )}
      {tabButtonText === "Review" && (
        <div className="padding-t-60 grid grid-cols-12 gap-6">
          <div className="col-start-1 col-end-13 lg:col-end-9">
            {/* Review tab */}
            <ReviewTab />
          </div>
          <div className=" col-start-1 col-end-13 flex flex-col gap-6 lg:col-start-9">
            <AllCoursesRight />
          </div>
        </div>
      )}
    </div>
  );
};

export default AllCourseBody;
