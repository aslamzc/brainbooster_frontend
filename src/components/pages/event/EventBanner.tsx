import BorderVerticalN0O4 from "@/components/customBorder/BorderVerticalN0O4";
import SearchBarBgTwo from "@/components/navbar/searchbar/SearchBarBgTwo";

const EventBanner = () => {
  return (
    <div className="section-gap-top bg-bgColorOne pb-[220px] sm:pb-[247px]">
      <div className="container text-white">
        <h4 className="d4 font-semibold  text-center">
          Explore Upcoming Educational Events
        </h4>
        <div className="mx-auto shrink-0 xxl:w-3/6 mt-10">
          <SearchBarBgTwo placeholder="Search Events..." />
        </div>
        <p className="lText mt-6 max-sm:text-center text-center">
          Join us for a variety of exciting events that cater to your interests
          and learning needs.{" "}
        </p>
        <div className="grid-cols-12 items-center justify-between md:grid">
          <div className="col-start-1 col-end-7"></div>
          <div className="col-start-7 col-end-8 hidden h-full md:block">
            <BorderVerticalN0O4 />
          </div>
          <div className="col-start-8 col-end-13 max-md:mt-10"></div>
        </div>
      </div>
    </div>
  );
};

export default EventBanner;
