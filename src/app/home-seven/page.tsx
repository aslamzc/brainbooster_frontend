import FooterHomeThree from "@/components/footer/FooterHomeThree";
import NavbarSeven from "@/components/navbar/NavbarSeven";
import ReviewFromStudent from "@/components/pages/event/ReviewFromStudent";
import HomeSevenBanner from "@/components/pages/home-seven/HomeSevenBanner";
import HomeSevenExploreCourses from "@/components/pages/home-seven/HomeSevenExploreCourses";
import HomeSevenOnlineCourses from "@/components/pages/home-seven/HomeSevenOnlineCourses";
import InstructorCourseBanner from "@/components/pages/instructor/InstructorCourseBanner";
import PricingPlanTopInstructor from "@/components/pages/pricing-plan/PricingPlanTopInstructor";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Seven - Education & Online Course With Community",
  description: "Education & Online Course With Community",
};

const HomeSeven = () => {
  return (
    <>
      <NavbarSeven />
      <HomeSevenBanner />
      <HomeSevenOnlineCourses />
      <HomeSevenExploreCourses />
      <PricingPlanTopInstructor />
      <InstructorCourseBanner />
      <ReviewFromStudent />
      <FooterHomeThree />
    </>
  );
};

export default HomeSeven;
