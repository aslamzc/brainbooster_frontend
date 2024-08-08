import Banner from "@/components/pages/about-us/Banner";
import NewsLetter from "@/components/pages/about-us/NewsLetter";
import TopInstructor from "@/components/pages/about-us/TopInstructor";
import WhyChooseUs from "@/components/pages/home-one/WhyChooseUs";
import AnimateScrollSlider from "@/components/pages/home-two/AnimateScrollSlider";
import PricePlan from "@/components/pages/home-two/PricePlan";
import Testimonial from "@/components/pages/home-two/Testimonial";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Education & Online Course With Community",
  description: "Education & Online Course With Community",
};

const AboutUS = () => {
  return (
    <>
      <Banner />
      <AnimateScrollSlider />
      <WhyChooseUs />
      <TopInstructor />
      <PricePlan />
      <Testimonial />
      <NewsLetter />
    </>
  );
};

export default AboutUS;
