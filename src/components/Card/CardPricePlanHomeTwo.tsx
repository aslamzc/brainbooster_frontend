import { IconCheck } from "@tabler/icons-react";
import { ReactElement } from "react";
import { v4 as uuidv4 } from "uuid";
import BorderHorizontalGreen from "../customBorder/BorderHorizontalGreen";
import VectorPricePlanBottomLeft from "../vector/VectorPricePlanBottomLeft";
import VectorPricePlanTopRight from "../vector/VectorPricePlanTopRight";

const CardPricePlanHomeTwo = ({
  price,
  type,
  icon,
  courseDescriptionData,
}: {
  price: number;
  type: string;
  icon: ReactElement;
  courseDescriptionData: string[];
}) => {
  return (
    <div className="group theme-transition-4 relative max-w-[416px] rounded-32px bg-bgColorTwo hover:bg-primaryColor">
      <VectorPricePlanBottomLeft />
      <VectorPricePlanTopRight planName={type} />
      <div
        className="flex flex-col justify-between gap-6 pb-32 pe-5 ps-5 pt-10 xl:pb-[156px] xl:pe-20 xl:ps-10 
    "
      >
        <div className="w-fit rounded-full bg-bgColorOne p-4 text-primaryColor ">
          {icon}
        </div>
        <div className="flex items-end">
          <p className="d4 theme-transition-4 font-semibold text-primaryColor group-hover:text-neutral-700">
            ${price}
          </p>
          <p className="lText theme-transition-4 group-hover:text-neutral-700">
            /Per month
          </p>
        </div>

        <BorderHorizontalGreen />
        <ul className="flex flex-col gap-4 group-hover:font-medium">
          {courseDescriptionData.map((item) => (
            <li
              key={uuidv4()}
              className="theme-transition-4 flex items-center gap-2 text-primaryColor group-hover:text-neutral-700"
            >
              <IconCheck />
              <span className="lText theme-transition-4 text-white group-hover:text-neutral-700">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CardPricePlanHomeTwo;
