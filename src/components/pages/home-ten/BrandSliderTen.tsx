"use client";
import brandImage1 from "@/../public/images/home-three/brand-1.png";
import brandImage2 from "@/../public/images/home-three/brand-2.png";
import brandImage3 from "@/../public/images/home-three/brand-3.png";
import brandImage4 from "@/../public/images/home-three/brand-4.png";
import brandImage5 from "@/../public/images/home-three/brand-5.png";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const BrandSliderTen = () => {
  return (
    <div className="bg-neutral-20 xl:w-[58%] xl:pe-10 xl:max-xxl:-mt-[94px] xxl:max-[1500px]:-mt-[120px] min-[1500px]:-mt-[123px]">
      <div className="padding-t-32 padding-b-32 border-b ">
        <div>
          <Swiper
            modules={[Autoplay]}
            slidesPerView={"auto"}
            spaceBetween={10}
            speed={5000}
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
              768: {
                spaceBetween: 20,
                slidesPerView: 4,
              },
              992: {
                spaceBetween: 20,
                slidesPerView: 4,
              },
              1200: {
                spaceBetween: 24,
                slidesPerView: 4,
              },
            }}
          >
            <SwiperSlide>
              <div className="flex justify-center">
                <Image
                  src={brandImage1}
                  width={196}
                  height={58}
                  alt="Brand Image"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center">
                <Image
                  src={brandImage2}
                  width={196}
                  height={58}
                  alt="Brand Image"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center">
                <Image
                  src={brandImage3}
                  width={196}
                  height={58}
                  alt="Brand Image"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center">
                <Image
                  src={brandImage4}
                  width={196}
                  height={58}
                  alt="Brand Image"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center">
                <Image
                  src={brandImage5}
                  width={196}
                  height={58}
                  alt="Brand Image"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center">
                <Image
                  src={brandImage1}
                  width={196}
                  height={58}
                  alt="Brand Image"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center">
                <Image
                  src={brandImage2}
                  width={196}
                  height={58}
                  alt="Brand Image"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center">
                <Image
                  src={brandImage4}
                  width={196}
                  height={58}
                  alt="Brand Image"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center">
                <Image
                  src={brandImage3}
                  width={196}
                  height={58}
                  alt="Brand Image"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center">
                <Image
                  src={brandImage5}
                  width={196}
                  height={58}
                  alt="Brand Image"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default BrandSliderTen;
