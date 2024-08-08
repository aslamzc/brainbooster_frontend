"use client";
import CardInstructorPricingPlan from "@/components/Card/CardInstructorPricingPlan";
import ButtonSlider from "@/components/button/ButtonSlider";
import ElementLightLeft from "@/components/sharedComponents/ElementLightLeft";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { pricingplanTopinstructorData } from "../../../../public/data/pricingplanTopinstructorData";

const PricingPlanTopInstructor = () => {
  return (
    <div className="container section-gap-top section-gap-bottom relative">
      <div>
        <div className="mx-auto flex max-w-[694px] flex-col gap-6 text-center">
          <h4 className="d4 font-semibold">Our Top Instructor</h4>
          <p className="lText">
            We take mentorship seriously, and our dream team of experts is here
            to help you navigate your educational journey
          </p>
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
                slidesPerView: 3,
              },
              1200: {
                spaceBetween: 24,
                slidesPerView: 4,
              },
            }}
          >
            {pricingplanTopinstructorData?.map(({ id, ...props }) => (
              <SwiperSlide key={id}>
                <CardInstructorPricingPlan {...props} />
              </SwiperSlide>
            ))}
            <div className="mt-10 flex items-center justify-center">
              <ButtonSlider />
            </div>
          </Swiper>
        </div>
      </div>
      <ElementLightLeft />
    </div>
  );
};

export default PricingPlanTopInstructor;
