"use client";

import CustomerCard from "@/components/Card/CustomerCard";
import ButtonSlider from "@/components/button/ButtonSlider";
import FadeLeft from "@/motionEffect/FadeLeft";
import FadeRight from "@/motionEffect/FadeRight";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { customerSaySliderData } from "../../../../public/data/customerSaySliderData";

const CustomersSay = () => {
  return (
    <section className="section-gap-top section-gap-bottom overflow-hidden">
      <div className="container">
        <div>
          <FadeLeft>
            <h4 className="d4 text-center font-semibold">
              What our customers say
            </h4>
          </FadeLeft>
          <FadeRight>
            <p className="lText mx-auto mt-6 max-w-[661px] text-center text-neutral-500">
              We take immense pride in the positive impact our courses and
              community have on learners&apos; lives.
            </p>
          </FadeRight>
          {/* slider */}
          <div className="padding-t-60">
            <Swiper
              // slidesPerView={1}
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
                  <CustomerCard {...props} />
                </SwiperSlide>
              ))}

              <div className="mt-10 flex justify-center ">
                <ButtonSlider />
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomersSay;
