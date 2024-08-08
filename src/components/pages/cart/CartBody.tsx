"use client";
import ButtonPrimary from "@/components/button/ButtonPrimary";
import BorderHorizontalN40 from "@/components/customBorder/BorderHorizontalN40";
import BorderHorizontalSolidN40 from "@/components/customBorder/BorderHorizontalSolidN40";
import H4 from "@/components/sharedComponents/H4";
import SearchNewsLetter from "@/components/sharedComponents/SearchNewsLetter";
import TextL from "@/components/sharedComponents/TextL";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import CardItem from "./CardItem";

const CartBody = () => {
  const { cartItems } = useSelector((state: RootState) => state.cart.value);
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.productPrice * item.quantity!,
    0,
  );
  return (
    <div className="padding-t-80 padding-b-80 ">
      <div className="container padding-all-32 gap-32px flex flex-col rounded-16px bg-white">
        <div className="bg-neutral-20 padding-all-32 rounded-16px">
          <div className="relative flex flex-col">
            <div className="cart-scrollbar w-full max-xxl:overflow-x-scroll">
              <div className="w-[1000px] xxl:w-[1168px]">
                <div className="grid grid-cols-5 items-center justify-center text-center">
                  <TextL className="font-medium">Product</TextL>
                  <TextL className="font-medium">Price</TextL>
                  <TextL className="font-medium">Quantity</TextL>
                  <TextL className="font-medium">Subtotal</TextL>
                  <TextL className="font-medium">Remove</TextL>
                </div>
                <div className="py-4">
                  <BorderHorizontalSolidN40 />
                </div>

                {cartItems.map(({ ...props }) => (
                  <CardItem key={uuidv4()} {...props} />
                ))}
              </div>
            </div>
            <div className="mt-6 flex items-end justify-between gap-6  max-md:flex-col md:items-center">
              <SearchNewsLetter
                bg="bg-white border border-neutral-30"
                iconShow={false}
                buttonText="Apply Now"
                placeholder="Promo Code"
              />
              <ButtonPrimary button={false} buttonText="Update Cart" />
            </div>
          </div>
        </div>
        <div className="padding-t-32 ">
          <div className="border-neutral-30 bg-neutral-20 padding-all-32 gap-32px ms-auto flex max-w-[352px] flex-col rounded-16px">
            <H4>Cart Total</H4>
            <BorderHorizontalN40 />
            <div className="flex flex-col gap-3">
              <div className="grid grid-cols-2 ">
                <TextL>Subtotal</TextL>
                <TextL className="font-medium">${totalPrice}.00</TextL>
              </div>
              <div className="grid grid-cols-2 ">
                <TextL>Shipping</TextL>
                <TextL className="font-medium">$15</TextL>
              </div>
              <div className="grid grid-cols-2 ">
                <TextL>Total</TextL>
                <TextL className="font-medium">${totalPrice + 15}.00</TextL>
              </div>
            </div>
            <BorderHorizontalN40 />
            <ButtonPrimary
              button={false}
              buttonText="Checkout"
              link="/checkout"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartBody;
