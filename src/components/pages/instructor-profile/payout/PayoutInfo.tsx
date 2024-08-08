import {
  IconChartHistogram,
  IconChartInfographic,
  IconPigMoney,
} from "@tabler/icons-react";
import PayoutInfoCard from "./PayoutInfoCard";

const PayoutInfo = () => {
  return (
    <div className="grid grid-cols-1 items-center  gap-4 md:grid-cols-2 lg:grid-cols-3 xxl:gap-6">
      <PayoutInfoCard
        icon={<IconChartHistogram size={40} />}
        title="4882.65"
        text="Last month payout"
        progress={90.7}
        link="#"
      />
      <PayoutInfoCard
        icon={<IconChartInfographic size={40} />}
        title="899.95"
        text="This month earning"
        progress={70.7}
        link="#"
      />
      <PayoutInfoCard
        icon={<IconPigMoney size={40} />}
        title="750.35"
        text="Current Balance"
        progress={88.7}
        className="md:max-lg:col-span-2"
        link="#"
      />
    </div>
  );
};

export default PayoutInfo;
