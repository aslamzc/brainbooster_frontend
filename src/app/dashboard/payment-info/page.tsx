import BillingAddress from "@/components/pages/checkout/BillingAddress";
import PaymentMethod from "@/components/pages/checkout/PaymentMethod";
import BillingHistory from "@/components/pages/student-profile/payment-info/BillingHistory";

const PaymentInfo = () => {
  return (
    <>
      <PaymentMethod />
      <BillingAddress />
      <BillingHistory />
    </>
  );
};

export default PaymentInfo;
