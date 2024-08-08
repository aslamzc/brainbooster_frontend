import { IconStarFilled, IconStarHalfFilled } from "@tabler/icons-react";

const StarsRatting = () => {
  return (
    <div className=" flex items-center gap-x-2">
      <IconStarFilled className="text-secondaryColor" size={20} />
      <IconStarFilled className="text-secondaryColor" size={20} />
      <IconStarFilled className="text-secondaryColor" size={20} />
      <IconStarFilled className="text-secondaryColor" size={20} />
      <IconStarHalfFilled className="text-secondaryColor" size={20} />
    </div>
  );
};

export default StarsRatting;
