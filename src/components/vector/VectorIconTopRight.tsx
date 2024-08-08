import vector from "@/../public/images/homeOne/vector-top-right.png";
import { IconCheck } from "@tabler/icons-react";
import Image from "next/image";

const VectorCardRightBottom = () => {
  return (
    <div className="absolute right-0 top-0">
      <Image
        src={vector}
        width={85}
        height={83}
        alt="Vector image"
        className="relative"
      />
      <div className=" absolute bottom-[20px] right-[10px] rounded-full bg-primaryColor p-3">
        <IconCheck size={32} />
      </div>
    </div>
  );
};

export default VectorCardRightBottom;
