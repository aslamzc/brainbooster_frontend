"use client";
import TestimonialCardHomeTwo from "@/components/Card/TestimonialCardHomeTwo";

import ButtonSlider from "@/components/button/ButtonSlider";
import ElementLight from "@/components/sharedComponents/ElementLight";
import FadeLeft from "@/motionEffect/FadeLeft";
import FadeRight from "@/motionEffect/FadeRight";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonialDatHomeTwo } from "../../../../public/data/testimonialDataHomeTwo";
const Testimonial = () => {
  return (
    <section className="section-gap-top section-gap-bottom relative overflow-hidden max-sm:mb-5">
      <div className="container">
        <div className="mx-auto max-w-[735px] text-center">
          <FadeLeft>
            <h4 className="d4 font-semibold">What our customers say</h4>
          </FadeLeft>
          <FadeRight>
            <p className="mt-6 text-lText text-neutral-500">
              12+ million people are already learning on Edufast
            </p>
          </FadeRight>
        </div>
        <div className="relative mt-60px max-xl:mb-10">
          <Swiper
            slidesPerView={1}
            spaceBetween={24}
            effect={"fade"}
            speed={1400}
            loop={true}
            modules={[Navigation, EffectFade, Autoplay]}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".customerSliderNext",
              prevEl: ".customerSliderPrev",
            }}
          >
            {testimonialDatHomeTwo.map(({ id, ...props }) => (
              <SwiperSlide key={id}>
                <TestimonialCardHomeTwo {...props} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="absolute -bottom-20 left-[33%] z-[52] flex justify-center bg-inherit sm:left-[42%] sm:max-xl:-bottom-16 xl:left-[50%] xxl:bottom-[0px]">
            <ButtonSlider />
          </div>
        </div>
      </div>
      <ElementLight />
    </section>
  );
};

export default Testimonial;
