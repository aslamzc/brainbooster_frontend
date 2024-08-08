import { IconCalendarDue, IconUserCircle } from "@tabler/icons-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import H4 from "../sharedComponents/H4";
import TextL from "../sharedComponents/TextL";
import TextM from "../sharedComponents/TextM";
import VectorCardRightBottom from "../vector/VectorCardRightBottom";

type Props = {
  image: StaticImageData;
  title: string;
  text: string;

  by: string;
  date: string;
};

const CardBlogList = ({ image, title, text, by, date }: Props) => {
  return (
    <div className="flex items-center justify-center gap-6 self-stretch max-md:flex-col">
      <div className="relative shrink-0">
        <Image
          src={image}
          width={278}
          height={234}
          alt="Card Image"
          className="rounded-32px"
        />
        <VectorCardRightBottom />
      </div>
      <div>
        <div className="flex flex-col gap-6 ">
          <div className="flex items-center  justify-between max-sm:gap-3">
            <div className="flex items-center gap-2 ">
              <IconUserCircle size={28} /> <TextL>By {by}</TextL>
            </div>
            <div className=" h-1 w-1 rounded-full bg-neutral-700"></div>
            <div className="flex items-center gap-2 ">
              <IconCalendarDue size={28} /> <TextL>{date}</TextL>
            </div>
          </div>
          <H4>
            <Link href="/">{title}</Link>
          </H4>
          <TextM>{text}</TextM>
        </div>
      </div>
    </div>
  );
};

export default CardBlogList;
