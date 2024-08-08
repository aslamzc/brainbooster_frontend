import vector1 from "@/../public/images/about/vector-about-banner-top-left.png";
import Image from "next/image";
const VectorBanner = ({ value }: { value: string }) => {
  return (
    <div className="absolute z-10">
      <Image
        src={vector1}
        width={276}
        height={164}
        alt="Vector image"
        className="max-sm:w-[190px] sm:max-xxl:w-[230px]"
      />
      <div className="absolute left-0 top-0 ms-2 mt-2 rounded-20px bg-primaryColor px-3 py-2 shadow-five sm:px-5 sm:py-3 xxl:px-10 xxl:py-5 ">
        <p className="h2 font-semibold text-neutral-500">{value}</p>
        <p className="mText font-medium ">years of experience</p>
      </div>
    </div>
  );
};

export default VectorBanner;
