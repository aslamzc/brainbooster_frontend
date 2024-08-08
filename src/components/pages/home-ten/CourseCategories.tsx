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
import HomeSixCourseCard from "../home-six/HomeSixCourseCard";

const CourseCategories = () => {
  return (
    <div className="bg-neutral-20 section-gap-top section-gap-bottom overflow-hidden">
      <div className="container">
        <div className="mx-auto flex max-w-[636px] flex-col gap-6 text-center">
          <FadeLeft>
            <D4>Course Categories</D4>
          </FadeLeft>
          <FadeRight>
            <TextL>
              Embark on a global educational adventure with Edufast
              Abroad&apos;s diverse range of course categories.
            </TextL>
          </FadeRight>
        </div>
        <div className="padding-t-60">
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
                slidesPerView: 3,
              },
            }}
          >
            {homeFiveMasterCard?.map(({ ...props }) => (
              <SwiperSlide key={uuidv4()}>
                <HomeSixCourseCard {...props} />
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

export default CourseCategories;
