"use client";
import ButtonPrimaryFullWidth from "@/components/button/ButtonPrimaryFullWidth";
import BorderHorizontalN40 from "@/components/customBorder/BorderHorizontalN40";
import H4 from "@/components/sharedComponents/H4";
import SearchNewsLetter from "@/components/sharedComponents/SearchNewsLetter";
import TextL from "@/components/sharedComponents/TextL";
import TextS from "@/components/sharedComponents/TextS";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import BillingAddress from "./BillingAddress";
import PaymentMethod from "./PaymentMethod";

const CheckoutBody = () => {
  const { cartItems } = useSelector((state: RootState) => state.cart.value);
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.productPrice * item.quantity!,
    0,
  );
  return (
    <div className="padding-t-80 padding-b-80">
      <div className="container grid-cols-12 gap-6 xl:grid">
        <div className="col-start-1 col-end-9 flex flex-col gap-6">
          {/* billing address start */}
          <BillingAddress />
          {/* billing address end */}
          {/* payment start */}
          <PaymentMethod />
          {/* payment end */}
        </div>
        <div className=" col-start-9 col-end-13 ">
          <div className="sticky top-32 flex flex-col gap-6">
            <div className="padding-all-32 flex flex-col gap-6 rounded-16px bg-white">
              <H4>Enter Promo Code</H4>
              <div className="flex flex-col gap-4">
                <SearchNewsLetter
                  bg="bg-white border border-neutral-30"
                  iconShow={false}
                  buttonText="Apply Now"
                  placeholder="Promo Code"
                />
                <TextS>20% Off Discount</TextS>
              </div>
            </div>
            <div className="padding-all-32 gap-32px flex flex-col gap-6 rounded-16px bg-white">
              <H4>Order Summary</H4>
              <BorderHorizontalN40 />
              <div className="flex flex-col gap-3 ">
                <div className="grid grid-cols-2 ">
                  <TextL>Subtotal</TextL>
                  <TextL className="text-end font-medium">
                    ${totalPrice}.00
                  </TextL>
                </div>
                <div className="grid grid-cols-2 ">
                  <TextL>Shipping</TextL>
                  <TextL className="text-end font-medium">$15</TextL>
                </div>
                <div className="grid grid-cols-2 ">
                  <TextL>Promo Code</TextL>
                  <TextL className="text-end font-medium">20% OFF</TextL>
                </div>
              </div>
              <BorderHorizontalN40 />
              <div className="grid grid-cols-2 ">
                <TextL>Payable Now</TextL>
                <TextL className="text-end font-medium">
                  ${totalPrice - totalPrice * 0.2 + 15}
                </TextL>
              </div>
              <ButtonPrimaryFullWidth button={false} buttonText="Payment" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutBody;
