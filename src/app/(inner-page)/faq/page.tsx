import NewsLetter from "@/components/pages/about-us/NewsLetter";
import FaqBanner from "@/components/pages/faq/FaqBanner";
import FaqBannerMiddle from "@/components/pages/faq/FaqBannerMiddle";
import GetStart from "@/components/pages/faq/GetStart";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faq - Education & Online Course With Community",
  description: "Education & Online Course With Community",
};

const Faq = () => {
  return (
    <div>
      <FaqBanner />
      <FaqBannerMiddle />
      <GetStart />
      <NewsLetter />
    </div>
  );
};

export default Faq;
