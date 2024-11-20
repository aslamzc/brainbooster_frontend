import {
  IconCalendarDue,
  IconMessageDots,
  IconUserCircle,
} from "@tabler/icons-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import H3 from "../sharedComponents/H3";
import H4 from "../sharedComponents/H4";
import TextL from "../sharedComponents/TextL";
import TextM from "../sharedComponents/TextM";
import VectorCardRightBottom from "../vector/VectorCardRightBottom";
import TextXS from "../sharedComponents/TextXS";
import TextS from "../sharedComponents/TextS";

//types
type QuizeType = {
  id: number,
  title: string,
  description: string,
  createdAt: string,
  userName: string
}

const CardBlogGrid = ({ title, description, createdAt, userName }: QuizeType) => {
  return (
    <div className="flex max-w-[400px] flex-col items-center gap-6 self-stretch">
      {/* <div className="relative ">
        <Image
          src={"/images/homeOne/explore-courses-1.png"}
          width={400}
          height={306}
          alt="Card Image"
          className="rounded-32px"
        />
        <VectorCardRightBottom />
      </div> */}
      <div>
        <div className="flex flex-col gap-3 ">
          <div className="flex justify-between max-sm:flex-col max-sm:gap-3 sm:items-center">
            <div className="flex items-center gap-1 max-sm:justify-between">
              <IconUserCircle size={18} /> <TextS>By {userName}</TextS>
            </div>
            {/* <div className="hidden h-1 w-1 rounded-full bg-neutral-700 sm:block"></div> */}
            {/* <div className="flex items-center gap-2 max-sm:justify-between">
              <IconCalendarDue size={28} /> <TextL>{createdAt}</TextL>
            </div> */}
            {/* <div className="hidden h-1 w-1 rounded-full bg-neutral-700 sm:block"></div> */}
            {/* <div className="flex items-center gap-2 max-sm:justify-between">
              <IconMessageDots size={28} /> <TextL>kkk</TextL>
            </div> */}
          </div>
          <H4>
            <Link href="/">{title}</Link>
          </H4>
          <TextM>{description}</TextM>
        </div>
      </div>
    </div>
  );
};

export default CardBlogGrid;
