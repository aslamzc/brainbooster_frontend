import appStore from "@/../public/images/home-four/apple-store.png";
import logo from "@/../public/images/home-four/footer-icon.png";
import playStore from "@/../public/images/home-four/play-store.png";
import FadeTopToDown from "@/motionEffect/FadeTopToDown";
import Image from "next/image";
import Link from "next/link";
import SocialIconsSmall from "../icons/SocialIconsSmall";
import H4 from "../sharedComponents/H4";
import Li from "../sharedComponents/Li";
import TextS from "../sharedComponents/TextS";
import TextXL from "../sharedComponents/TextXL";
import Ul from "../sharedComponents/Ul";
import FooterHomeOneBottom from "./FooterHomeOneBottom";
import FooterThreeSearchBar from "./FooterThreeSearchBar";

const FooterHomeFour = () => {
  return (
    <div className="section-gap-top bg-bgColorOne text-white">
      <div className="container">
        <div className="grid-cols-12 gap-6 lg:grid">
          <div className="col-start-1 col-end-7">
            <FooterThreeSearchBar />

            <FadeTopToDown className="padding-t-60">
              <H4>Navigate</H4>
              <div className="flex max-w-[495px] justify-between pt-6 max-[400px]:flex-col">
                <Ul className="flex flex-col gap-3">
                  <Li className="theme-transition-3 hover:text-primaryColor">
                    <Link href="/home-four">Home</Link>
                  </Li>
                  <Li className="theme-transition-3 hover:text-primaryColor">
                    <Link href="/about-us">About us</Link>
                  </Li>
                  <Li className="theme-transition-3 hover:text-primaryColor">
                    <Link href="/courses/courses-one">Courses</Link>
                  </Li>
                  <Li className="theme-transition-3 hover:text-primaryColor">
                    <Link href="/">Instructor</Link>
                  </Li>
                  <Li className="theme-transition-3 hover:text-primaryColor">
                    <Link href="/">Pricing Plan</Link>
                  </Li>
                  <Li className="theme-transition-3 hover:text-primaryColor">
                    <Link href="/">FAQs</Link>
                  </Li>
                </Ul>

                <Ul className="flex flex-col gap-3">
                  <Li className="theme-transition-3 hover:text-primaryColor">
                    <Link href="/community">Community</Link>
                  </Li>
                  <Li className="theme-transition-3 hover:text-primaryColor">
                    <Link href="/event">Events</Link>
                  </Li>
                  <Li className="theme-transition-3 hover:text-primaryColor">
                    <Link href="/">Compare</Link>
                  </Li>
                  <Li className="theme-transition-3 hover:text-primaryColor">
                    <Link href="/products">Shop</Link>
                  </Li>
                  <Li className="theme-transition-3 hover:text-primaryColor">
                    <Link href="/blog/blog-classic">Blog</Link>
                  </Li>
                </Ul>
                <Ul className="flex flex-col gap-3">
                  <Li className="theme-transition-3 hover:text-primaryColor">
                    <Link href="/event">Event</Link>
                  </Li>
                  <Li className="theme-transition-3 hover:text-primaryColor">
                    <Link href="/gallery">Gallery</Link>
                  </Li>
                  <Li className="theme-transition-3 hover:text-primaryColor">
                    <Link href="/signup">Sign Up</Link>
                  </Li>
                  <Li className="theme-transition-3 hover:text-primaryColor">
                    <Link href="/singin">Sing In</Link>
                  </Li>
                  <Li className="theme-transition-3 hover:text-primaryColor">
                    <Link href="/contact-us">Contact</Link>
                  </Li>
                </Ul>
              </div>
            </FadeTopToDown>
          </div>
          <div className="col-start-8 col-end-13 flex flex-col gap-12 max-lg:padding-t-40">
            <div>
              <Link href="/">
                <Image src={logo} width={184} height={39} alt="footer logo" />
              </Link>
            </div>
            <div className="maxsm:items-center flex justify-between gap-6 max-sm:flex-col">
              <div className="flex flex-col gap-4">
                <TextS className="text-white">Toll Free Customer Care</TextS>
                <TextXL className="!font-semibold">
                  {" "}
                  <Link href="tel:+3567897483">(303) 555-0105</Link>
                </TextXL>
              </div>
              <div className="flex flex-col gap-4">
                <TextS className="text-white">Need Live Support?</TextS>
                <TextXL className="!font-semibold">
                  {" "}
                  <Link href="mailto:info@gmail.com">info@gmail.com</Link>
                </TextXL>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <TextS className="text-white">Take your learning with you</TextS>
              <div className="flex items-center gap-6">
                <Link href="">
                  <Image
                    src={appStore}
                    width={180}
                    height={57}
                    alt="App store"
                  />
                </Link>
                <Link href="">
                  <Image
                    src={playStore}
                    width={180}
                    height={57}
                    alt="App store"
                  />
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <TextS className="text-white">Follow us on social media</TextS>
              <SocialIconsSmall />
            </div>
          </div>
        </div>
        <FooterHomeOneBottom />
      </div>
    </div>
  );
};

export default FooterHomeFour;
