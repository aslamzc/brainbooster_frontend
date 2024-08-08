import AverageSelling from "@/components/pages/instructor-profile/dashboard/AverageSelling";
import InstructorDashboardInfo from "@/components/pages/instructor-profile/dashboard/InstructorDashboard";
import MostSellingCourses from "@/components/pages/instructor-profile/dashboard/MostSellingCourses";
import { mostSellingCoursesData } from "../../../../public/data/mostSellingCoursesData";

const DashboardPage = () => {
  return (
    <div className="flex flex-col gap-6">
      <InstructorDashboardInfo />
      <AverageSelling />
      <MostSellingCourses tableContent={mostSellingCoursesData} />
    </div>
  );
};

export default DashboardPage;
