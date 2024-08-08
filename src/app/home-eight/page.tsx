import FooterHomeEight from "@/components/footer/FooterHomeEight";
import NavbarEight from "@/components/navbar/NavbarEight";
import NewsLetter from "@/components/pages/about-us/NewsLetter";
import ReviewFromStudent from "@/components/pages/event/ReviewFromStudent";
import BrandSlider from "@/components/pages/home-eight/BrandSlider";
import HomeEightAbout from "@/components/pages/home-eight/HomeEightAbout";
import HomeEightBanner from "@/components/pages/home-eight/HomeEightBanner";
import HomeEightCoursesCategories from "@/components/pages/home-eight/HomeEightCoursesCategories";
import HomeEightFacultyMember from "@/components/pages/home-eight/HomeEightFacultyMember";
import UniversityCourses from "@/components/pages/home-eight/UniversityCourses";
import DiscoverCourse from "@/components/sharedComponents/DiscoverCourse";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Eight - Education & Online Course With Community",
  description: "Education & Online Course With Community",
};

const HomeEight = () => {
  return (
    <>
      <NavbarEight />
      <HomeEightBanner />
      <HomeEightCoursesCategories />
      <UniversityCourses />
      <HomeEightAbout />
      <DiscoverCourse />
      <HomeEightFacultyMember />
      <BrandSlider />
      <ReviewFromStudent />
      <NewsLetter />
      <FooterHomeEight />
    </>
  );
};

export default HomeEight;
