import CoursesCard from "@/components/Card/CoursesCard";
import ButtonPagination from "@/components/button/ButtonPagination";
import { StaticImageData } from "next/image";
import { v4 as uuidv4 } from "uuid";
type Course = {
  cardImage: StaticImageData;
  courseType: string;
  courseTitle: string;
  totalLessons: number;
  courseDuration: string;
  instructor: string;
  ratting: number;
};

type Props = {
  courseList: Course[];
};

const AllCourses = ({ courseList }: Props) => {
  return (
    <section className="section-gap-bottom padding-t-60">
      <div className="container">
        <div className="grid items-center justify-center gap-12 md:grid-cols-2 xl:grid-cols-3">
          {courseList?.map(({ ...props }) => (
            <CoursesCard key={uuidv4()} {...props} />
          ))}
        </div>
        <div className="mx-auto mt-10 w-fit">
          <ButtonPagination />
        </div>
      </div>
    </section>
  );
};

export default AllCourses;
