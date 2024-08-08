import FooterHomeOne from "@/components/footer/FooterHomeOne";
import NavbarTwo from "@/components/navbar/NavbarTwo";
import NewsLetter from "@/components/pages/home-one/NewsLetter";
import AnimateScrollSlider from "@/components/pages/home-two/AnimateScrollSlider";
import BannerTwo from "@/components/pages/home-two/BannerTwo";
import Certificate from "@/components/pages/home-two/Cartificate";
import Courses from "@/components/pages/home-two/Courses";
import Event from "@/components/pages/home-two/Event";
import LiveCourses from "@/components/pages/home-two/LiveCourses";
import PricePlan from "@/components/pages/home-two/PricePlan";
import Testimonial from "@/components/pages/home-two/Testimonial";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Two - Education & Online Course With Community",
  description: "Education & Online Course With Community",
};

const HomeTwo = () => {
  return (
    <>
      <NavbarTwo />
      <BannerTwo />
      <AnimateScrollSlider />
      <Courses />
      <Certificate />
      <LiveCourses />
      <Event />
      <PricePlan />
      <Testimonial />
      <NewsLetter />
      <FooterHomeOne />
    </>
  );
};

export default HomeTwo;
