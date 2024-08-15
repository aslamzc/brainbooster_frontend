import NewsLetter from "@/components/pages/about-us/NewsLetter";
import BlogClassicContent from "@/components/pages/blog-classic/BlogClassic";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Classic - Education & Online Course With Community",
  description: "Education & Online Course With Community",
};

const BlogClassic = () => {
  return (
    <div className="bg-neutral-20">
      <BlogClassicContent />
      <NewsLetter />
    </div>
  );
};

export default BlogClassic;
