import FooterHomeFour from "@/components/footer/FooterHomeFour";
import NavbarFour from "@/components/navbar/NavbarFour";
import TopInstructor from "@/components/pages/about-us/TopInstructor";
import BannerFour from "@/components/pages/home-four/BannerFour";
import HomeFourAboutUs from "@/components/pages/home-four/HomeFourAboutUs";
import HomeFourBestPlatform from "@/components/pages/home-four/HomeFourBestPlatform";
import HomeFourCourses from "@/components/pages/home-four/HomeFourCourses";
import HomeFourInfo from "@/components/pages/home-four/HomeFourInfo";
import HomeFourTestimonial from "@/components/pages/home-four/HomeFourTestimonial";
import OnlineCourses from "@/components/pages/home-four/OnlineCourses";
import TrustPilot from "@/components/pages/home-four/TrustPilot";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | BrainBooster",
  description: "Educational quiz platform",
};
const HomeFour = () => {
  return (
    <>
      <BannerFour />
      <OnlineCourses />
    </>
  );
};

export default HomeFour;
