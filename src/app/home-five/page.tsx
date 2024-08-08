import FooterHomeFive from "@/components/footer/FooterHomeFive";
import NavbarFive from "@/components/navbar/NavbarFive";
import AllInfo from "@/components/pages/home-five/AllInfo";
import BannerFive from "@/components/pages/home-five/BannerFive";
import BecomeAnInstructor from "@/components/pages/home-five/BecomeAnInstructor";
import BrowsCategory from "@/components/pages/home-five/BrowsCategory";
import MasterFuture from "@/components/pages/home-five/MasterFuture";
import HomeFourAboutUs from "@/components/pages/home-four/HomeFourAboutUs";
import HomeFourCourses from "@/components/pages/home-four/HomeFourCourses";
import CustomersSay from "@/components/pages/home-one/CustomersSay";
import InstructorCourseBanner from "@/components/pages/instructor/InstructorCourseBanner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Five - Education & Online Course With Community",
  description: "Education & Online Course With Community",
};

const HomeFive = () => {
  return (
    <>
      <NavbarFive />
      <BannerFive />
      <AllInfo />
      <BrowsCategory />
      <HomeFourAboutUs />
      <HomeFourCourses />
      <InstructorCourseBanner />
      <MasterFuture />
      <BecomeAnInstructor />
      <CustomersSay />
      <FooterHomeFive />
    </>
  );
};

export default HomeFive;
