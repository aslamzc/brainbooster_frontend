"use client";
import ButtonPagination from "@/components/button/ButtonPagination";
import BorderHorizontalN40 from "@/components/customBorder/BorderHorizontalN40";
import Dropdown from "@/components/dropdown/Dropdown";
import H4 from "@/components/sharedComponents/H4";
import SearchBarTablePrimary from "@/components/sharedComponents/SearchBarTablePrimary";
import TextM from "@/components/sharedComponents/TextM";
import { StaticImageData } from "next/image";
import { useState } from "react";
import { instructorMyCoursesData } from "../../../../../public/data/instructorMyCoursesData";
import InstructorMyCoursesTable from "./InstructorMyCoursesTable";
type Props = {
  id: string;
  image: StaticImageData;
  title: string;
  courseInstructor: string;
  enrolled: number;
  price: number;
  status: string;
}[];

const InstructorMyCourses = ({ tableContent }: { tableContent: Props }) => {
  const category = [
    { label: "All" },
    { label: "Weekly" },
    { label: "Monthly" },
  ];

  const [tableData, setTableData] = useState<Props>(instructorMyCoursesData);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase();
    const result = tableContent.filter((item) =>
      item.title.toLowerCase().includes(searchTerm),
    );
    setTableData(result);
  };
  return (
    <div className="padding-all-32 flex flex-col gap-6 rounded-16px bg-white">
      <div className="flex items-center justify-between gap-4 max-md:flex-col md:gap-6">
        <H4>Most Selling Courses</H4>
        <div className="flex items-center gap-4 max-md:flex-col md:gap-6">
          <SearchBarTablePrimary handleSearch={handleSearch} />
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

      {/* table contents start */}
      <InstructorMyCoursesTable tableData={tableData} />
      {/* table contents end */}
      {tableData.length > 0 && (
        <>
          <div>
            <BorderHorizontalN40 />
          </div>
          <div className="flex items-center justify-between gap-4 max-md:flex-col sm:gap-6">
            <TextM>Showing 1 to 6 of 50 entries</TextM> <ButtonPagination />
          </div>
        </>
      )}
    </div>
  );
};
export default InstructorMyCourses;
