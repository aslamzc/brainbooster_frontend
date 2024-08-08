"use client";
import CardAboutTopInstructor from "@/components/Card/CardAboutTopInstructor";
import ButtonSlider from "@/components/button/ButtonSlider";
import ElementLightHomeFourInstructor from "@/components/sharedComponents/ElementLightHomeFourInstructor";
import FadeLeft from "@/motionEffect/FadeLeft";
import FadeRight from "@/motionEffect/FadeRight";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { aboutTopInstructorData } from "../../../../public/data/aboutTopInstructorData";
const TopInstructor = () => {
  return (
    <section className="section-gap-top section-gap-bottom relative overflow-hidden bg-neutral-20">
      <div className="container">
        <div className="mx-auto h-fit max-w-[696px] text-center">
          <FadeLeft>
            <h4 className="d4 font-semibold">Our Top Instructor</h4>
          </FadeLeft>
          <FadeRight>
            <p className="lText mt-6">
              We take mentorship seriously, and our dream team of experts is
              here to help you navigate your educational journey
            </p>
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
                slidesPerView: 3,
              },
              1200: {
                spaceBetween: 24,
                slidesPerView: 4,
              },
            }}
          >
            {aboutTopInstructorData?.map(({ id, ...props }) => (
              <SwiperSlide key={id}>
                <CardAboutTopInstructor {...props} />
              </SwiperSlide>
            ))}
            <div className="mt-10 flex items-center justify-center">
              <ButtonSlider />
            </div>
          </Swiper>
        </div>
      </div>
      <ElementLightHomeFourInstructor />
    </section>
  );
};

export default TopInstructor;
