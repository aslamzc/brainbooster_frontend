import NewsLetter from "@/components/pages/about-us/NewsLetter";
import CheckoutBody from "@/components/pages/checkout/CheckoutBody";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout - Education & Online Course With Community",
  description: "Education & Online Course With Community",
};

const Checkout = () => {
  return (
    <div className="bg-neutral-20">
      <CheckoutBody />
      <NewsLetter />
    </div>
  );
};

export default Checkout;
