import vector from "@/../public/images/homeTwo/vector-event-top-left.png";
import { IconArrowUpRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

const VectorRoundLeftTop = () => {
  return (
    <div className="absolute left-0 top-0">
      <Image
        src={vector}
        width={104}
        height={104}
        alt="Vector image"
        className="relative max-md:w-20"
      />
      <div className="group/button theme-transition-3 absolute left-1 top-0 flex items-center justify-center rounded-full bg-primaryColor p-2 text-h3 font-semibold text-neutral-700 shadow-six hover:bg-bgColorOne hover:text-white hover:shadow-six-theme md:p-4">
        <Link href="/event/event-details">
          <IconArrowUpRight
            size={48}
            stroke={1}
            className="theme-transition-3 group-hover/button:rotate-45"
          />
        </Link>
      </div>
    </div>
  );
};

export default VectorRoundLeftTop;
