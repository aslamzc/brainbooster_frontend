import {
  IconChartHistogram,
  IconChartInfographic,
  IconChartPie,
} from "@tabler/icons-react";
import InstructorProfileEarningInfoCard from "./InstructorProfileEarningInfoCard";

const InstructorProfileEarningInfo = () => {
  return (
    <div className="grid grid-cols-1 items-center  gap-4 md:grid-cols-2 lg:grid-cols-3 xxl:gap-6">
      <InstructorProfileEarningInfoCard
        icon={<IconChartHistogram size={40} />}
        title="4882.65"
        text="Lifetime Earnings"
        progress={90.7}
        progressFrom="Since last years"
      />
      <InstructorProfileEarningInfoCard
        icon={<IconChartInfographic size={40} />}
        title="899.95"
        text="Sales this month"
        progress={70.7}
        progressFrom="Since last month"
      />
      <InstructorProfileEarningInfoCard
        icon={<IconChartPie size={40} />}
        title="750.35"
        text="To be paid"
        progress={88.7}
        progressFrom="Since last years"
        className="md:max-lg:col-span-2"
      />
    </div>
  );
};

export default InstructorProfileEarningInfo;
