import { IconStarFilled, IconStarHalfFilled } from "@tabler/icons-react";
import Image, { StaticImageData } from "next/image";
import BorderHorizontal from "../customBorder/BorderHorizontal";
import VectorHomeTwoTestimonialRightTop from "../vector/VectorHomeTwoTestimonialRightTop";
type Props = {
  image: StaticImageData;
  quat: string;
  name: string;
  title: string;
};

const TestimonialCardHomeTwo = ({ image, quat, name, title }: Props) => {
  return (
    <div className="grid-cols-12 items-center justify-between gap-6 bg-white lg:grid">
      <div className="relative  col-start-1 col-end-6 w-fit overflow-hidden rounded-32px">
        <VectorHomeTwoTestimonialRightTop />
        <Image
          src={image}
          width={526}
          height={416}
          alt="Slider Image"
          className="theme-transition-3 rounded-[34px] hover:scale-105"
        />
      </div>
      <div className="col-start-6 col-end-13 max-lg:mt-6 xl:col-start-7">
        <div className="flex items-center gap-x-2 ps-2 pt-1">
          <IconStarFilled className="text-secondaryColor" size={20} />
          <IconStarFilled className="text-secondaryColor" size={20} />
          <IconStarFilled className="text-secondaryColor" size={20} />
          <IconStarFilled className="text-secondaryColor" size={20} />
          <IconStarHalfFilled className="text-secondaryColor" size={20} />
        </div>
        <div className="mt-4 flex flex-col justify-between gap-6">
          <p className="xlText">{quat}</p>
          <BorderHorizontal />
          <div className="">
            <p className="h4 font-semibold">{name}</p>
            <p className="text-mText">{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCardHomeTwo;
