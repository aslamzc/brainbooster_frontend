import TextM from "@/components/sharedComponents/TextM";
import TextXS from "@/components/sharedComponents/TextXS";
import { IconStarFilled } from "@tabler/icons-react";
import Image, { StaticImageData } from "next/image";
import TableModal from "../../student-profile/dashboard/TableModal";

type Props = {
  image: StaticImageData;
  title: string;
  courseInstructor: string;
  selling: number;
  amount: number;
  period: string;
  review: number;
  index: number;
  length: number;
};
const MostSellingCoursesTableRow = ({
  image,
  title,
  courseInstructor,
  selling,
  amount,
  period,
  review,
  index,
  length,
}: Props) => {
  return (
    <tr className={`${index % 2 === 1 && "bg-neutral-20"}`}>
      <td className="flex items-center gap-4 px-6 py-2">
        <Image
          src={image}
          width={40}
          height={40}
          alt="Course Image"
          className="shrink-0 rounded-full"
        />
        <div className="flex flex-col gap-1">
          <TextM className="font-medium">{title}</TextM>
          <TextXS>{courseInstructor}</TextXS>
        </div>
      </td>
      <td>
        <TextM className="px-6 py-5">{selling}</TextM>
      </td>
      <td>
        <div className="flex items-center gap-3 px-6 py-5">
          <TextM>${amount}</TextM>
        </div>
      </td>
      <td>
        <div className="rounded-full border border-neutral-30 bg-primaryColor bg-opacity-20 px-5 py-2">
          {period}
        </div>
      </td>
      <td>
        <div className="flex items-center gap-3 px-6 py-5">
          <IconStarFilled className="text-secondaryColor" />{" "}
          <TextM className="font-medium">{review}</TextM>
        </div>
      </td>
      <td>
        <div className="relative px-6 py-5 text-neutral-500">
          <TableModal length={length} index={index} />
        </div>
      </td>
    </tr>
  );
};

export default MostSellingCoursesTableRow;
