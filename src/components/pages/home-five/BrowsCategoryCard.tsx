import H4 from "@/components/sharedComponents/H4";
import { IconArrowRight } from "@tabler/icons-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
  icon: StaticImageData;
  title: string;
  courseNumber: string;
  link: string;
};

const BrowsCategoryCard = ({ icon, title, courseNumber, link }: Props) => {
  return (
    <div className="group padding-t-40 padding-b-40 padding-s-32 padding-e-32 gap-32px theme-transition-3 flex flex-col rounded-16px border-neutral-30 bg-secondaryColorTwo bg-opacity-5 hover:scale-105 hover:border-neutral-40 hover:bg-secondaryColorTwo hover:text-white ">
      <div className="w-fit rounded-full bg-white p-6">
        <Image src={icon} width={40} height={40} alt="Icon image" />
      </div>
      <div className="flex items-center justify-between gap-3">
        <div className="flex flex-col  gap-4 text-mText">
          <H4>{title}</H4>
          <span>{courseNumber} Courses</span>
        </div>
        <Link
          href={`${link}`}
          className="theme-transition-3 -rotate-45 rounded-full border border-secondaryColorTwo p-2 text-secondaryColorTwo hover:rotate-0 group-hover:bg-white"
        >
          <IconArrowRight size={32} />
        </Link>
      </div>
    </div>
  );
};

export default BrowsCategoryCard;
