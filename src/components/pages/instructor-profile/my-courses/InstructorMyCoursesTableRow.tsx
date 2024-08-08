import BorderVerticalN40 from "@/components/customBorder/BorderVerticalN40";
import TextM from "@/components/sharedComponents/TextM";
import TextXS from "@/components/sharedComponents/TextXS";
import { IconCircleCheck, IconVersions } from "@tabler/icons-react";
import Image, { StaticImageData } from "next/image";
import TableModal from "../../student-profile/dashboard/TableModal";

type Props = {
  image: StaticImageData;
  title: string;
  courseInstructor: string;
  enrolled: number;
  status: string;
  price: number;
  index: number;
  length: number;
};
const InstructorMyCoursesTableRow = ({
  image,
  title,
  courseInstructor,
  enrolled,
  status,
  price,
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
          <div className="flex gap-3">
            <div className="flex items-center gap-2">
              <IconVersions size={16} className="text-secondaryColorTwo" />{" "}
              <TextXS>{courseInstructor}</TextXS>
            </div>
            <div>
              <BorderVerticalN40 />
            </div>
            <div className="flex items-center gap-2">
              <IconCircleCheck size={16} className="text-secondaryColorTwo" />{" "}
              <TextXS>{courseInstructor}</TextXS>
            </div>
          </div>
        </div>
      </td>
      <td>
        <TextM className="px-6 py-5">{enrolled}</TextM>
      </td>

      <td>
        <div
          className={`rounded-full border border-neutral-30 px-5 py-2  text-center text-[12px] text-neutral-500 ${
            status === "Live" &&
            "bg-secondaryColorTwo bg-opacity-10 text-secondaryColorTwo"
          }
          
          ${status === "Applied" && "bg-white"}  ${
            status === "Rejected" && "bg-secondaryColor bg-opacity-10"
          }`}
        >
          {status}
        </div>
      </td>
      <td>
        <div className="flex items-center gap-3 px-6 py-5">
          <TextM>${price}</TextM>
        </div>
      </td>
      <td>
        <div className="px-6 py-5 text-neutral-500">
          <TableModal index={index} length={length} />
        </div>
      </td>
    </tr>
  );
};

export default InstructorMyCoursesTableRow;
