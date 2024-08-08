import NewsLetter from "@/components/pages/about-us/NewsLetter";
import EducationalSuccess from "@/components/pages/gallery/EducationalSuccess";
import GalleryContent from "@/components/pages/gallery/GalleryContent";
import Testimonial from "@/components/pages/home-two/Testimonial";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery - Education & Online Course With Community",
  description: "Education & Online Course With Community",
};
const Gallery = () => {
  return (
    <>
      <GalleryContent />
      <EducationalSuccess />
      <Testimonial />
      <NewsLetter />
    </>
  );
};

export default Gallery;
