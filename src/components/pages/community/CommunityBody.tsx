"use client";
import profileImage from "@/../public/images/community/newsfeed/profile.png";
import ButtonCoursesDetailsOne from "@/components/button/ButtonCoursesDetailsOne";
import ButtonPrimary from "@/components/button/ButtonPrimary";
import Image from "next/image";
import { useState } from "react";
import { newsFeedButton } from "../../../../public/data/newsFeedButton";
import ActiveUser from "./newsfeed/ActiveUser";
import GalleryTab from "./newsfeed/GalleryTab";
import LatestActivities from "./newsfeed/LatestActivities";
import Member from "./newsfeed/Member";
import MessageTab from "./newsfeed/MessageTab";
import NewsFeedTab from "./newsfeed/NewsFeedTab";
import SuggestionCommunity from "./newsfeed/SuggestionCommunity";

const CommunityBody = () => {
  const [tabButtonText, setTabButtonText] = useState("Newsfeed");
  return (
    <section className="padding-b-80 relative z-50">
      <div className="container">
        <div className="-mt-20 grid grid-cols-12 justify-between gap-6">
          <div className="col-start-1 col-end-13 flex flex-col gap-4 xl:col-end-9 ">
            {/* top profile and tab button start */}
            <div className="padding-all-32 rounded-16px bg-white">
              <div className="flex items-end justify-between gap-6 max-sm:flex-wrap xl:items-center">
                <div className="flex items-center gap-8 max-xl:flex-wrap">
                  <div>
                    <Image
                      src={profileImage}
                      width={160}
                      height={160}
                      alt="Profile image"
                      className="-mt-16 rounded-full"
                    />
                  </div>
                  <div className="flex flex-col justify-between gap-3">
                    <p className="h3 font-semibold">Edufast</p>
                    <p className="text-mText">Education Platform</p>
                  </div>
                </div>
                <div className="shrink-0">
                  <ButtonPrimary
                    button
                    buttonText="Brows Courses"
                    link="/courses/courses-one"
                  />
                </div>
              </div>
              <div>
                <div className="mt-8 flex items-center justify-between rounded-16px bg-neutral-20 p-3 max-xl:flex-wrap max-xl:gap-2">
                  {newsFeedButton?.map(({ id, ...props }) => (
                    <ButtonCoursesDetailsOne
                      key={id}
                      {...props}
                      setTabButtonText={setTabButtonText}
                      tabButtonText={tabButtonText}
                    />
                  ))}
                </div>
              </div>
            </div>
            {/* newsFeed tab */}
            {tabButtonText === "Newsfeed" && <NewsFeedTab />}
            {/* Member tab */}
            {tabButtonText === "Members" && <Member />}
            {/* message tab */}
            {tabButtonText === "Message" && <MessageTab />}
            {/* gallery tab */}
            {tabButtonText === "Gallery" && <GalleryTab />}
          </div>
          <div className="col-start-1 col-end-13 xl:col-start-9">
            <div className="sticky top-32 flex flex-col gap-6">
              {/* active user section start */}
              <ActiveUser />
              {/* active user section end */}
              {/* latest activities start */}
              <LatestActivities />
              {/* latest activities end */}
              {/* suggestion for you start  */}
              <SuggestionCommunity />
              {/* suggestion for you end */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityBody;
