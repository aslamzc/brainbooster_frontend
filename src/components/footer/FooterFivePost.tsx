import Image, { StaticImageData } from "next/image";
import H5 from "../sharedComponents/H5";
import TextM from "../sharedComponents/TextM";

type Props = {
  image: StaticImageData;
  title: string;
  date: string;
};

const FooterFivePost = ({ image, title, date }: Props) => {
  return (
    <div className="flex gap-6">
      <div className="shrink-0">
        <Image
          src={image}
          width={80}
          height={80}
          alt="Post image"
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col gap-3 ">
        <H5>{title}</H5>
        <TextM className="text-secondaryColor">{date}</TextM>
      </div>
    </div>
  );
};

export default FooterFivePost;
