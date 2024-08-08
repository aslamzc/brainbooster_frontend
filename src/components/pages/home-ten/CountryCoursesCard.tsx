import TextS from "@/components/sharedComponents/TextS";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
  image: StaticImageData;
  name: string;
  courses: number;
};

const CountryCoursesCard = ({ image, name, courses }: Props) => {
  return (
    <div className="theme-transition-3 flex items-center gap-6 rounded-16px border border-neutral-30 bg-neutral-20 px-6 py-5 hover:scale-102">
      <Image
        src={image}
        width={60}
        height={60}
        alt="Flag image"
        className="rounded-full"
      />

      <div className="flex flex-col gap-2">
        <Link href="#" className="xlText font-medium">
          {name}
        </Link>
        <TextS>{courses}+ Courses </TextS>
      </div>
    </div>
  );
};

export default CountryCoursesCard;
