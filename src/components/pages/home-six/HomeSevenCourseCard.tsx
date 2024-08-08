import ButtonHart from "@/components/button/ButtonHart";
import ButtonUnderLine from "@/components/button/ButtonUnderLine";
import BorderHorizontal from "@/components/customBorder/BorderHorizontal";
import H4 from "@/components/sharedComponents/H4";
import {
  IconClockHour5,
  IconStarFilled,
  IconUserCircle,
  IconVersions,
} from "@tabler/icons-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
  id: string;
  cardImage: StaticImageData;
  courseType: string;
  courseTitle: string;
  totalLessons: number;
  courseDuration: string;
  instructor: string;
  totalStudent: number;
  coursePrice: number;
  ratting: number;
};

const HomeSevenCourseCard = ({
  cardImage,
  courseType,
  courseTitle,
  totalLessons,
  courseDuration,
  instructor,
  totalStudent,
  coursePrice,
  ratting,
}: Props) => {
  return (
    <div className="bg theme-transition-3 mx-auto flex flex-col items-center justify-center gap-6 self-stretch rounded-16px border border-neutral-30 bg-white px-3 pb-8 pt-5 hover:border-secondaryColorTwo md:px-5">
      <div className="relative overflow-hidden rounded-16px">
        <Image
          src={cardImage}
          width={400}
          height={306}
          alt="Card Image"
          className="theme-transition-3 rounded-16px hover:scale-105"
        />
      </div>
      <div>
        <div className="flex flex-col gap-6 lg:px-4 xxl:px-8">
          <div className="flex items-center justify-between">
            <p className="lText rounded-8px bg-primaryColor bg-opacity-40 px-4 py-2 text-center">
              {courseType}
            </p>
            <ButtonHart />
          </div>
          <h5 className="h4 theme-transition-3 font-semibold hover:text-secondaryColorTwo">
            <Link href={`/courses/courses-details-one`}>{courseTitle}</Link>
          </h5>
          <div className="flex justify-between">
            <div className="flex flex-col justify-between gap-6">
              <div className="flex items-center gap-2">
                <IconVersions size={32} className="max-sm:h-4 max-sm:w-4" />
                <span className="lText font-medium">
                  {totalLessons} Lessons
                </span>
              </div>
              <div className="flex items-center gap-2 font-medium">
                <IconUserCircle size={32} className="max-sm:h-4 max-sm:w-4" />
                <Link href="/instructor/all-course" className="lText">
                  {instructor}
                </Link>
              </div>
            </div>
            <div className="flex flex-col justify-between gap-6">
              <div className="flex items-center gap-2">
                <div className="text-secondaryColor">
                  <IconStarFilled size={32} className="max-sm:h-4 max-sm:w-4" />
                </div>
                <p className="lText font-semibold">
                  4.8 <span className="font-normal">({ratting}K)</span>
                </p>
              </div>
              <div className="flex items-center gap-2">
                <IconClockHour5 size={32} className="max-sm:h-4 max-sm:w-4" />
                <span className="lText font-medium">{courseDuration}</span>
              </div>
            </div>
          </div>
          <BorderHorizontal />

          <div className="flex items-center justify-between">
            <ButtonUnderLine
              buttonText="Enroll Now"
              link="/courses/courses-details-one"
            />
            <H4 className="text-secondaryColorTwo">${coursePrice}</H4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSevenCourseCard;
