import {
  IconStars,
  IconUsers,
  IconUsersGroup,
  IconVersions,
} from "@tabler/icons-react";
import InstructorDashboardInfoCard from "./InstructorDashboardInfoCard";

const InstructorDashboardInfo = () => {
  return (
    <div className="grid grid-cols-1 items-center  gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xxl:gap-6">
      <InstructorDashboardInfoCard
        icon={<IconVersions size={40} />}
        title="56+"
        text="Total Courses"
      />
      <InstructorDashboardInfoCard
        icon={<IconUsers size={40} />}
        title="25K+"
        text="Total Students"
      />
      <InstructorDashboardInfoCard
        icon={<IconUsersGroup size={40} />}
        title="12K"
        text="Enrolled Students"
      />
      <InstructorDashboardInfoCard
        icon={<IconStars size={40} />}
        title="4.8"
        text="Total Reviews"
        className="w-full md:max-lg:col-span-3 md:max-lg:mx-auto"
      />
    </div>
  );
};

export default InstructorDashboardInfo;
