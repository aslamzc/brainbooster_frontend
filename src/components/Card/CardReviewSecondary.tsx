import Image, { StaticImageData } from "next/image";
import StarsRatting from "../sharedComponents/StarsRatting";

type Props = {
  cardText: string;
  customerImage: StaticImageData;
  customerName: string;
  customerTitle: string;
};

const CardReviewSecondary = ({
  cardText,
  customerImage,
  customerName,
  customerTitle,
}: Props) => {
  return (
    <div className="border-neutral-30 bg-neutral-20 padding-all-32 gap-32px theme-transition-3 flex flex-col rounded-16px border hover:border-secondaryColorTwo hover:bg-secondaryColorTwo hover:bg-opacity-[0.05]">
      <div>
        <StarsRatting />
        <p className="pt-4">{cardText}</p>
      </div>
      <div className=" flex items-center gap-6">
        <div>
          <Image
            src={customerImage}
            width={60}
            height={60}
            alt="Slider image"
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h5 className="h5 font-semibold">{customerName}</h5>
          <p className="text-mText">{customerTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default CardReviewSecondary;
