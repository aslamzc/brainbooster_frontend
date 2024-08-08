import TextS from "@/components/sharedComponents/TextS";
import TextXL from "@/components/sharedComponents/TextXL";
import Image, { StaticImageData } from "next/image";

type Props = {
  image: StaticImageData;
  title: string;
  text: string;
};

const HomeEightAboutInfo = ({ image, title, text }: Props) => {
  return (
    <div className="flex items-center gap-6">
      <div className="border-neutral-30 shrink-0 rounded-full border bg-primaryColor p-4">
        <Image src={image} width={28} height={28} alt="about icon" />
      </div>
      <div className="flex flex-col justify-between gap-2">
        <TextXL>{title}</TextXL>
        <TextS>{text}</TextS>
      </div>
    </div>
  );
};

export default HomeEightAboutInfo;
