import FooterHomeThree from "@/components/footer/FooterHomeThree";
import NavbarTen from "@/components/navbar/NavbarTen";
import StudentSaySlider from "@/components/pages/courses-comparison/StudentSaySlider";
import AllBanner from "@/components/pages/home-ten/AllBanner";
import BannerTen from "@/components/pages/home-ten/BannerTen";
import BrandSliderTen from "@/components/pages/home-ten/BrandSliderTen";
import CountryCourses from "@/components/pages/home-ten/CountryCourses";
import CourseCategories from "@/components/pages/home-ten/CourseCategories";
import HomeTenAbout from "@/components/pages/home-ten/HomeTenAbout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Ten - Education & Online Course With Community",
  description: "Education & Online Course With Community",
};

const HomeTen = () => {
  return (
    <>
      <NavbarTen />
      <BannerTen />
      <BrandSliderTen />
      <CountryCourses />
      <HomeTenAbout />
      <AllBanner />
      <CourseCategories />
      <StudentSaySlider />
      <FooterHomeThree />
    </>
  );
};

export default HomeTen;
