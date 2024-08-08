import image1 from "@/../public/images/gallery/gallery-1.png";
import image2 from "@/../public/images/gallery/gallery-2.png";
import image3 from "@/../public/images/gallery/gallery-3.png";
import image4 from "@/../public/images/gallery/gallery-4.png";
import image5 from "@/../public/images/gallery/gallery-5.png";
import image6 from "@/../public/images/gallery/gallery-6.png";
import image7 from "@/../public/images/gallery/gallery-7.png";
import image8 from "@/../public/images/gallery/gallery-8.png";
import image9 from "@/../public/images/gallery/gallery-9.png";
import Image from "next/image";
const TrendingTab = () => {
  return (
    <>
      <div className="flex flex-col gap-6">
        {" "}
        <div className="overflow-hidden rounded-16px">
          <Image
            src={image1}
            alt="image"
            className="theme-transition-3 w-full rounded-16px hover:scale-105"
          />
        </div>
        <div className="overflow-hidden rounded-16px">
          <Image
            src={image2}
            alt="image"
            className="theme-transition-3 w-full rounded-16px hover:scale-105"
          />
        </div>
        <div className="overflow-hidden rounded-16px">
          <Image
            src={image3}
            alt="image"
            className="theme-transition-3 w-full rounded-16px hover:scale-105"
          />
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="overflow-hidden rounded-16px">
          <Image
            src={image7}
            alt="image"
            className="theme-transition-3 w-full rounded-16px hover:scale-105"
          />
        </div>
        <div className="overflow-hidden rounded-16px">
          <Image
            src={image8}
            alt="image"
            className="theme-transition-3 w-full rounded-16px hover:scale-105"
          />
        </div>
        <div className="overflow-hidden rounded-16px">
          <Image
            src={image9}
            alt="image"
            className="theme-transition-3 w-full rounded-16px hover:scale-105"
          />
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="overflow-hidden rounded-16px">
          <Image
            src={image4}
            alt="image"
            className="theme-transition-3 w-full rounded-16px hover:scale-105"
          />
        </div>
        <div className="overflow-hidden rounded-16px">
          <Image
            src={image5}
            alt="image"
            className="theme-transition-3 w-full rounded-16px hover:scale-105"
          />
        </div>
        <div className="overflow-hidden rounded-16px">
          <Image
            src={image6}
            alt="image"
            className="theme-transition-3 w-full rounded-16px hover:scale-105"
          />
        </div>
      </div>
    </>
  );
};

export default TrendingTab;
