import PayoutInfo from "@/components/pages/instructor-profile/payout/PayoutInfo";
import PayoutList from "@/components/pages/instructor-profile/payout/PayoutList";

const Payout = () => {
  return (
    <div className="flex flex-col gap-6">
      <PayoutInfo />
      <PayoutList />
    </div>
  );
};

export default Payout;
