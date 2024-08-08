import vector from "@/../public/images/homeTwo/vector-testimonial-top-left.png";
import { IconQuote } from "@tabler/icons-react";
import Image from "next/image";

const VectorHomeTwoTestimonialRightTop = () => {
  return (
    <div className="absolute right-0 top-0 z-10">
      <Image
        src={vector}
        width={133}
        height={132}
        alt="Vector image"
        className="relative  max-xl:w-[100px]"
      />
      <div className="h3 absolute right-0 top-0  flex items-center justify-center rounded-full bg-primaryColor p-4 font-semibold text-neutral-700 shadow-four xl:p-7 ">
        <IconQuote size={48} stroke={1} />
      </div>
    </div>
  );
};

export default VectorHomeTwoTestimonialRightTop;
