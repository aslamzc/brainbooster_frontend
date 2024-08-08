import icon1 from "@/../public/images/home-eight/about-education.png";
import aboutImage1 from "@/../public/images/home-eight/about-image-1.png";
import aboutImage2 from "@/../public/images/home-eight/about-image-2.png";
import icon3 from "@/../public/images/home-eight/about-inovation.png";
import icon4 from "@/../public/images/home-eight/about-worlds-records.png";
import icon2 from "@/../public/images/home-eight/icon5.png";
import userImage from "@/../public/images/home-eight/user-image.png";
import ButtonPrimary from "@/components/button/ButtonPrimary";
import ReactCounterUp from "@/components/sharedComponents/Counter";
import D4 from "@/components/sharedComponents/D4";
import TextL from "@/components/sharedComponents/TextL";
import FadeLeft from "@/motionEffect/FadeLeft";
import FadeRight from "@/motionEffect/FadeRight";
import Image from "next/image";
import HomeEightAboutInfo from "./HomeEightAboutInfo";
const HomeEightAbout = () => {
  return (
    <div className="container section-gap-top section-gap-bottom overflow-hidden">
      <div className="grid-cols-12 items-center justify-between gap-6 lg:grid">
        <div className="col-start-1 col-end-7 xl:col-end-6">
          <div className=" flex gap-3 max-lg:justify-center max-md:flex-col sm:gap-6 lg:justify-between">
            <Image
              src={aboutImage1}
              width={335}
              height={464}
              alt="About us image one"
              className="-z-10 rounded-16px"
            />
            <div className="flex h-fit flex-col gap-4 rounded-16px bg-secondaryColor px-3 py-8 text-center sm:w-fit">
              <p className="h2 font-semibold">
                <ReactCounterUp end={26} />
                K+
              </p>
              <TextL>Students Active Our Courses</TextL>
              <Image
                src={userImage}
                width={113}
                height={32}
                alt="user image"
                className="mx-auto block"
              />
            </div>
          </div>
          <div
            className="[500px]:-mt-32 mx-auto mt-4 w-fit sm:-mt-40 md:-mt-52
           lg:-mt-24 lg:ms-auto xxl:-mt-36"
          >
            <div className="z-10 w-fit rounded-16px  bg-white p-1  ">
              <Image
                src={aboutImage2}
                width={364}
                height={348}
                alt="about us image two"
                className=" rounded-16px"
              />
            </div>
          </div>
        </div>
        <div className="col-start-7 col-end-13 max-lg:padding-t-60">
          <FadeLeft>
            <D4>Welcome to Edufast University</D4>
          </FadeLeft>
          <FadeRight>
            <TextL className="pt-6">
              At Edufast University, our mission is to empower minds, inspire
              innovation, and foster a community of lifelong learners.
            </TextL>
          </FadeRight>

          <div className="padding-t-60 gap-40px flex flex-col">
            <div className="gap-32px grid-cols-2 max-xxl:flex max-xxl:flex-col xxl:grid">
              <HomeEightAboutInfo
                image={icon1}
                title="Academic Excellence"
                text="Edufast University is renowned for its commitment "
              />
              <HomeEightAboutInfo
                image={icon2}
                title="Course Offerings"
                text="Choose from a wide array of courses spanning various"
              />
              <HomeEightAboutInfo
                image={icon3}
                title="Innovative Learning "
                text="Immerse yourself in an innovative learning"
              />
              <HomeEightAboutInfo
                image={icon4}
                title="Sustainability Initiative"
                text="Be part of a university that cares about the planet. "
              />
            </div>
            <ButtonPrimary button buttonText="Read More" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeEightAbout;
