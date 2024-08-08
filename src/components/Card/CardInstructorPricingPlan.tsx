import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
} from "@tabler/icons-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
  image: StaticImageData;
  name: string;
  title: string;
};

const CardInstructorPricingPlan = ({ image, name, title }: Props) => {
  return (
    <div className="gap-32px flex flex-col items-center">
      <div className="group theme-transition-4 relative rounded-full">
        <div className="circle absolute left-0 top-0 h-full w-full rounded-[50%] group-hover:-rotate-90"></div>
        <Image
          src={image}
          width={258}
          height={258}
          alt="instructor image"
          className="rounded-full p-6"
        />
        <div className="theme-transition-4 absolute left-0 top-0 h-full w-full p-6 opacity-0 group-hover:opacity-100">
          <div className="bg-neutral-40 flex h-full  w-full items-center justify-center gap-3 rounded-full bg-opacity-50 text-secondaryColorTwo">
            <Link
              href="/"
              className="theme-transition-4 rounded-full bg-white p-3 hover:bg-secondaryColorTwo hover:text-white"
            >
              <IconBrandFacebook size={20} />
            </Link>
            <Link
              href="/"
              className="theme-transition-4 rounded-full bg-white p-3 hover:bg-secondaryColorTwo hover:text-white"
            >
              <IconBrandTwitter size={20} />
            </Link>
            <Link
              href="/"
              className="theme-transition-4 rounded-full bg-white p-3 hover:bg-secondaryColorTwo hover:text-white"
            >
              <IconBrandInstagram size={20} />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h4 className="h4 font-semibold">{name}</h4>
        <p className="text-mText text-neutral-500">{title}</p>
      </div>
    </div>
  );
};

export default CardInstructorPricingPlan;
