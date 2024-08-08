import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
  cardIcon: StaticImageData;
  cardTitle: string;
  cardText: string;
};

const CardWhyChoose = ({ cardIcon, cardTitle, cardText }: Props) => {
  return (
    <div className="border-neutral-40 theme-transition-3 flex flex-col items-center gap-y-4 rounded-12px border bg-white px-6 py-8 hover:scale-102 hover:bg-primaryColor lg:gap-y-6 lg:px-10 lg:py-8 xxl:gap-y-8">
      <div className="rounded-full bg-bgColorOne p-6 text-primaryColor lg:p-8">
        <Image src={cardIcon} width={60} height={60} alt="Card Icon" />
      </div>
      <div className="text-center">
        <Link
          href="/courses/courses-details-two"
          className="text-h4 font-semibold"
        >
          {cardTitle}
        </Link>
        <p className="pb-4 pt-4 text-sText lg:pb-8">{cardText}</p>
        <div className="mx-auto h-[1px] w-12 bg-neutral-500"></div>
      </div>
    </div>
  );
};

export default CardWhyChoose;
