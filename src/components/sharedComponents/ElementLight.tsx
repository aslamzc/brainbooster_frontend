import element from "@/../public/images/homeOne/element-why-choose-us.png";
import Image from "next/image";
const ElementLight = () => {
  return (
    <div className="section-gap-top absolute -top-20 max-xxl:hidden max-lg:-top-10 max-lg:left-0 lg:-top-24 lg:right-16 4xl:top-0">
      <Image
        src={element}
        width={200}
        height={117}
        alt="Element"
        className="animate-ping-smooth max-xl:w-[100px] xl:max-4xl:w-[180px] 4xl:w-[180px]"
      />
    </div>
  );
};

export default ElementLight;
