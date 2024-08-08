"use client";
import ButtonCoursesDetailsOne from "@/components/button/ButtonCoursesDetailsOne";
import ButtonPagination from "@/components/button/ButtonPagination";
import D4 from "@/components/sharedComponents/D4";
import TextL from "@/components/sharedComponents/TextL";
import { useState } from "react";
import { galleryButtonName } from "../../../../public/data/galleryButtonName";
import AllImageTab from "./AllImageTab";
import FeaturedTab from "./FeaturedTab";
import PopularityTab from "./PopularityTab";
import TrendingTab from "./TrendingTab";

const GalleryContent = () => {
  const [tabButtonText, setTabButtonText] = useState("All");
  return (
    <div className="section-gap-top section-gap-bottom">
      <div className="container">
        <div className="mx-auto flex max-w-[636px] flex-col gap-6 text-center">
          <D4>Explore Our Gallery</D4>
          <TextL>
            Welcome to our gallery, where you can take a visual tour of
            Edufast&apos;s vibrant learning community
          </TextL>
        </div>
        <div className="mx-auto max-w-[636px]">
          <div className="padding-t-40">
            <div className="flex items-center justify-between rounded-16px bg-neutral-20 p-3 max-md:flex-wrap max-md:gap-2">
              {galleryButtonName.map(({ id, ...props }) => (
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
        <div className="padding-t-60">
          <div className="grid grid-cols-1 items-center justify-center gap-6 md:grid-cols-3">
            {tabButtonText === "All" && <AllImageTab />}
            {tabButtonText === "Trending" && <TrendingTab />}
            {tabButtonText === "Popularity" && <PopularityTab />}
            {tabButtonText === "Featured" && <FeaturedTab />}
          </div>
          <div className="padding-t-40 mx-auto w-fit">
            <ButtonPagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryContent;
