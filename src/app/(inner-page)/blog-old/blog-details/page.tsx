import bannerImage from "@/../public/images/blog/blog-details-banner.png";
import NewsLetter from "@/components/pages/about-us/NewsLetter";
import QuizDetailsContent from "@/components/pages/quiz-details/QuizDetailsContent";
import Banner1600WithBreadCrumbs from "@/components/sharedComponents/Banner1600WithBreadCrumbs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Details - Education & Online Course With Community",
  description: "Education & Online Course With Community",
};

const BlogDetails = () => {
  return (
    <div className="bg-neutral-20">
      <Banner1600WithBreadCrumbs
        bannerImage={bannerImage}
        page="Blog"
        pageLink="/blog/blog-classic"
        subPage="Details"
      />
      <QuizDetailsContent />
      <NewsLetter />
    </div>
  );
};

export default BlogDetails;
