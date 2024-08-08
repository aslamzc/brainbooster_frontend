"use client";
import ButtonCoursesDetailsOne from "@/components/button/ButtonCoursesDetailsOne";
import BorderHorizontal from "@/components/customBorder/BorderHorizontal";
import { useState } from "react";
import { buttonData } from "../../../../public/data/buttonName";
import CoursesDetailsRight from "./CoursesDetailsRight";
import TabCurriculum from "./TabCurriculum copy";
import TabFaq from "./TabFaq";
import TabInstructor from "./TabInstructor";
import TabOverView from "./TabOverView";
import TabReviews from "./TabReviews";

const Body = () => {
  const [tabButtonText, setTabButtonText] = useState<string>("Overview");
  return (
    <div className="mt-10">
      <div className="container">
        <div className="padding-b-80 grid-cols-12 justify-between gap-6 xl:grid">
          <div className="col-start-1 col-end-9 ">
            <div className="flex w-full flex-col justify-between gap-6">
              <h4 className="d4 font-semibold">Web Development (Front End)</h4>
              <p className="text-mText">
                This course is designed for beginners with little to no prior
                experience in web development. It provides a comprehensive
                introduction to the core concepts and technologies used in
                building websites and web applications.
              </p>
              <BorderHorizontal />

              <div className="flex items-center justify-between rounded-16px bg-neutral-20 p-3 max-xxl:flex-wrap max-xxl:gap-2">
                {buttonData?.map(({ id, ...props }) => (
                  <ButtonCoursesDetailsOne
                    key={id}
                    {...props}
                    tabButtonText={tabButtonText}
                    setTabButtonText={setTabButtonText}
                  />
                ))}
              </div>
            </div>

            <div className=" mt-10 flex flex-col justify-between gap-8 ">
              {tabButtonText === "Overview" && <TabOverView />}
              {tabButtonText === "Curriculum" && <TabCurriculum />}
              {tabButtonText === "FAQs" && <TabFaq />}
              {tabButtonText === "Instructor" && <TabInstructor />}
              {tabButtonText === "Reviews" && <TabReviews />}
            </div>
          </div>
          <div className=" col-start-9 col-end-13 max-xl:mt-10 xl:-mt-[200px]">
            <CoursesDetailsRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
