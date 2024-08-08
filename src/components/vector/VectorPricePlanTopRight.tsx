import vector from "@/../public/images/homeTwo/vector-pricePlan-top-left.png";
import Image from "next/image";

const VectorPricePlanTopRight = ({ planName }: { planName: string }) => {
  return (
    <div className="absolute right-0 top-0">
      <Image
        src={vector}
        width={192}
        height={86}
        alt="Vector image"
        className="relative max-lg:w-[160px]"
      />
      <div className="h6 absolute right-0 top-0 ps-2 pt-1 font-semibold text-neutral-700 xxl:ps-2">
        <p className="!min-w-[140px] rounded-32px bg-primaryColor px-4 py-2 text-center  font-semibold sm:px-4 lg:!min-w-[160px] lg:py-3 xxl:px-8 xxl:py-4">
          {planName}
        </p>
      </div>
    </div>
  );
};

export default VectorPricePlanTopRight;
