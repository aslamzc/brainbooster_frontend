import logoFooter from "@/../public/images/home-three/logo-footer.png";
import logo from "@/../public/images/homeOne/Logo.png";
import FadeTopToDown from "@/motionEffect/FadeTopToDown";
import Image from "next/image";
import Link from "next/link";
import BorderVertical from "../customBorder/BorderVertical";
import SocialIconsSmall from "../icons/SocialIconsSmall";
import BannerVideoButtonFooterThree from "../pages/home-three/BannerVideoButtonFooterThree";
import D2 from "../sharedComponents/D2";
import H4 from "../sharedComponents/H4";
import Li from "../sharedComponents/Li";
import TextS from "../sharedComponents/TextS";
import TextXL from "../sharedComponents/TextXL";
import Ul from "../sharedComponents/Ul";
import ContactUs from "./ContactUs";
import FooterThreeSearchBar from "./FooterThreeSearchBar";

const FooterHomeThree = () => {
  return (
    <footer className="padding-b-40 relative overflow-hidden before:absolute before:right-0 before:h-full before:bg-bgColorOne max-xxl:bg-bgColorOne min-[1390px]:before:w-[calc(100%-370px)] min-[1430px]:before:w-[calc(100%-397px)] min-[1600px]:before:w-[calc(100%-450px)] min-[1700px]:before:w-[calc(100%-530px)] 4xl:before:w-[calc(100%-580px)] min-[1850px]:before:w-[calc(100%-600px)]">
      <div className="container relative z-20 grid-cols-12 gap-6 xl:grid">
        <div className="section-gap-top col-start-1 col-end-4  flex flex-col justify-between gap-6">
          <div className="hidden xxl:block">
            <ContactUs bg="white" title="Contact" fontSize="h4" />
          </div>
          <div className="block xxl:hidden">
            <ContactUs bg="dark" />
          </div>
          <Link href="/">
            <Image
              src={logo}
              width={184}
              height={38}
              alt="logo"
              className="hidden xxl:block"
            />
            <Image
              src={logoFooter}
              width={184}
              height={38}
              alt="logo"
              className="xxl:hidden"
            />
          </Link>
        </div>
        <div className="section-gap-top col-start-4 col-end-13 bg-bgColorOne text-white xl:padding-s-80">
          <div className="flex items-center justify-between">
            <D2>Let’s Contact</D2>
            <div className="hidden shrink-0 overflow-hidden sm:block">
              <BannerVideoButtonFooterThree />
            </div>
          </div>
          <div className="section-gap-top grid-cols-2 items-center justify-between md:grid">
            <FadeTopToDown>
              <H4>Navigate</H4>
              <div className="flex pt-6">
                <Ul className="flex flex-col gap-3">
                  <Li className="theme-transition-3 hover:text-primaryColor">
                    <Link href="/">Home</Link>
                  </Li>
                  <Li className="theme-transition-3 hover:text-primaryColor">
                    <Link href="/about-us">About us</Link>
                  </Li>
                  <Li className="theme-transition-3 hover:text-primaryColor">
                    <Link href="/courses/courses-one">Courses</Link>
                  </Li>
                </Ul>
                <div className="padding-s-60">
                  <Ul className="flex flex-col gap-3">
                    <Li className="theme-transition-3 hover:text-primaryColor">
                      <Link href="/community">Community</Link>
                    </Li>
                    <Li className="theme-transition-3 hover:text-primaryColor">
                      <Link href="/event">Events</Link>
                    </Li>
                    <Li className="theme-transition-3 hover:text-primaryColor">
                      <Link href="/courses-comparison">Compare</Link>
                    </Li>
                  </Ul>
                </div>
              </div>
            </FadeTopToDown>
            <div className="flex h-full gap-8 max-md:padding-t-40">
              <div className="hidden md:block">
                <BorderVertical />
              </div>
              <FooterThreeSearchBar />
            </div>
          </div>
          <div className=" section-gap-top text-white">
            <div className=" padding-t-40 flex justify-between gap-6 border-t border-neutral-500 max-lg:flex-col lg:items-center">
              <div className="flex  flex-col gap-4">
                <TextS className="text-white">Saturday-Thursday</TextS>
                <TextXL>© Edufast {new Date().getFullYear()}</TextXL>
              </div>
              <div className="flex  flex-col gap-4">
                <TextS className="text-white">Copyright by</TextS>
                <TextXL>09:00 AM-10:30PM</TextXL>
              </div>
              <div className="flex  flex-col gap-4">
                <TextS className="text-white">Follow Us</TextS>
                <div>
                  <SocialIconsSmall />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterHomeThree;
