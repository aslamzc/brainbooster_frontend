import ButtonUnderLine from "@/components/button/ButtonUnderLine";
import BorderHorizontal from "@/components/customBorder/BorderHorizontal";
import H4 from "@/components/sharedComponents/H4";
import { IconStarFilled, IconUsers, IconVersions } from "@tabler/icons-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
  id: string;
  cardImage: StaticImageData;
  instructorImage: StaticImageData;
  courseTitle: string;
  totalLessons: number;
  instructor: string;
  totalStudent: number;
  coursePrice: number;
  ratting: number;
};

const HomeEightUniversityCard = ({
  cardImage,
  courseTitle,
  totalLessons,
  instructorImage,
  instructor,
  totalStudent,
  coursePrice,
  ratting,
}: Props) => {
  return (
    <div className="theme-transition-3 mx-auto flex items-center justify-center gap-6 self-stretch rounded-16px border border-white bg-white max-md:padding-t-32 max-md:padding-s-32 max-md:padding-e-32 hover:border-secondaryColorTwo max-md:flex-col max-md:pb-8 md:py-3 md:pe-8 md:ps-3">
      <div className="relative overflow-hidden rounded-16px">
        <Image
          src={cardImage}
          width={224}
          height={307}
          alt="Card Image"
          className="theme-transition-3 h-full rounded-16px hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-6">
        <h5 className="h4 font-semibold">
          <Link href="/courses/courses-details-one">{courseTitle}</Link>
        </h5>
        <BorderHorizontal />
        <div className="flex justify-between gap-3 sm:gap-4">
          <div className="flex flex-col justify-between gap-4 max-sm:flex-wrap">
            <div className="flex items-center gap-2">
              <IconVersions size={32} className="max-sm:h-4 max-sm:w-4" />
              <span className="lText font-medium">{totalLessons}Lessons</span>
            </div>
            <div className="flex items-center gap-2 font-medium">
              <Image
                src={instructorImage}
                width={32}
                height={32}
                alt="Instructor image"
                className="shrink-0 rounded-full"
              />
              <Link href="/instructor/all-course" className="lText">
                {instructor}
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-4 max-sm:flex-wrap">
            <div className="flex items-center gap-2">
              <IconUsers size={32} className="max-sm:h-4 max-sm:w-4" />
              <p className="lText text-neutral-500">
                <span className="font-medium !text-neutral-700">
                  {totalStudent}
                </span>
                K(Enrollees)
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-secondaryColor">
                <IconStarFilled size={32} className="max-sm:h-4 max-sm:w-4" />
              </div>
              <p className="lText font-semibold">
                4.8 <span className="font-normal">({ratting}K)</span>
              </p>
            </div>
          </div>
        </div>
        <BorderHorizontal />
        <div className="flex items-center justify-between">
          <ButtonUnderLine buttonText="Enroll Now" link="/signup" />
          <H4 className="text-secondaryColorTwo">${coursePrice}</H4>
        </div>
      </div>
    </div>
  );
};

export default HomeEightUniversityCard;
