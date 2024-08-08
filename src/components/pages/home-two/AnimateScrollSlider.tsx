"use client";
import { IconBrandZapier } from "@tabler/icons-react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const AnimateScrollSlider = () => {
  return (
    <section className=" overflow-hidden pb-5">
      <div className="py-10 md:py-100px">
        <div className=" relative w-[120%] -translate-x-5 -rotate-[5deg] overflow-hidden !whitespace-nowrap bg-primaryColor px-0 py-5 shadow-five xl:h-[100px] xl:pb-10 xl:pt-8">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={"auto"}
            spaceBetween={10}
            speed={6000}
            loop={true}
            autoplay={{
              delay: 1,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: {
                spaceBetween: 20,
                slidesPerView: 1,
              },
              400: {
                spaceBetween: 20,
                slidesPerView: 2,
              },
              768: {
                spaceBetween: 20,
                slidesPerView: 3,
              },
              992: {
                spaceBetween: 20,
                slidesPerView: 4,
              },
              1200: {
                spaceBetween: 24,
                slidesPerView: 5,
              },
            }}
          >
            <SwiperSlide>
              <div className="flex items-center gap-6">
                <IconBrandZapier size={16} />
                <span className="h3 font-semibold ">ReactJS Courses</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center gap-6">
                <IconBrandZapier size={16} />
                <span className="h3 font-semibold ">NextJS Courses</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center gap-6">
                <IconBrandZapier size={16} />
                <span className="h3 font-semibold ">NodeJS Courses</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center gap-6">
                <IconBrandZapier size={16} />
                <span className="h3 font-semibold ">PHP Courses</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center gap-6">
                <IconBrandZapier size={16} />
                <span className="h3 font-semibold ">LaravelCourses</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center gap-6">
                <IconBrandZapier size={16} />
                <span className="h3 font-semibold ">VueJs Courses</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center gap-6">
                <IconBrandZapier size={16} />
                <span className="h3 font-semibold ">Java Courses</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center gap-6">
                <IconBrandZapier size={16} />
                <span className="h3 font-semibold ">CSS Courses</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center gap-6">
                <IconBrandZapier size={16} />
                <span className="h3 font-semibold ">LaravelCourses</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center gap-6">
                <IconBrandZapier size={16} />
                <span className="h3 font-semibold ">VueJs Courses</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center gap-6">
                <IconBrandZapier size={16} />
                <span className="h3 font-semibold ">Java Courses</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center gap-6">
                <IconBrandZapier size={16} />
                <span className="h3 font-semibold ">CSS Courses</span>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default AnimateScrollSlider;
