import AverageSelling from "@/components/pages/instructor-profile/dashboard/AverageSelling";
import InstructorProfileEarningInfo from "@/components/pages/instructor-profile/earnings/InstructorProfileEarningInfo";
import TopEarningSources from "@/components/pages/instructor-profile/earnings/TopEarningSources";

const earnings = () => {
  return (
    <div className="flex flex-col gap-6">
      <InstructorProfileEarningInfo />
      <AverageSelling />
      <TopEarningSources />
    </div>
  );
};

export default earnings;
