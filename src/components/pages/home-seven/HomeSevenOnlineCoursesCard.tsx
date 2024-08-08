import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
  icon: StaticImageData;
  title: string;
  courseNumber: string;
  link: string;
};

const HomeSevenOnlineCoursesCard = ({
  icon,
  title,
  courseNumber,
  link,
}: Props) => {
  return (
    <div className="group theme-transition-3 flex gap-6 rounded-16px border-neutral-30 bg-secondaryColorTwo bg-opacity-5 px-6 py-4 hover:scale-105 hover:border-neutral-40 hover:bg-secondaryColorTwo hover:bg-opacity-10  ">
      <div className="w-fit shrink-0 rounded-full border border-neutral-30 bg-primaryColor p-6">
        <Image
          src={icon}
          width={25}
          height={25}
          alt="Icon image"
          className="h-[25] w-[25]"
        />
      </div>
      <div className="flex flex-col gap-3">
        <Link href={`${link}`} className="xlText font-medium text-neutral-800">
          {title}
        </Link>
        <span>{courseNumber}</span>
      </div>
    </div>
  );
};

export default HomeSevenOnlineCoursesCard;
