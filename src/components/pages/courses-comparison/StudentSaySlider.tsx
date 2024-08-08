"use client";

import StudentTestimonial from "@/components/Card/StudentTestimonial";
import ButtonSlider from "@/components/button/ButtonSlider";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { studentSliderTestimonialData } from "../../../../public/data/studentSliderTestimonialData";
const StudentSaySlider = () => {
  return (
    <section className="section-gap-top section-gap-bottom bg-white max-sm:mb-16 sm:max-xxl:mb-10">
      <div className="container">
        <div className="relative ">
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
            {studentSliderTestimonialData.map(({ id, ...props }) => (
              <SwiperSlide key={id}>
                <StudentTestimonial {...props} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="absolute -bottom-20 left-[33%] z-[52] flex justify-center bg-inherit sm:left-[42%] sm:max-xl:-bottom-20 xl:left-[50%] xxl:bottom-[0px]">
            <ButtonSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentSaySlider;
