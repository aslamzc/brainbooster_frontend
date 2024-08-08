import { IconSearch } from "@tabler/icons-react";
import { StaticImageData } from "next/image";
import InstructorMyCoursesTableRow from "./InstructorMyCoursesTableRow";

type Props = {
  id: string;
  image: StaticImageData;
  title: string;
  courseInstructor: string;
  enrolled: number;
  price: number;
  status: string;
}[];

const InstructorMyCoursesTable = ({ tableData }: { tableData: Props }) => {
  return (
    <div className="my-courses-table overflow-x-auto overflow-y-hidden">
      <table className="w-full table-auto whitespace-nowrap">
        <thead>
          <tr className="bg-neutral-20">
            <th className="px-6 py-5 text-start text-mText font-semibold text-neutral-500">
              Courses Title
            </th>
            <th className="px-6 py-5 text-start text-mText font-semibold text-neutral-500">
              Enrolled
            </th>
            <th className="px-6 py-5 text-start text-mText font-semibold text-neutral-500">
              Status
            </th>
            <th className="px-6 py-5 text-start text-mText font-semibold text-neutral-500">
              Price
            </th>
            <th className="px-6 py-5 text-start text-mText font-semibold text-neutral-500">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData.map(({ id, ...props }, index) => (
            <InstructorMyCoursesTableRow
              key={id}
              {...props}
              index={index}
              length={tableData.length}
            />
          ))}
        </tbody>
      </table>
      {tableData.length < 1 && (
        <div className="py-10 text-center">
          <div className="mx-auto max-w-[500px] flex-col items-center text-center max-md:flex">
            <div className="mx-auto mb-5 w-fit px-5 text-secondaryColor lg:px-14 xl:px-24">
              <IconSearch className="text-primary" size={72} />
            </div>
            <h3 className="h3 mb-3 lg:mb-6">No matching results</h3>
            <p>
              Looks like we couldn&nbsp;t find any matching results for your
              search terms. Try other search terms.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default InstructorMyCoursesTable;
