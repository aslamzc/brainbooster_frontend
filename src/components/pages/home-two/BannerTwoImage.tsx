import { IconMicrophone, IconPhone, IconVideoPlus } from "@tabler/icons-react";
import Image, { StaticImageData } from "next/image";

type Props = {
  image: StaticImageData;
};

const BannerTwoImage = ({ image }: Props) => {
  return (
    <div className="relative w-fit rounded-[13.67px] border-[8.5px] border-white shadow-md">
      <Image
        src={image}
        width={196}
        height={226}
        alt="Man image"
        className="rounded-[13.67px]"
      />
      <div className="absolute bottom-6 left-[46px]  flex items-center justify-center gap-1 ">
        <div className="w-fit rounded-full bg-bgColorTwo p-2 text-primaryColor">
          <IconMicrophone size={16} />
        </div>
        <div className="w-fit rounded-full bg-primaryColor p-2 text-bgColorTwo">
          <IconPhone size={16} />
        </div>
        <div className="w-fit rounded-full bg-bgColorTwo p-2 text-primaryColor">
          <IconVideoPlus size={16} />
        </div>
      </div>
    </div>
  );
};

export default BannerTwoImage;
