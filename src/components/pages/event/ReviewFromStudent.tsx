"use client";
import CardReviewStudent from "@/components/Card/CardReviewStudent";
import ButtonSlider from "@/components/button/ButtonSlider";
import FadeLeft from "@/motionEffect/FadeLeft";
import FadeRight from "@/motionEffect/FadeRight";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { customerSaySliderData } from "../../../../public/data/customerSaySliderData";

const ReviewFromStudent = () => {
  return (
    <div className="container section-gap-top section-gap-bottom overflow-hidden">
      <div className="mx-auto max-w-[661px] text-center">
        <FadeLeft>
          <h4 className="d4 font-semibold">Review&apos;s From Students</h4>
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
              slidesPerView: 2,
            },
          }}
        >
          {customerSaySliderData.map(({ id, ...props }) => (
            <SwiperSlide key={id}>
              <CardReviewStudent {...props} />
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

export default ReviewFromStudent;
