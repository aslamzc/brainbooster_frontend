import FooterHomeThree from "@/components/footer/FooterHomeThree";
import NavbarOne from "@/components/navbar/NavbarOne";
import Courses from "@/components/pages/home-one/Courses";
import BannerThree from "@/components/pages/home-three/BannerThree";
import BrandSlider from "@/components/pages/home-three/BrandSlider";
import Event from "@/components/pages/home-two/Event";
import Testimonial from "@/components/pages/home-two/Testimonial";
import InstructorCourseBanner from "@/components/pages/instructor/InstructorCourseBanner";
import AllContent from "@/components/pages/pricing-plan/AllContent";
import Fade from "@/motionEffect/Fade";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Three - Education & Online Course With Community",
  description: "Education & Online Course With Community",
};

const HomeThree = () => {
  return (
    <>
      <NavbarOne />
      <BannerThree />
      <Fade>
        <BrandSlider />
      </Fade>
      <Courses />
      <div className="section-gap-top section-gap-bottom">
        <AllContent />
      </div>
      <Event />
      <InstructorCourseBanner />
      <Testimonial />
      <div className="max-xxl:mt-10">
        <FooterHomeThree />
      </div>
    </>
  );
};

export default HomeThree;
