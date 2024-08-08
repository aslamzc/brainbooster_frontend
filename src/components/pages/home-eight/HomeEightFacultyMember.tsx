"use client";
import ButtonSlider from "@/components/button/ButtonSlider";
import FadeLeft from "@/motionEffect/FadeLeft";
import FadeRight from "@/motionEffect/FadeRight";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { homeEightFacultyData } from "../../../../public/data/homeEightFacultyData";
import FacultyMemberCard from "./FacultyMemberCard";

const HomeEightFacultyMember = () => {
  return (
    <section className="section-gap-top section-gap-bottom overflow-hidden">
      <div className="container">
        <div className="mx-auto h-fit max-w-[696px] text-center">
          <FadeRight>
            <h4 className="d4 font-semibold">Faculty of Excellence</h4>
          </FadeRight>
          <FadeLeft>
            <p className="lText mt-6">
              Discover the distinguished members of our faculty, each
              contributing to the academic excellence of our university.
            </p>
          </FadeLeft>
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
            {homeEightFacultyData?.map(({ id, ...props }) => (
              <SwiperSlide key={id}>
                <FacultyMemberCard {...props} />
              </SwiperSlide>
            ))}
            <div className="mt-10 flex items-center justify-center">
              <ButtonSlider />
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default HomeEightFacultyMember;
