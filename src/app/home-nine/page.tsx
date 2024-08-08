import FooterHomeEight from "@/components/footer/FooterHomeEight";
import NavbarEight from "@/components/navbar/NavbarEight";
import NewsLetter from "@/components/pages/about-us/NewsLetter";
import StudentSaySlider from "@/components/pages/courses-comparison/StudentSaySlider";
import BrandSlider from "@/components/pages/home-eight/BrandSlider";
import AboutSchool from "@/components/pages/home-nine/AboutSchool";
import BannerNine from "@/components/pages/home-nine/BannerNine";
import FeaturedSchool from "@/components/pages/home-nine/FeaturedSchool";
import HomeNineGallery from "@/components/pages/home-nine/HomeNineGallery";
import TeachingStars from "@/components/pages/home-nine/TeachingStars";
import DiscoverCourse from "@/components/sharedComponents/DiscoverCourse";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Nine - Education & Online Course With Community",
  description: "Education & Online Course With Community",
};

const HomeNine = () => {
  return (
    <>
      <NavbarEight />
      <BannerNine />
      <FeaturedSchool />
      <AboutSchool />
      <HomeNineGallery />
      <DiscoverCourse />
      <TeachingStars />
      <BrandSlider />
      <StudentSaySlider />
      <NewsLetter />
      <FooterHomeEight />
    </>
  );
};

export default HomeNine;
