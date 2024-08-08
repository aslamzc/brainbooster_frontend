import CoursesCard from "@/components/Card/CoursesCard";
import ButtonPagination from "@/components/button/ButtonPagination";
import BorderHorizontalN40 from "@/components/customBorder/BorderHorizontalN40";
import DropdownCoursesTwo from "@/components/dropdown/DropdownCoursesTwo";
import SearchBarTransparent from "@/components/sharedComponents/SearchBarWhite";
import { IconReload } from "@tabler/icons-react";
import { v4 as uuidv4 } from "uuid";
import { categories } from "../../../../public/data/categories";
import { coursesData } from "../../../../public/data/coursesData";
import { coursesName } from "../../../../public/data/coursesName";
import { levelList } from "../../../../public/data/levelList";
import CategoriesList from "./CategoriesList";
import LevelList from "./LevelList";
import PopularTags from "./PopularTags";
import PriceScale from "./PriceScale";
import StarCategory from "./StarCategory";

const CoursesTwoBody = () => {
  const category = [
    { label: "Newest" },
    { label: "Popular" },
    { label: "Best Sell" },
  ];
  return (
    <section className="section-gap-top section-gap-bottom">
      <div className="container">
        <div className="relative grid-cols-12 justify-between gap-6 lg:grid">
          <div className=" col-start-1 col-end-5">
            <div className="sticky top-32 flex w-full flex-col items-start justify-between gap-6 rounded-32px border border-neutral-30 bg-neutral-10 p-8">
              <h4 className="h4 font-semibold">Filter</h4>
              <BorderHorizontalN40 />
              <SearchBarTransparent />
              <BorderHorizontalN40 />
              <p className="xlText font-medium">Types of Categories</p>
              <div className="flex w-full flex-col justify-between gap-4 text-mText">
                {categories?.map(({ ...props }) => (
                  <CategoriesList key={uuidv4()} {...props} />
                ))}
              </div>
              <BorderHorizontalN40 />
              <PriceScale />
              <BorderHorizontalN40 />
              <StarCategory />
              <BorderHorizontalN40 />
              <PopularTags tag={coursesName} />
              <BorderHorizontalN40 />
              <p className="xlText font-medium">Level</p>
              <div className="flex w-full flex-col justify-between gap-4 text-mText">
                {levelList.map(({ ...props }) => (
                  <LevelList key={uuidv4()} {...props} />
                ))}
              </div>
              <BorderHorizontalN40 />
              <button className="flex w-full items-center justify-center gap-2 rounded-32px border border-neutral-700 px-6 py-3">
                <IconReload />{" "}
                <span className="h6 font-semibold">Reset Filters</span>
              </button>
            </div>
          </div>
          <div className="col-start-5 col-end-13 max-lg:mt-10">
            <div className="flex flex-col justify-between gap-10 ">
              <div className="flex gap-6 max-sm:flex-col sm:items-center sm:justify-between">
                <p className="text-mText text-neutral-500">
                  Showing 12 of 600 Results
                </p>
                <div className="flex items-center gap-2">
                  <p className="text-mText text-neutral-500">Sort By :</p>{" "}
                  <DropdownCoursesTwo options={category} />
                </div>
              </div>
              <div className="grid items-center justify-center gap-6 md:grid-cols-2 md:gap-8 xxl:gap-12 ">
                {coursesData
                  .slice(0, 6)
                  ?.map(({ id, ...props }) => (
                    <CoursesCard key={id} {...props} />
                  ))}
              </div>
              <div className="mx-auto mt-10 w-fit">
                <ButtonPagination />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesTwoBody;
