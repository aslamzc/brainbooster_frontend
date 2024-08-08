import Image, { StaticImageData } from "next/image";
import VectorRattingLeftTop from "../vector/VectorRattingLeftTop";
import VectorRattingRightBottom from "../vector/VectorRattingRightBottom";

type Props = {
  cardText: string;
  customerImage: StaticImageData;
  customerName: string;
  customerTitle: string;
};

const CustomerCard = ({
  cardText,
  customerImage,
  customerName,
  customerTitle,
}: Props) => {
  return (
    <div className="relative h-fit rounded-32px bg-neutral-20 px-8">
      <VectorRattingLeftTop />
      <VectorRattingRightBottom />
      <p className="lText pb-8 pt-[84px] font-medium">{cardText}</p>
      <div className="flex items-center gap-x-6 pb-[34px]">
        <Image
          src={customerImage}
          width={60}
          height={60}
          alt="Customer Image"
          className="rounded-full"
        />
        <p className="flex flex-col gap-y-2">
          <span className="text-h5 font-semibold">{customerName}</span>
          <span className="text-mText ">{customerTitle}</span>
        </p>
      </div>
    </div>
  );
};

export default CustomerCard;
