import TextM from "@/components/sharedComponents/TextM";
import TextXS from "@/components/sharedComponents/TextXS";
import { IconDownload } from "@tabler/icons-react";
import Image, { StaticImageData } from "next/image";

type Props = {
  image: StaticImageData;
  title: string;
  startDate: string;
  status: string;
  cardNumber: string;
  courseInstructor: string;
  paymentLogo: StaticImageData;
  total: number;
  index: number;
};
const PaymentInfoTableRow = ({
  image,
  title,
  startDate,
  cardNumber,
  status,
  total,
  paymentLogo,
  courseInstructor,
  index,
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
          <TextM>{title}</TextM>
          <TextXS>{courseInstructor}</TextXS>
        </div>
      </td>
      <td>
        <TextM className="px-6 py-5">{startDate}</TextM>
      </td>
      <td>
        <div className="flex items-center gap-3 px-6 py-4">
          <Image
            src={paymentLogo}
            width={32}
            height={32}
            alt="Payment method logo"
            className="rounded-full border border-neutral-40"
          />
          <TextM className="text-neutral-500">{cardNumber}</TextM>
        </div>
      </td>
      <td>
        <div
          className={`rounded-full border border-neutral-30 px-5 py-2 text-center text-[12px] text-neutral-500 ${
            status === "Paid" && "bg-primaryColor bg-opacity-20"
          }
        
        ${status === "Cancel" && "bg-secondaryColor bg-opacity-10"}  ${
          status === "Pending" && "bg-neutral-20"
        }`}
        >
          {status}
        </div>
      </td>
      <td>
        <div className="flex items-center gap-3 px-6 py-5">
          <TextM className="font-medium">${total}</TextM>
        </div>
      </td>
      <td>
        <div className="px-6 py-5 text-neutral-500">
          <IconDownload />
        </div>
      </td>
    </tr>
  );
};

export default PaymentInfoTableRow;
