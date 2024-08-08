import FooterHomeSix from "@/components/footer/FooterHomeSix";
import NavbarSix from "@/components/navbar/NavbarSix";
import OnlineCourses from "@/components/pages/home-four/OnlineCourses";
import BannerSix from "@/components/pages/home-six/BannerSix";
import HomeSixCourses from "@/components/pages/home-six/HomeSixCourses";
import HomeSixEvent from "@/components/pages/home-six/HomeSixEvent";
import HomeSixServices from "@/components/pages/home-six/HomeSixServices";
import Partner from "@/components/pages/home-six/Partner";
import TestimonialSlider from "@/components/pages/instructor/TestimonialSlider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Six - Education & Online Course With Community",
  description: "Education & Online Course With Community",
};

const HomeSix = () => {
  return (
    <>
      <NavbarSix />
      <BannerSix />
      <Partner />
      <OnlineCourses />
      <HomeSixCourses />
      <HomeSixEvent />
      <HomeSixServices />
      <TestimonialSlider />
      <FooterHomeSix />
    </>
  );
};

export default HomeSix;
