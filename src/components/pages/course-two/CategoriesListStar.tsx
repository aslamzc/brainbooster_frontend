import CheckBoxWhite from "@/components/button/CheckBoxWhite";
import { IconStarFilled } from "@tabler/icons-react";

type Props = {
  id: string;
  title: string;
  number: number;
};
const CategoriesListStar = ({ id, title, number }: Props) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <CheckBoxWhite id={id} />{" "}
        <div className="flex items-center gap-2">
          <span className="text-secondaryColor">
            <IconStarFilled />
          </span>{" "}
          <span className="block text-mText">{title}</span>
        </div>
      </div>{" "}
      <span className="block text-mText font-medium">{number}</span>
    </div>
  );
};

export default CategoriesListStar;
