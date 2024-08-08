import vector from "@/../public/images/homeOne/vector-ratting-top-left.png";
import { IconStarFilled, IconStarHalfFilled } from "@tabler/icons-react";
import Image from "next/image";

const VectorRattingLeftTop = () => {
  return (
    <div className="absolute left-0 top-0">
      <Image
        src={vector}
        width={186}
        height={72}
        alt="Vector image"
        className="relative"
      />
      <div className="absolute left-5 top-5 flex items-center justify-center gap-x-2 ps-2 pt-1">
        <IconStarFilled className="text-secondaryColor" size={20} />
        <IconStarFilled className="text-secondaryColor" size={20} />
        <IconStarFilled className="text-secondaryColor" size={20} />
        <IconStarFilled className="text-secondaryColor" size={20} />
        <IconStarHalfFilled className="text-secondaryColor" size={20} />
      </div>
    </div>
  );
};

export default VectorRattingLeftTop;
