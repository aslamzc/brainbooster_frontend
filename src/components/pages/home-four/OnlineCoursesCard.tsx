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

const OnlineCoursesCard = ({ icon, title, courseNumber, link }: Props) => {
  return (
    <div className="border-neutral-30 bg-neutral-20 hover:border-neutral-40 padding-t-40 padding-b-40 padding-s-32 padding-e-32 gap-32px theme-transition-3 flex flex-col items-center rounded-16px hover:scale-105 hover:bg-secondaryColorTwo hover:bg-opacity-10">
      <div className="rounded-full bg-white p-6">
        <Image src={icon} width={40} height={40} alt="Icon image" />
      </div>
      <div className="flex flex-col items-center gap-3">
        <H4>{title}</H4>
        <Link href={`${link}`} className="flex items-center gap-4 text-mText">
          <span>{courseNumber} Courses</span>

          <IconArrowRight size={20} />
        </Link>
      </div>
    </div>
  );
};

export default OnlineCoursesCard;
