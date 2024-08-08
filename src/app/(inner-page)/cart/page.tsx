import NewsLetter from "@/components/pages/about-us/NewsLetter";
import CartBody from "@/components/pages/cart/CartBody";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cart - Education & Online Course With Community",
  description: "Education & Online Course With Community",
};

const Cart = () => {
  return (
    <div className="bg-neutral-20">
      <CartBody />
      <NewsLetter />
    </div>
  );
};

export default Cart;
