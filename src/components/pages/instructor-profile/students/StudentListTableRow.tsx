import TextM from "@/components/sharedComponents/TextM";
import { IconForbid2, IconMail } from "@tabler/icons-react";
import Image, { StaticImageData } from "next/image";

type Props = {
  image: StaticImageData;
  studentName: string;
  location: string;
  courses: string;
  progress: number;
  enrolledDate: string;
  index: number;
};

const StudentListTableRow = ({
  image,
  studentName,
  location,
  courses,
  progress,
  enrolledDate,
  index,
}: Props) => {
  const statusValue = [
    { label: "Complete" },
    { label: "Cancel" },
    { label: "Running" },
  ];

  return (
    <tr className={`${index % 2 === 1 && "bg-neutral-20"}`}>
      <td className="my-auto flex h-fit items-center gap-3 px-6 py-4">
        <Image
          src={image}
          width={32}
          height={32}
          alt="Course Image"
          className="shrink-0 rounded-full"
        />
        <TextM>{studentName}</TextM>
      </td>
      <td>
        <TextM className="px-6 py-5">{location}</TextM>
      </td>
      <td>
        <div className="flex items-center gap-3 px-6 py-5">
          <TextM>{courses}</TextM>
        </div>
      </td>
      <td>
        <div className="flex items-center gap-3 px-6 py-5">
          <TextM>{progress}%</TextM>
          <div className="h-1 w-20  rounded-md bg-neutral-30">
            <div
              className={`progress-bar theme-transition-4 h-1 w-[53%] rounded-md bg-secondaryColor`}
              role="progressbar"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </td>
      <td>
        <TextM>{enrolledDate}</TextM>
      </td>
      <td>
        <div className="flex items-center gap-3 px-6 py-3 text-neutral-500">
          <button className="rounded-full border border-neutral-30 bg-primaryColor bg-opacity-30 p-2">
            <IconMail />
          </button>
          <button className="rounded-full border border-neutral-30 bg-secondaryColor bg-opacity-10 p-2">
            <IconForbid2 />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default StudentListTableRow;
