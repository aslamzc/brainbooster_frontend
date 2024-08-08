import vector from "@/../public/images/homeTwo/vector-pricePlan-bottom-left.png";
import { IconArrowUpRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

const VectorPricePlanBottomLeft = () => {
  return (
    <div className="absolute bottom-0 left-0">
      <Image
        src={vector}
        width={115}
        height={112}
        alt="Vector image"
        className="relative max-md:w-24"
      />
      <div className="group/button absolute bottom-0 left-0 flex items-center justify-center rounded-full bg-primaryColor p-5 text-h3 font-semibold text-neutral-700  ">
        <Link href="/pricing-plan">
          <IconArrowUpRight
            size={48}
            stroke={1}
            className="theme-transition-3 group-hover/button:rotate-45 max-md:h-8 max-md:w-8"
          />
        </Link>
      </div>
    </div>
  );
};

export default VectorPricePlanBottomLeft;
