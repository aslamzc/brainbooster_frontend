"use client";
import CardLIveCourses from "@/components/Card/CardLIveCourses";
import ButtonSlider from "@/components/button/ButtonSlider";
import VideoModal from "@/components/sharedComponents/VideoModal";
import FadeLeft from "@/motionEffect/FadeLeft";
import FadeRight from "@/motionEffect/FadeRight";
import { useState } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { homeTwoLiveCourseSliderData } from "../../../../public/data/homeTwoLiveCourseSliderData";

const LiveCourses = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <section className="section-gap-top section-gap-bottom overflow-hidden bg-white">
      <div className="container">
        <div className="grid-cols-12 items-center justify-between gap-6 md:grid">
          <div className="col-start-1 col-end-5 max-md:text-center">
            <FadeLeft>
              <h3 className="d4 font-semibold">
                Today&apos;s Top Free Live Courses
              </h3>
            </FadeLeft>
            <FadeRight>
              <p className="lText mt-6">
                How promotion excellent curiosity yet attempted happiness
                prosperous impression had conviction For every delay death
              </p>
            </FadeRight>
            <div className="mt-60px hidden md:flex ">
              <ButtonSlider />
            </div>
          </div>
          {/* slider */}
          <div className="col-start-5 col-end-13 max-md:mt-10">
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
                1200: {
                  slidesPerView: 2,
                },
              }}
            >
              {homeTwoLiveCourseSliderData.map(({ id, image, title }) => (
                <SwiperSlide key={id}>
                  <CardLIveCourses
                    setOpen={setOpen}
                    image={image}
                    title={title}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className=" padding-t-40 flex justify-center md:hidden ">
              <ButtonSlider />
            </div>
          </div>
        </div>
      </div>
      <VideoModal isOpen={isOpen} setOpen={setOpen} videoId="4DCTTrGjGU4" />
    </section>
  );
};

export default LiveCourses;
