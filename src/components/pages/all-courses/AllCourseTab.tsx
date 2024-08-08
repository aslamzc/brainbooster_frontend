import CoursesCard from "@/components/Card/CoursesCard";
import ButtonPagination from "@/components/button/ButtonPagination";
import ButtonTag from "@/components/button/ButtonTag";
import SearchBarPrimary from "@/components/sharedComponents/SearchbarPrimary";
import { coursesData } from "../../../../public/data/coursesData";

const AllCourseTab = () => {
  return (
    <>
      <div className="padding-t-60 flex items-center justify-center gap-6 pb-10 max-lg:flex-wrap lg:justify-between">
        <div>
          <SearchBarPrimary placeholder="Search Courses" />
        </div>
        <div className="flex items-center justify-between gap-4 max-sm:flex-wrap">
          <ButtonTag tagText="UI/UX Design" />
          <ButtonTag tagText="AI" />
          <ButtonTag tagText="UX" />
          <ButtonTag tagText="More+" />
        </div>
      </div>
      {/* Course card start */}
      <div className="grid items-center justify-center gap-6 md:grid-cols-2 md:gap-8 xl:grid-cols-3 xxl:gap-12 ">
        {coursesData
          .slice(0, 6)
          ?.map(({ id, ...props }) => <CoursesCard key={id} {...props} />)}
      </div>
      <div className="mx-auto mt-10 w-fit">
        <ButtonPagination />
      </div>
      {/* Course card end */}
    </>
  );
};

export default AllCourseTab;
