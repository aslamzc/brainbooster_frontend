import TextM from "@/components/sharedComponents/TextM";
import TableModal from "../../student-profile/dashboard/TableModal";

type Props = {
  serial: string;
  id: string;
  date: string;
  amount: number;
  payment: string;
  status: string;
  index: number;
  length: number;
};

const PayoutListTableRow = ({
  serial,
  id,
  date,
  amount,
  payment,
  status,
  index,
  length,
}: Props) => {
  return (
    <tr className={`${index % 2 === 1 && "bg-neutral-20"}`}>
      <td className=" flex items-center gap-3 px-6 py-5">
        <TextM>{serial}</TextM>
      </td>
      <td>
        <TextM className="px-6 py-5">{id}</TextM>
      </td>
      <td>
        <div className="flex items-center gap-3 px-6 py-5">
          <TextM>{date}</TextM>
        </div>
      </td>
      <td>
        <div className="flex items-center gap-3 px-6 py-5">
          <TextM>${amount}</TextM>
        </div>
      </td>
      <td>
        <div className="flex items-center gap-3 px-6 py-5">
          <TextM>{payment}</TextM>
        </div>
      </td>
      <td>
        <div
          className={`rounded-full border border-neutral-30 px-5 py-2 text-center text-[12px] text-neutral-500 ${
            status === "Successful" && "bg-primaryColor bg-opacity-20"
          }
          
          ${status === "Pending" && "bg-neutral-20"}  ${
            status === "Cancelled" && "bg-secondaryColor bg-opacity-10"
          }`}
        >
          {status}
        </div>
      </td>
      <td>
        <div className="relative flex items-center gap-3 px-6 py-5">
          <TableModal index={index} length={length} />
        </div>
      </td>
    </tr>
  );
};

export default PayoutListTableRow;
