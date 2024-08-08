"use client";
import CardReviewSecondary from "@/components/Card/CardReviewSecondary";
import ButtonSlider from "@/components/button/ButtonSlider";
import FadeLeft from "@/motionEffect/FadeLeft";
import FadeRight from "@/motionEffect/FadeRight";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { customerSaySliderData } from "../../../../public/data/customerSaySliderData";

const TestimonialSlider = () => {
  return (
    <div className="container section-gap-top section-gap-bottom overflow-hidden">
      <div className="mx-auto max-w-[661px] text-center">
        <FadeLeft>
          <h3 className="d4 font-semibold">What our customers say</h3>
        </FadeLeft>
        <FadeRight>
          <p className="lText mt-6">
            We take immense pride in the positive impact our courses and
            community have on learners&apos; lives.
          </p>
        </FadeRight>
      </div>
      {/* slider */}
      <div className="padding-t-60">
        <Swiper
          // slidesPerView={1}
          spaceBetween={24}
          speed={1400}
          loop={true}
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".customerSliderNext",
            prevEl: ".customerSliderPrev",
          }}
          breakpoints={{
            768: {
              slidesPerView: 1,
            },
            992: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {customerSaySliderData.map(({ id, ...props }) => (
            <SwiperSlide key={id}>
              <CardReviewSecondary {...props} />
            </SwiperSlide>
          ))}

          <div className="mt-10 flex justify-center ">
            <ButtonSlider />
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialSlider;
