import ButtonHart from "@/components/button/ButtonHart";
import BorderHorizontal from "@/components/customBorder/BorderHorizontal";
import H4 from "@/components/sharedComponents/H4";
import TextL from "@/components/sharedComponents/TextL";
import VectorCardRightBottom from "@/components/vector/VectorCardRightBottom";
import {
  IconClockHour5,
  IconStarFilled,
  IconUsers,
  IconVersions,
} from "@tabler/icons-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
  id: string;
  cardImage: StaticImageData;
  instructorImage: StaticImageData;
  courseType: string;
  courseTitle: string;
  totalLessons: number;
  courseDuration: string;
  instructor: string;
  totalStudent: number;
  coursePrice: number;
  ratting: number;
};

const HomeFiveCourseCard = ({
  cardImage,
  courseType,
  instructorImage,
  courseTitle,
  totalLessons,
  courseDuration,
  instructor,
  totalStudent,
  coursePrice,
  ratting,
}: Props) => {
  return (
    <div className="mx-auto flex max-w-[400px] flex-col  gap-6 ">
      <div className="relative overflow-hidden rounded-32px">
        <Image
          src={cardImage}
          width={400}
          height={306}
          alt="Card Image"
          className="theme-transition-3 rounded-32px hover:scale-105"
        />

        <VectorCardRightBottom />
      </div>

      <div className="flex flex-col gap-6 px-4 sm:px-8">
        <div className="flex items-center justify-between">
          <p className="lText rounded-8px bg-neutral-20 px-4 py-2 text-center">
            {courseType}
          </p>
          <ButtonHart />
        </div>
        <h5 className="h3 font-semibold">
          <Link href="/courses/courses-details-two">{courseTitle}</Link>
        </h5>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <IconVersions size={32} />
            <span className="lText">{totalLessons} Lessons</span>
          </div>
          <div className="flex items-center gap-2">
            <IconClockHour5 size={32} />
            <span className="lText">{courseDuration}</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <IconUsers size={32} />
            <div className="flex gap-1">
              <p className="lText font-semibold">{totalStudent}K</p>{" "}
              <TextL className="!text-neutral-500">(Students)</TextL>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-secondaryColor">
              <IconStarFilled />
            </div>
            <p className="lText font-semibold">
              4.8 <span className="font-normal">({ratting}K)</span>
            </p>
          </div>
        </div>

        <BorderHorizontal />

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src={instructorImage}
              width={32}
              height={32}
              alt="Instructor Image"
              className="shrink-0 rounded-full"
            />
            <Link href="/instructor/all-course" className="lText">
              {instructor}
            </Link>
          </div>
          <H4 className="text-secondaryColorTwo">${coursePrice}</H4>
        </div>
      </div>
    </div>
  );
};

export default HomeFiveCourseCard;
