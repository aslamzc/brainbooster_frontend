"use client";
import ButtonSlider from "@/components/button/ButtonSlider";
import D4 from "@/components/sharedComponents/D4";
import TextL from "@/components/sharedComponents/TextL";
import FadeDownToTop from "@/motionEffect/FadeDownToTop";
import FadeTopToDown from "@/motionEffect/FadeTopToDown";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { featureSchoolData } from "../../../../public/data/featureSchoolData";
import ServiceCard from "../home-six/ServiceCard";

const FeaturedSchool = () => {
  return (
    <div className="section-gap-top section-gap-bottom overflow-hidden">
      <div className="container">
        <div className="mx-auto max-w-[744px] text-center">
          <FadeTopToDown>
            <D4>Featured Schools Spotlight</D4>
          </FadeTopToDown>
          <FadeDownToTop>
            <TextL className="pt-6">
              Spotlighting our Tech Wizards! Explore the innovations and
              technological brilliance of students showcased in this dedicated
              feature.
            </TextL>
          </FadeDownToTop>
        </div>
        <div className="padding-t-60">
          <div className="flex items-center justify-center gap-6 max-xl:flex-wrap  xl:grid-cols-4"></div>
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
                slidesPerView: 3,
              },
              1200: {
                spaceBetween: 24,
                slidesPerView: 3,
              },
              1400: {
                spaceBetween: 24,
                slidesPerView: 4,
              },
            }}
          >
            {featureSchoolData.map(({ id, ...props }) => (
              <SwiperSlide key={id}>
                <ServiceCard {...props} />
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

export default FeaturedSchool;
