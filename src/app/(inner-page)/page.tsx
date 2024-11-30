import BannerFour from "@/components/pages/home-four/BannerFour";
import OnlineCourses from "@/components/pages/home-four/OnlineCourses";
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
