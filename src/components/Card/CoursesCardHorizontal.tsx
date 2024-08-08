import {
  IconClockHour5,
  IconStarFilled,
  IconUserCircle,
  IconVersions,
} from "@tabler/icons-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import ButtonHart from "../button/ButtonHart";
import BorderHorizontal from "../customBorder/BorderHorizontal";
import H3 from "../sharedComponents/H3";
import VectorCardRightBottom from "../vector/VectorCardRightBottom";

type Props = {
  cardImage: StaticImageData;
  courseType: string;
  courseTitle: string;
  totalLessons: number;
  courseDuration: string;
  instructor: string;
  ratting: number;
};

const CoursesCardHorizontal = ({
  cardImage,
  courseType,
  courseTitle,
  totalLessons,
  courseDuration,
  instructor,
  ratting,
}: Props) => {
  return (
    <div className="flex items-center justify-center gap-6 self-stretch max-md:flex-col lg:max-xxl:flex-col">
      <div className="relative w-fit shrink-0 overflow-hidden rounded-xl">
        <Image
          src={cardImage}
          width={275}
          height={289}
          alt="Card Image"
          className="theme-transition-3 h-[289px]  w-[275px] rounded-xl object-cover hover:scale-105"
        />
        <VectorCardRightBottom />
      </div>
      <div>
        <div className="flex flex-col gap-6 px-4 ">
          <div className="flex items-center justify-between">
            <p className="lText rounded-8px bg-neutral-20 px-4 py-2 text-center">
              {courseType}
            </p>
            <ButtonHart />
          </div>
          <H3>
            <Link href="/courses/courses-details-one">{courseTitle}</Link>
          </H3>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 font-medium">
              <IconVersions size={32} className="max-sm:h-4 max-sm:w-4" />
              <span className="lText">{totalLessons} Lessons</span>
            </div>
            <div className="flex items-center gap-2">
              <IconClockHour5 size={32} className="max-sm:h-4 max-sm:w-4" />
              <span className="lText font-medium">{courseDuration}</span>
            </div>
          </div>
          <BorderHorizontal />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <IconUserCircle size={32} className="max-sm:h-4 max-sm:w-4" />
              <Link href="/instructor/all-course" className="lText font-medium">
                {instructor}
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-secondaryColor">
                <IconStarFilled className="max-sm:h-4 max-sm:w-4" />
              </div>
              <p className="lText font-semibold">
                4.8 <span className="font-normal">({ratting}K)</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesCardHorizontal;
