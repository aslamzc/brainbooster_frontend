import { IconAward, IconCircleCheck, IconVersions } from "@tabler/icons-react";
import { myCoursesTableData } from "../../../../../public/data/myCoursesTableData";
import MyActivity from "./MyActivity";
import MyCourses from "./MyCourses";
import StudentDashboardInfoCard from "./StudentDashboardInfoCard";
const DashBoard = () => {
  return (
    <>
      <div className="grid grid-cols-1 items-center  gap-4 sm:grid-cols-2 lg:grid-cols-3 xxl:gap-6">
        <StudentDashboardInfoCard
          icon={<IconVersions size={48} stroke={1} />}
          number={356}
          text="Total Courses"
        />
        <StudentDashboardInfoCard
          icon={<IconCircleCheck size={48} stroke={1} />}
          number={47}
          text="Total lessons"
        />
        <StudentDashboardInfoCard
          icon={<IconAward size={48} stroke={1} />}
          number={12}
          text="Achieved Certificates"
          className="sm:max-lg:col-span-2 sm:max-lg:mx-auto"
        />
      </div>

      {/* activity chart */}
      <MyActivity />
      {/* my courses */}
      <MyCourses tableContent={myCoursesTableData.slice(0, 6)} />
    </>
  );
};

export default DashBoard;
