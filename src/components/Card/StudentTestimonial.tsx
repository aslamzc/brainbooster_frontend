import { IconStarFilled, IconStarHalfFilled } from "@tabler/icons-react";
import Image, { StaticImageData } from "next/image";
import BorderHorizontal from "../customBorder/BorderHorizontal";
type Props = {
  image: StaticImageData;
  quat: string;
  name: string;
  title: string;
};

const StudentTestimonial = ({ image, quat, name, title }: Props) => {
  return (
    <div className="grid-cols-12  justify-between gap-6 bg-white lg:grid">
      <div className="relative col-start-1 col-end-6 w-fit">
        <Image
          src={image}
          width={526}
          height={515}
          alt="Slider Image"
          className="rounded-32px"
        />
      </div>
      <div className="col-start-6 col-end-13 max-lg:mt-6 xl:col-start-7">
        <div>
          <h4 className="d4 font-semibold">What our Students say</h4>
          <p className="lText mt-6 text-neutral-500">
            12+ million people are already learning on Edufast
          </p>
        </div>
        <div className="padding-t-60 flex items-center gap-x-2">
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

export default StudentTestimonial;
