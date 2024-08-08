import bannerImage from "@/../public/images/homeOne/banner-image.png";
import bannerSmallImage from "@/../public/images/homeOne/banner-small-image.png";
import bannerSun from "@/../public/images/homeOne/banner-sun.png";
import ButtonPrimary from "@/components/button/ButtonPrimary";
import BorderHorizontal from "@/components/customBorder/BorderHorizontal";
import BannerSocialIcon from "@/components/icons/BannerSocialIcon";
import VectorBanner from "@/components/vector/VectorBanner";
import Fade from "@/motionEffect/Fade";
import FadeLeft from "@/motionEffect/FadeLeft";
import FadeRight from "@/motionEffect/FadeRight";
import {
  IconArrowUpRight,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandPinterest,
  IconBrandTwitter,
  IconCircleCheck,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import BannerVideoButton from "./BannerVideoButton";
const Banner = () => {
  const text1 = "course,".split("");
  const text2 = "build".split("");
  const text3 = "skills.".split("");
  const combinedTextWithSpaces = [...text1, " ", ...text2, " ", ...text3];
  return (
    <div className="relative overflow-hidden max-lg:pb-6">
      <div className="container relative">
        <div className="pt-10">
          <Fade>
            <h1 className="d1 font-semibold ">
              Find your ideal <br className="hidden sm:block" />
            </h1>
          </Fade>
          <Fade>
            <h2 className="d1 inline-flex font-semibold">
              course, build skills.
            </h2>
          </Fade>
          <div className="mt-10 grid-cols-3 items-center justify-between gap-x-16 lg:grid xl:mt-120px">
            <div className="col-span-2 ">
              <div className="relative rounded-32px bg-primaryColor max-xl:pb-5">
                <VectorBanner value="22.7k" />
                <div className="items-center justify-between gap-10 xl:mx-auto xl:grid xl:grid-cols-2">
                  <div className="max-xl:order-2 max-xl:px-10 xl:ps-[52px]">
                    <FadeLeft>
                      <p className="leading h2 pb-4 pt-24 font-semibold xl:pt-[52px] xxl:pb-6">
                        Join Our Learning Community
                      </p>
                    </FadeLeft>
                    <BorderHorizontal />
                    <FadeRight>
                      <p className="pt-4 text-base leading-lh-150 xxl:pt-6">
                        It&apos;s time to discover the endless possibilities of
                        online learning.
                      </p>
                    </FadeRight>
                    <Link
                      href="/community"
                      className="group mt-6 flex w-fit items-center justify-center rounded-full bg-bgColorOne p-3 font-semibold text-white xxl:mt-8"
                    >
                      <IconArrowUpRight
                        size={32}
                        className="theme-transition-3 group-hover:rotate-45"
                      />
                    </Link>
                  </div>
                  <Fade>
                    <div className="hidden xl:-mt-[102px] xl:block">
                      <Image
                        src={bannerImage}
                        width={409}
                        height={533}
                        alt="Banner image"
                      />
                    </div>
                  </Fade>
                </div>
              </div>
            </div>

            <div className="max-lg:mt-10">
              <FadeRight>
                <p className=" h2 font-semibold text-neutral-500 ">
                  Limitless learning at your fingertips
                </p>
              </FadeRight>
              <div className="flex justify-between py-5 max-xxl:flex-col max-xxl:gap-y-2 xl:py-8 xxl:items-center">
                <p className="lText flex items-center gap-3 text-neutral-500">
                  <IconCircleCheck size={24} />
                  <span>Learn with experts</span>
                </p>
                <p className="lText flex items-center gap-3 text-neutral-500">
                  <IconCircleCheck size={24} />
                  <span>Get certificate</span>
                </p>
              </div>
              <BorderHorizontal />
              <div className="mt-6 xl:mt-10">
                <ButtonPrimary
                  buttonText="Browse Courses"
                  button={true}
                  link="/courses/courses-one"
                />
              </div>
            </div>
          </div>
        </div>
        {/* banner rotate element */}
        <div className="hidden xxl:block">
          <BannerVideoButton />
        </div>
        {/* small image */}
        <div className="theme-transition-3 absolute hidden overflow-hidden rounded-full xxl:right-[10%] xxl:top-[8%] xxl:block">
          <Image
            src={bannerSmallImage}
            width={306}
            height={90}
            alt="Banner Small Image"
            className="animate-ping-smooth hover:scale-110"
          />
        </div>
      </div>
      {/* side bar */}
      <div className="absolute bottom-0 hidden 3xl:left-[20px] 3xl:block 4xl:left-[70px]">
        <div>
          <Image
            src={bannerSun}
            width={152}
            height={149}
            alt="Sub Image"
            className="mb-[168px] animate-ping-smooth rounded-full 3xl:w-[100px]"
          />
          <div className="gap flex flex-col items-center justify-center">
            <p className="rotate-90 text-mText font-semibold text-neutral-500">
              Follow Us
            </p>

            <div className="cursor-pointer pt-12">
              <BannerSocialIcon icon={<IconBrandFacebook />} link="/" />
            </div>
            <div className="cursor-pointer pt-4">
              <BannerSocialIcon icon={<IconBrandTwitter />} link="/" />
            </div>
            <div className="cursor-pointer pt-4">
              <BannerSocialIcon icon={<IconBrandInstagram />} link="/" />
            </div>
            <div className="cursor-pointer pt-4">
              <BannerSocialIcon icon={<IconBrandPinterest />} link="/" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
