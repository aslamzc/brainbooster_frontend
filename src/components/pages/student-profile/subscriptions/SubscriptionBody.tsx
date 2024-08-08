import ButtonSwitchPrimary from "@/components/button/ButtonSwitchPrimary";
import BorderHorizontalN40 from "@/components/customBorder/BorderHorizontalN40";
import H6 from "@/components/sharedComponents/H6";
import TextM from "@/components/sharedComponents/TextM";
import Link from "next/link";
import PlanDescriptionItem from "./PlanDescriptionItem";
import StudentProfileProgressbarWithText from "./StudentProfileProgressbarWithText";
import SubscriptionsInfo from "./SubscriptionsInfo";

const SubscriptionBody = () => {
  return (
    <div className="mg:gap-8 padding-all-40 flex  flex-col gap-6 rounded-16px bg-white">
      <div className="flex flex-wrap items-center justify-between gap-x-10 gap-y-5">
        <SubscriptionsInfo text="Active Plan" title="Basic" />
        <SubscriptionsInfo text="Monthly limit" title="Unlimited" />
        <SubscriptionsInfo text="Cost" title="$99/Month" />
        <SubscriptionsInfo text="Renewal Date" title="Dec 17, 2023" />
      </div>
      <BorderHorizontalN40 />
      <StudentProfileProgressbarWithText text="The Used Plan" width={90} />
      <BorderHorizontalN40 />
      <div className="flex items-center gap-6 max-lg:flex-col lg:gap-10 xxl:gap-60px">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <ButtonSwitchPrimary /> <H6>Auto Renewal</H6>
          </div>
          <TextM>
            Your plan will automatically renew on: 02/10/2023. Payment Amount:
            USD250
          </TextM>
        </div>
        <div className="flex items-center gap-4 max-[350px]:flex-col min-[350px]:gap-6">
          <Link
            href="#"
            className="theme-transition-3 flex items-center justify-center gap-2 whitespace-nowrap rounded-32px border border-neutral-700 px-5 py-3 text-base font-semibold text-neutral-700 hover:border-transparent hover:bg-primaryColor lg:px-6 lg:py-3"
          >
            Cancel Plan
          </Link>
          <Link
            href={`${"/"}`}
            className="theme-transition-3 flex w-fit items-center justify-center gap-2 whitespace-nowrap rounded-32px bg-primaryColor px-5 py-3 text-base font-semibold capitalize text-neutral-700 shadow-five hover:bg-bgColorTwo hover:text-white hover:shadow-five-theme lg:px-6 lg:py-3 "
          >
            Upgrade Plan
          </Link>
        </div>
      </div>
      <BorderHorizontalN40 />
      <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 xl:grid-cols-3">
        <PlanDescriptionItem text="Up to 05 users monthly" />
        <PlanDescriptionItem text="Custom infrastructure" />
        <PlanDescriptionItem text="24/7 dedicated Support" />
        <PlanDescriptionItem text="Free 5 host & domain" />
        <PlanDescriptionItem text="Access to all our room" />
        <PlanDescriptionItem text="Unlimited updates" />
      </div>
    </div>
  );
};

export default SubscriptionBody;
