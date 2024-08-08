import ButtonPagination from "@/components/button/ButtonPagination";
import BorderHorizontalN40 from "@/components/customBorder/BorderHorizontalN40";
import SearchBarTransparent from "@/components/sharedComponents/SearchBarWhite";
import { IconReload } from "@tabler/icons-react";
import { v4 as uuidv4 } from "uuid";
import { productCardData } from "../../../../public/data/productCardData";
import { productCategories } from "../../../../public/data/productCategories";
import { productTag } from "../../../../public/data/productTag";
import CategoriesList from "../course-two/CategoriesList";
import PopularTags from "../course-two/PopularTags";
import PriceScale from "../course-two/PriceScale";
import StarCategory from "../course-two/StarCategory";
import ProductCard from "./ProductCard";

const ProductsContent = () => {
  return (
    <div className="padding-t-80 padding-b-80">
      <div className="container grid-cols-12 justify-between gap-6 md:grid">
        <div className="col-start-1 col-end-6 lg:col-end-5 xl:col-end-4">
          <div className="sticky top-32 flex w-full flex-col items-start justify-between gap-6 rounded-32px border border-neutral-30 bg-neutral-10 p-8">
            <h4 className="h4 font-semibold">Filter</h4>
            <BorderHorizontalN40 />
            <SearchBarTransparent />
            <BorderHorizontalN40 />
            <p className="xlText font-medium">Types of Categories</p>
            <div className="flex w-full flex-col justify-between gap-4 text-mText">
              {productCategories?.map(({ ...props }) => (
                <CategoriesList key={uuidv4()} {...props} />
              ))}
            </div>
            <BorderHorizontalN40 />
            <p className="xlText font-medium">Pricing scale</p>
            <PriceScale />
            <BorderHorizontalN40 />
            <StarCategory />
            <BorderHorizontalN40 />
            <PopularTags tag={productTag} />
            <p className="xlText font-medium">More Tags</p>
            <BorderHorizontalN40 />
            <button className="flex w-full items-center justify-center gap-2 rounded-32px border border-neutral-700 px-6 py-3">
              <IconReload />{" "}
              <span className="h6 font-semibold">Reset Filters</span>
            </button>
          </div>
        </div>
        <div className="col-start-6 col-end-13 max-md:padding-t-40 lg:col-start-5 xl:col-start-4">
          <div className="grid grid-cols-1 items-center justify-between gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {productCardData?.map(({ ...props }) => (
              <ProductCard key={uuidv4()} {...props} />
            ))}
          </div>
          <div className="padding-t-40 mx-auto w-fit">
            <ButtonPagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsContent;
