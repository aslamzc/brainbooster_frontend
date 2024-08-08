import vector from "@/../public/images/about/vector-bottom-left.png";
import { IconArrowUpRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

const VectorAboutBannerRoundBottomLeft = () => {
  return (
    <div className="absolute bottom-0 left-0 z-20">
      <Image
        src={vector}
        width={150}
        height={150}
        alt="Vector image"
        className="relative max-sm:w-[80px]  sm:max-xxl:w-[100px]"
      />
      <div className="theme-transition-4 absolute bottom-0 left-0 ms-1 flex items-center justify-center rounded-full bg-primaryColor p-3 text-h3 font-semibold text-neutral-700 shadow-six hover:bg-bgColorOne hover:text-white hover:shadow-six-theme sm:p-5 xxl:p-7">
        <Link href="/">
          <IconArrowUpRight
            size={60}
            className="theme-transition-3 hover:rotate-45 max-xxl:h-10 max-xxl:w-10"
          />
        </Link>
      </div>
    </div>
  );
};

export default VectorAboutBannerRoundBottomLeft;
