import {
  IconCalendarDue,
  IconMessageDots,
  IconUserCircle,
} from "@tabler/icons-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import H3 from "../sharedComponents/H3";
import TextL from "../sharedComponents/TextL";
import TextM from "../sharedComponents/TextM";
import VectorCardRightBottom from "../vector/VectorCardRightBottom";

type Props = {
  image: StaticImageData;
  title: string;
  text: string;
  message: string;
  by: string;
  date: string;
};

const CardBlogGrid = ({ image, title, text, message, by, date }: Props) => {
  return (
    <div className="flex max-w-[400px] flex-col items-center justify-center gap-6 self-stretch">
      <div className="relative ">
        <Image
          src={image}
          width={400}
          height={306}
          alt="Card Image"
          className="rounded-32px"
        />
        <VectorCardRightBottom />
      </div>
      <div>
        <div className="flex flex-col gap-6 ">
          <div className="flex justify-between max-sm:flex-col max-sm:gap-3 sm:items-center">
            <div className="flex items-center gap-2 max-sm:justify-between">
              <IconUserCircle size={28} /> <TextL>By {by}</TextL>
            </div>
            <div className="hidden h-1 w-1 rounded-full bg-neutral-700 sm:block"></div>
            <div className="flex items-center gap-2 max-sm:justify-between">
              <IconCalendarDue size={28} /> <TextL>{date}</TextL>
            </div>
            <div className="hidden h-1 w-1 rounded-full bg-neutral-700 sm:block"></div>
            <div className="flex items-center gap-2 max-sm:justify-between">
              <IconMessageDots size={28} /> <TextL>{message}</TextL>
            </div>
          </div>
          <H3>
            <Link href="/">{title}</Link>
          </H3>
          <TextM>{text}</TextM>
        </div>
      </div>
    </div>
  );
};

export default CardBlogGrid;
