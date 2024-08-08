import NewsLetter from "@/components/pages/about-us/NewsLetter";
import PricePlan from "@/components/pages/home-two/PricePlan";
import Testimonial from "@/components/pages/home-two/Testimonial";
import AllContent from "@/components/pages/pricing-plan/AllContent";
import PricingPlanTopInstructor from "@/components/pages/pricing-plan/PricingPlanTopInstructor";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing Plan - Education & Online Course With Community",
  description: "Education & Online Course With Community",
};

const PricingPlan = () => {
  return (
    <div>
      <PricePlan />
      <PricingPlanTopInstructor />
      <AllContent />
      <Testimonial />
      <NewsLetter />
    </div>
  );
};

export default PricingPlan;
