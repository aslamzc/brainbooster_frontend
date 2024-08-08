import ButtonPagination from "@/components/button/ButtonPagination";
import BorderHorizontalN40 from "@/components/customBorder/BorderHorizontalN40";
import DropdownCoursesTwo from "@/components/dropdown/DropdownCoursesTwo";
import { memberData } from "../../../../../public/data/memberData";
import SingleMember from "./SingleMember";

const Member = () => {
  const category = [
    { label: "Newest" },
    { label: "Popular" },
    { label: "Best Sell" },
  ];

  return (
    <div className="padding-all-32 flex flex-col gap-6 rounded-16px bg-white">
      <div className="flex items-center justify-between gap-6 max-sm:flex-col  ">
        <p className="h4">All Members</p>
        <div className="flex items-center gap-2">
          <p className="text-mText text-neutral-500">Sort By :</p>{" "}
          <DropdownCoursesTwo options={category} />
        </div>
      </div>
      <BorderHorizontalN40 />
      <div className="flex flex-col gap-6">
        {memberData.map(({ id, ...props }) => (
          <SingleMember key={id} {...props} />
        ))}
      </div>

      <div className="mx-auto">
        <ButtonPagination />
      </div>
    </div>
  );
};

export default Member;
