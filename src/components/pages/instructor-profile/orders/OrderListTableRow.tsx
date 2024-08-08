import TextM from "@/components/sharedComponents/TextM";
import Image, { StaticImageData } from "next/image";
import TableModal from "../../student-profile/dashboard/TableModal";

type Props = {
  image: StaticImageData;
  coursesName: string;
  orderId: string;
  orderDate: string;
  price: number;
  payment: string;
  index: number;
  length: number;
};

const OrderListTableRow = ({
  image,
  coursesName,
  orderId,
  orderDate,
  price,
  payment,
  index,
  length,
}: Props) => {
  return (
    <tr className={`${index % 2 === 1 && "bg-neutral-20"}`}>
      <td className="flex items-center gap-3 px-6 py-4">
        <Image
          src={image}
          width={32}
          height={32}
          alt="Course Image"
          className="shrink-0 rounded-full"
        />
        <TextM>{coursesName}</TextM>
      </td>
      <td>
        <TextM className="px-6 py-5">{orderId}</TextM>
      </td>
      <td>
        <div className="flex items-center gap-3 px-6 py-5">
          <TextM>{orderDate}</TextM>
        </div>
      </td>
      <td>
        <div className="flex items-center gap-3 px-6 py-5">
          <TextM>${price}</TextM>
        </div>
      </td>
      <td>
        <div className="flex items-center gap-3 px-6 py-5">
          <TextM>{payment}</TextM>
        </div>
      </td>
      <td>
        <div className="flex items-center gap-3 px-6 py-5">
          <TableModal index={index} length={length} />
        </div>
      </td>
    </tr>
  );
};

export default OrderListTableRow;
