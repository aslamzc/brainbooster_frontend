import vector1 from "@/../public/images/homeOne/vector-1.png";
import Image from "next/image";
const VectorBanner = ({ value }: { value: string }) => {
  return (
    <div className="absolute">
      <Image src={vector1} width={193} height={97} alt="Vector image" />
      <div className="absolute left-0 top-0 ps-9 pt-1 ">
        <p className="text-h3 font-semibold text-neutral-500 xxl:text-h2">
          {value}
        </p>
        <p className="text-base font-medium leading-lh-150">Our Students</p>
      </div>
    </div>
  );
};

export default VectorBanner;
