import banner from "@/../public/images/home-ten/banner.png";
import bannerSmallImage from "@/../public/images/home-ten/video-banner.png";
import D2 from "@/components/sharedComponents/D2";
import TextL from "@/components/sharedComponents/TextL";

import H6 from "@/components/sharedComponents/H6";
import FadeLeft from "@/motionEffect/FadeLeft";
import FadeRight from "@/motionEffect/FadeRight";
import FadeTopToDown from "@/motionEffect/FadeTopToDown";
import { IconArrowUpRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import UsersAndReview from "../home-two/UsersAndReview";
import VideoButtonTen from "./VideoButton";

const BannerTen = () => {
  return (
    <div className="relative overflow-x-clip">
      <div className="container">
        <div className="grid-cols-12 xl:grid">
          <div className="section-gap-top col-start-1 col-end-8 flex flex-col justify-between">
            <div className="col-start-1 col-end-7">
              <div>
                <div className="theme-transition-3 relative w-fit overflow-hidden rounded-full xxl:block">
                  <Image
                    src={bannerSmallImage}
                    width={306}
                    height={72}
                    alt="Banner Small Image"
                    className="-z-10 animate-ping-smooth hover:scale-110"
                  />
                  <VideoButtonTen />
                </div>
                <FadeLeft>
                  <D2 className="pt-4 max-sm:text-h3">
                    Best platform for study in Abroad.
                  </D2>
                </FadeLeft>
                <div className="grid-cols-7 pt-6 md:grid">
                  <div className="gap-32px col-start-1 col-end-5 flex flex-col pe-9">
                    <FadeRight>
                      <TextL>
                        Embark on a transformative journey of education and
                        exploration with our Abroad Study programs. Expand your
                        horizons
                      </TextL>
                    </FadeRight>
                    <div>
                      <UsersAndReview />
                    </div>
                  </div>
                  <div className="col-start-5 col-end-7 max-md:pt-5">
                    <Link
                      href="/login"
                      className="group flex w-fit flex-col items-center gap-4 rounded-full border border-neutral-50 px-8 py-60px  max-[400px]:mx-auto"
                    >
                      <H6>Apply Now</H6>
                      <span className="theme-transition-3 w-fit rounded-full bg-primaryColor p-2">
                        <IconArrowUpRight className="theme-transition-3 group-hover:rotate-45" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <FadeTopToDown className="relative col-start-8 col-end-13 max-xl:padding-t-60 xl:-mt-[120px]">
            <Image
              src={banner}
              width={838}
              height={733}
              alt="Banner image"
              className="relative overflow-hidden object-cover max-xl:h-[400px] md:max-w-[unset]"
            />
          </FadeTopToDown>
        </div>
      </div>{" "}
    </div>
  );
};

export default BannerTen;
