"use client";
import ButtonSlider from "@/components/button/ButtonSlider";
import D4 from "@/components/sharedComponents/D4";
import TextL from "@/components/sharedComponents/TextL";
import FadeLeft from "@/motionEffect/FadeLeft";
import FadeRight from "@/motionEffect/FadeRight";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { v4 as uuidv4 } from "uuid";
import { homeFiveMasterCard } from "../../../../public/data/homeFiveMasterCard";
import HomeFiveCourseCard from "./HomeFiveCourseCard";
import SubTitle from "./SubTitle";

const MasterFuture = () => {
  return (
    <div className="section-gap-top section-gap-bottom overflow-hidden">
      <div className="container">
        {/* section heading */}
        <div className="mx-auto flex max-w-[636px] flex-col items-center text-center">
          <SubTitle text="Master Your Future" />
          <FadeLeft>
            <D4 className="pt-4">Our Trending Courses</D4>
          </FadeLeft>
          <FadeRight>
            <TextL className="pt-6">
              Check out most 🔥 courses in the market
            </TextL>
          </FadeRight>
        </div>
        <div className="padding-t-60  ">
          <Swiper
            spaceBetween={24}
            speed={1400}
            loop={true}
            modules={[Navigation, Autoplay]}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".customerSliderNext",
              prevEl: ".customerSliderPrev",
            }}
            breakpoints={{
              768: {
                spaceBetween: 20,
                slidesPerView: 2,
              },
              992: {
                spaceBetween: 20,
                slidesPerView: 2,
              },
              1200: {
                spaceBetween: 24,
                slidesPerView: 2,
              },
              1400: {
                spaceBetween: 24,
                slidesPerView: 3,
              },
            }}
          >
            {homeFiveMasterCard?.map(({ ...props }) => (
              <SwiperSlide key={uuidv4()}>
                <HomeFiveCourseCard {...props} />
              </SwiperSlide>
            ))}
            <div className="mt-10 flex items-center justify-center">
              <ButtonSlider />
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default MasterFuture;
