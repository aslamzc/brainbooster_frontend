"use client";
import banner2 from "@/../public/images/home-four/banner-2.png";
import D2 from "@/components/sharedComponents/D2";
import VideoModal from "@/components/sharedComponents/VideoModal";
import Fade from "@/motionEffect/Fade";
import FadeDownToTop from "@/motionEffect/FadeDownToTop";
import FadeLeft from "@/motionEffect/FadeLeft";
import FadeRight from "@/motionEffect/FadeRight";
import Image from "next/image";
import { useState } from "react";
import H5 from "../../sharedComponents/H5";
import { useTranslation } from 'react-i18next';

const BannerFour = () => {
  const [isOpen, setOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="container grid-cols-12 items-center gap-6 max-xl:overflow-hidden lg:grid">
      <div className="col-start-1 col-end-8 max-lg:padding-t-80">
        <div>
          <FadeLeft>
            <H5>{t('text_2')}</H5>
          </FadeLeft>
          <FadeRight>
            <D2 className="pt-4 !font-bold uppercase max-sm:text-h2">
              {t('text_3')}
              <span className="border-b-2 border-secondaryColorTwo text-secondaryColorTwo">
                {t('text_4')}
              </span>{" "}
            </D2>
          </FadeRight>
        </div>
      </div>
      <div className="relative col-start-8 col-end-13 max-lg:padding-t-80 4xl:-mr-40">
        <div className="grid grid-cols-2 sm:gap-5 lg:gap-8 ">
          <div className=" padding-b-60 flex flex-col items-center">
          </div>
          <div className=" padding-t-60 flex flex-col items-center">
            <div>
              <FadeDownToTop>
                <Image
                  src={banner2}
                  width={240}
                  height={405}
                  alt="banner medium image"
                  className="max-sm:max-w-[150px]"
                />{" "}
              </FadeDownToTop>
            </div>
          </div>
        </div>
      </div>
      <VideoModal isOpen={isOpen} setOpen={setOpen} videoId="4DCTTrGjGU4" />
    </div>
  );
};

export default BannerFour;
