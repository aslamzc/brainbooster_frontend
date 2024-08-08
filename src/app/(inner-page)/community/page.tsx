import bannerImage from "@/../public/images/community/newsfeed/banner.png";
import NewsLetter from "@/components/pages/about-us/NewsLetter";
import CommunityBody from "@/components/pages/community/CommunityBody";
import Banner1600WithBreadCrumbs from "@/components/sharedComponents/Banner1600WithBreadCrumbs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community - Education & Online Course With Community",
  description: "Education & Online Course With Community",
};

const Community = () => {
  return (
    <div className="bg-neutral-20">
      <Banner1600WithBreadCrumbs bannerImage={bannerImage} />
      <CommunityBody />
      <NewsLetter />
    </div>
  );
};

export default Community;
