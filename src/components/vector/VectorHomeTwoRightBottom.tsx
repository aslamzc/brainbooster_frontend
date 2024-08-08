import vector from "@/../public/images/homeTwo/vector-event-bottom-right.png";
import Image from "next/image";

const VectorHomeTwoRightBottom = () => {
  return (
    <div className="absolute bottom-0 right-0">
      {/* <Image
        src={vector}
        width={165}
        height={108}
        alt="Vector image"
        className="relative max-xxl:w-[150px] max-xl:w-[140px] max-lg:w-[140px] max-md:w-[130px]  max-sm:w-[120px]"
      /> */}
      <div className="absolute bottom-0 right-0 pb-1  ps-6 pt-1 xxl:ps-2">
        <p className="h3 rounded-16px bg-primaryColor px-6 py-2  font-semibold shadow-five lg:py-3 xxl:px-8 xxl:py-4">
          $199
        </p>
      </div>
    </div>
  );
};

export default VectorHomeTwoRightBottom;
