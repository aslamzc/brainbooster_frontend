import TextM from "@/components/sharedComponents/TextM";
import TextXS from "@/components/sharedComponents/TextXS";
import { IconStarFilled } from "@tabler/icons-react";
import Image, { StaticImageData } from "next/image";
import TableModal from "./TableModal";

type Props = {
  image: StaticImageData;
  title: string;
  startDate: string;
  progress: number;
  review: number;
  status: string;
  courseInstructor: string;
  index: number;
  length: number;
};
const MyCoursesTableRow = ({
  image,
  title,
  startDate,
  progress,
  review,
  status,
  courseInstructor,
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
        <TextM className="px-6 py-5">{startDate}</TextM>
      </td>
      <td>
        <div className="flex items-center gap-3 px-6 py-5">
          <TextM>{progress}%</TextM>
          <div className="h-1 w-20  rounded-md bg-neutral-30">
            <div
              className={`progress-bar theme-transition-4 h-1 w-[53%] rounded-md bg-secondaryColor`}
              role="progressbar"
              style={{
                width: `${progress}%`,
                transition: "width 2s ease-in-out",
              }}
            ></div>
          </div>
        </div>
      </td>
      <td>
        <div className="flex items-center gap-3 px-6 py-5">
          <IconStarFilled className="text-secondaryColor" />{" "}
          <TextM className="font-medium">{review}</TextM>
        </div>
      </td>
      <td>
        <div
          className={`rounded-full border border-neutral-30 px-5 py-2 text-center text-[12px] text-neutral-500 ${
            status === "Complete" && "bg-primaryColor bg-opacity-20"
          }
        
        ${status === "Cancel" && "bg-secondaryColor bg-opacity-10"}  ${
          status === "Running" && "bg-neutral-20"
        }`}
        >
          {status}
        </div>
      </td>
      <td>
        <div className="relative px-6 py-5 text-neutral-500">
          <TableModal index={index} length={length} />
        </div>
      </td>
    </tr>
  );
};

export default MyCoursesTableRow;
