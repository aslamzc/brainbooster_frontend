import ButtonPagination from "@/components/button/ButtonPagination";
import BorderHorizontalN40 from "@/components/customBorder/BorderHorizontalN40";
import Dropdown from "@/components/dropdown/Dropdown";
import H4 from "@/components/sharedComponents/H4";
import SearchBarPrimary from "@/components/sharedComponents/SearchbarPrimary";
import { v4 as uuidv4 } from "uuid";
import { homeFiveMasterCard } from "../../../../../public/data/homeFiveMasterCard";
import HomeSixCourseCard from "../../home-six/HomeSixCourseCard";

const MyWishListBody = () => {
  const category = [
    { label: "Recent" },
    { label: "New" },
    { label: "Popular" },
  ];
  return (
    <div className="padding-all-32 flex flex-col gap-6 rounded-16px bg-white">
      <div className="flex items-center justify-between gap-4 max-md:flex-col md:gap-6">
        <H4>My Wishlist</H4>
        <div className="flex items-center gap-4 max-md:flex-col md:gap-6">
          <SearchBarPrimary />
          <div className="flex items-center gap-2 ">
            <p className="whitespace-nowrap text-mText text-neutral-500">
              Sort By :
            </p>
            <div className="rounded-16px border border-neutral-40 px-4 py-2">
              <Dropdown options={category} />
            </div>
          </div>
        </div>
      </div>

      <BorderHorizontalN40 />

      <div>
        <div className=" grid items-center justify-center gap-6  md:grid-cols-2">
          {homeFiveMasterCard?.map(({ ...props }) => (
            <HomeSixCourseCard key={uuidv4()} {...props} />
          ))}
        </div>
        <div className="padding-t-40 mx-auto w-fit">
          <ButtonPagination />
        </div>
      </div>
    </div>
  );
};

export default MyWishListBody;
