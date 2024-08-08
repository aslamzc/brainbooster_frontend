import bannerImage from "@/../public/images/home-eight/banner-main-image.png";
import roundedText from "@/../public/images/home-four/rounded-text.png";
import H4 from "@/components/sharedComponents/H4";
import TextS from "@/components/sharedComponents/TextS";
import TextXL from "@/components/sharedComponents/TextXL";
import Users from "@/components/sharedComponents/Users";
import Fade from "@/motionEffect/Fade";
import FadeRight from "@/motionEffect/FadeRight";
import {
  IconArrowUpRight,
  IconCircleCheckFilled,
  IconPlus,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

const HomeEightBanner = () => {
  return (
    <div className="overflow-clip pt-12">
      <div className="container">
        {/* banner main title start */}
        <div className="grid-cols-12 flex-col items-center justify-between gap-6 max-md:flex md:grid">
          <div className="col-start-1 col-end-9 lg:col-end-10 xxl:col-end-11">
            <Fade>
              <h1 className="d1 font-semibold max-md:text-center">
                Discover Your Lifelong Learning
              </h1>
            </Fade>
          </div>
          <div className=" col-start-9 col-end-13 w-fit max-md:padding-all-32 lg:col-start-10 xxl:col-start-11">
            {" "}
            <Link
              href="/"
              className="h6  group theme-transition-3 flex items-center justify-center gap-1 rounded-full border border-neutral-500 font-semibold hover:bg-primaryColor max-md:p-5  md:px-8 md:py-[84px]"
            >
              <span>Explore More</span>
              <IconArrowUpRight
                size={20}
                className="theme-transition-3 group-hover:rotate-45"
              />
            </Link>
          </div>
        </div>
        {/* banner main title end */}
        <div className="grid-cols-12 flex-col items-center justify-between gap-6 md:padding-t-40 max-md:flex max-md:items-center md:grid">
          <div className="col-start-1 col-end-6 flex w-fit items-center gap-4 rounded-full border border-neutral-30 bg-neutral-20 px-6 py-3 xl:col-end-4">
            <Users data={<IconPlus />} plusBg="bg-secondaryColor" />{" "}
            <div className="flex flex-col gap-1">
              <H4>32k+</H4>
              <TextS>Students</TextS>
            </div>
          </div>
          <FadeRight className="col-start-6 col-end-13 xl:col-start-8">
            <TextXL>
              Discover a personalized learning odyssey tailored to your
              aspirations. Uncover the pathways that lead to academic and
              personal growth.
            </TextXL>
          </FadeRight>
        </div>
        <div className="padding-t-60 relative ">
          {/* rounded text */}
          <div className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 rounded-full  border  border-neutral-500 bg-white p-2 max-xxl:-translate-y-1/2 xxl:-top-3 xxl:-translate-x-[160px] ">
            <div className="relative">
              <Image
                src={roundedText}
                width={121}
                height={121}
                alt="Rounded Text"
                className="animate-spin-slow"
              />
              <div className="absolute left-1/2 top-1/2  z-30 -translate-x-1/2 -translate-y-1/2 rounded-full border border-neutral-500 bg-white p-3 text-secondaryColorTwo sm:p-5 xl:top-1/2 ">
                <div>
                  <IconCircleCheckFilled size={40} />
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              src={bannerImage}
              alt="Banner main image"
              className="max-w-[unset]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeEightBanner;
