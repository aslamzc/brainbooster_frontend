"use client";

import CardEventHomeTwo from "@/components/Card/CardEventHomeTwo";
import ButtonSlider from "@/components/button/ButtonSlider";
import SectionHeading from "@/components/sharedComponents/SectionHeading";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { eventData } from "../../../../public/data/eventData";

const Event = () => {
  return (
    <section className="relative ">
      <div className="after:bg-neutral-20 section-gap-top  section-gap-bottom after:absolute after:top-0 after:-z-10 after:h-[85%] after:w-full sm:after:h-[80%] lg:after:h-[65%]">
        <div className="container">
          {/* section heading */}
          <SectionHeading
            title="Explore Upcoming Educational Events"
            description="Join us for a variety of exciting events that cater to your interests and learning needs. Our events are designed to inspire and educate"
            link="/"
            buttonText="See All Event"
          />
          <div className="mt-60px">
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
                  slidesPerView: 3,
                },
              }}
            >
              {eventData?.map(({ id, ...props }) => (
                <SwiperSlide key={id}>
                  <CardEventHomeTwo {...props} />
                </SwiperSlide>
              ))}

              <div className="padding-t-40 flex justify-center">
                <ButtonSlider />
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Event;
