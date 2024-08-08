import serviceImage from "@/../public/images/home-six/service.png";
import H4 from "@/components/sharedComponents/H4";
import TextM from "@/components/sharedComponents/TextM";
import Image, { StaticImageData } from "next/image";

type Props = {
  image: StaticImageData;
  title: string;
  text: string;
};

const ServiceCard = ({ image, title, text }: Props) => {
  return (
    <div className="relative mx-auto h-full w-fit rounded-16px border border-neutral-30 ">
      <Image
        src={serviceImage}
        width={306}
        height={267}
        alt="service image"
        className="-z-10 rounded-16px"
      />
      <div className="gap-32px theme-transition-3 absolute left-0 top-0 flex h-full flex-col items-center rounded-16px bg-neutral-20 px-8 py-10 hover:bg-[#071431] hover:bg-opacity-80 hover:text-white">
        <div>
          <Image src={image} width={60} height={60} alt="" />
        </div>
        <div className="flex flex-col gap-4 text-center">
          <H4>{title}</H4>
          <TextM>{text}</TextM>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
