import TextS from "@/components/sharedComponents/TextS";
import TextXL from "@/components/sharedComponents/TextXL";
import Image, { StaticImageData } from "next/image";
import ButtonLinkAccountOutline from "./ButtonLinkAccountOutline";
import ButtonLinkAccountPrimary from "./ButtonLinkAccountPrimary";

type Props = {
  image: StaticImageData;
  accountName: string;
  message: string;
};

const LinkAccountCard = ({ image, accountName, message }: Props) => {
  return (
    <div className="theme-transition-3 flex gap-6 rounded-16px border border-neutral-30 bg-neutral-10 p-6 hover:border-secondaryColorTwo hover:bg-secondaryColorTwo hover:bg-opacity-5 max-sm:flex-col">
      <div className="h-fit w-fit rounded-full border border-neutral-30 bg-white p-3">
        <Image src={image} width={36} height={36} alt="Google brand logo" />
      </div>
      <div>
        <TextXL>{accountName}</TextXL>
        <TextS className="pt-2">{message}</TextS>
        <div className="flex items-center gap-4 pt-6 max-[400px]:flex-col">
          <ButtonLinkAccountPrimary buttonText="Connect" />
          <ButtonLinkAccountOutline buttonText="Learn More" />
        </div>
      </div>
    </div>
  );
};

export default LinkAccountCard;
