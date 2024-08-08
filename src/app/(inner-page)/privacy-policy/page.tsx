import image from "@/../public/images/privacy-policy.png";
import NewsLetter from "@/components/pages/about-us/NewsLetter";
import PrivacyPolicyContent from "@/components/pages/privacy-policy/PrivacyPolicyContent";
import Banner1600WithBreadCrumbs from "@/components/sharedComponents/Banner1600WithBreadCrumbs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Education & Online Course With Community",
  description: "Education & Online Course With Community",
};

const PrivacyPolicy = () => {
  return (
    <div className="bg-neutral-20">
      <Banner1600WithBreadCrumbs
        bannerImage={image}
        page="Page"
        subPage="Privacy Policy"
      />
      <PrivacyPolicyContent />
      <NewsLetter />
    </div>
  );
};

export default PrivacyPolicy;
