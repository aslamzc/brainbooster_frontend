"use client";
import CustomerCard from "@/components/Card/CustomerCard";
import ButtonSlider from "@/components/button/ButtonSlider";
import BorderHorizontalN40 from "@/components/customBorder/BorderHorizontalN40";
import D4 from "@/components/sharedComponents/D4";
import H2 from "@/components/sharedComponents/H2";
import TextL from "@/components/sharedComponents/TextL";
import TextS from "@/components/sharedComponents/TextS";
import FadeLeft from "@/motionEffect/FadeLeft";
import FadeRight from "@/motionEffect/FadeRight";
import FadeTopToDown from "@/motionEffect/FadeTopToDown";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { customerSaySliderData } from "../../../../public/data/customerSaySliderData";

const HomeFourTestimonial = () => {
  return (
    <div className="container section-gap-top section-gap-bottom grid-cols-12 items-center gap-6 overflow-hidden lg:grid">
      <div className="gap-32px col-start-1 col-end-6 flex flex-col">
        <div>
          <FadeTopToDown>
            <D4>What Says Our Students About Us</D4>
          </FadeTopToDown>
          <FadeLeft>
            <TextL className="pt-6">
              12+ million people are already learning on Edufast
            </TextL>
          </FadeLeft>
        </div>
        <BorderHorizontalN40 />
        <div className="flex gap-6 max-sm:flex-col sm:items-center">
          <FadeLeft className="flex flex-col gap-4">
            <H2>9/10</H2>
            <TextS>9/10 users reported Better Learning outcomes.</TextS>
          </FadeLeft>
          <FadeRight className="flex flex-col gap-4">
            <H2>85%</H2>
            <TextS>
              85% of students see their courses through to completion.
            </TextS>
          </FadeRight>
        </div>
      </div>
      <div className="col-start-7 col-end-13 max-lg:padding-t-60">
        <Swiper
          // slidesPerView={1}
          spaceBetween={24}
          slidesPerView={1}
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
        >
          {customerSaySliderData.map(({ id, ...props }) => (
            <SwiperSlide key={id}>
              <CustomerCard {...props} />
            </SwiperSlide>
          ))}

          <div className="padding-t-40 justify-center max-lg:flex">
            <ButtonSlider />
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeFourTestimonial;
