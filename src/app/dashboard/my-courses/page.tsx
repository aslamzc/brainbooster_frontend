import MyCourses from "@/components/pages/student-profile/dashboard/MyCourses";
import { myCoursesTableData } from "../../../../public/data/myCoursesTableData";

const MyCoursesPage = () => {
  return (
    <>
      <MyCourses tableContent={myCoursesTableData} />
    </>
  );
};

export default MyCoursesPage;
