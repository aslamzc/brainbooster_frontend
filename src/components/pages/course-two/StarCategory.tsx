import { v4 as uuidv4 } from "uuid";
import { starCategory } from "../../../../public/data/starCategory";
import CategoriesListStar from "./CategoriesListStar";

const StarCategory = () => {
  return (
    <>
      <p className="xlText font-medium">Star Category</p>

      <div className="flex w-full flex-col justify-between gap-4 text-mText">
        {starCategory?.map(({ ...props }) => (
          <CategoriesListStar key={uuidv4()} {...props} />
        ))}
      </div>
    </>
  );
};

export default StarCategory;
