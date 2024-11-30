import AboutUS from "@/components/pages/about-us/AboutUS";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us |BrainBooster",
  description: "",
};

const Page = () => {
  return (
    <>
      <AboutUS />
    </>
  );
};

export default Page;
