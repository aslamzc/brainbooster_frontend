"use client";
import CheckBoxWhiteDot from "@/components/button/CheckBoxWhiteDot";
import BorderHorizontalN40 from "@/components/customBorder/BorderHorizontalN40";
import H4 from "@/components/sharedComponents/H4";
import TextXL from "@/components/sharedComponents/TextXL";
import { ChangeEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const PaymentMethod = () => {
  const [cvc, setCvc] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Remove non-numeric characters
    const newValue = e.target.value.replace(/\D/g, "");

    // Check if the input value is within the allowed range
    if (newValue.length <= 3) {
      setCvc(newValue);
    }
  };

  return (
    <div className="padding-all-32 flex flex-col gap-6 rounded-16px bg-white">
      <div className="flex flex-col gap-6">
        <H4>Payment methods</H4>
        {/* check box start  */}

        <div className="flex gap-6 max-sm:flex-col sm:items-center">
          <div className="flex items-center gap-2 sm:justify-center">
            <div>
              <CheckBoxWhiteDot id={uuidv4()} />
            </div>
            <TextXL>Credit card</TextXL>
          </div>
          <div className="flex items-center gap-2 sm:justify-center">
            <div>
              <CheckBoxWhiteDot id={uuidv4()} />
            </div>
            <TextXL>Debit card</TextXL>
          </div>
          <div className="flex items-center gap-2 sm:justify-center">
            <div>
              <CheckBoxWhiteDot id={uuidv4()} />
            </div>
            <TextXL>PayPal</TextXL>
          </div>
        </div>
        {/* check box end */}
        <BorderHorizontalN40 />
        <div className="flex flex-col gap-6">
          <form className={`flex flex-col gap-6 rounded-lg bg-white `}>
            <div>
              <label className="lText mb-3 block font-medium" htmlFor="name">
                Card number
              </label>
              <input
                className="w-full rounded-32px border border-neutral-40 bg-neutral-20 px-6 py-3 focus:outline-none"
                id="number"
                type="number"
                placeholder="2456 1665 5155 5151"
              />
            </div>
            <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
              <div>
                <label className="lText mb-3 block font-medium" htmlFor="name">
                  Expiry date
                </label>
                <input
                  className="w-full rounded-32px border border-neutral-40 bg-neutral-20 px-6 py-3 focus:outline-none"
                  id="date"
                  type="date"
                  placeholder="DD/MM/YY"
                />
              </div>
              <div>
                <label className="lText mb-3 block font-medium" htmlFor="name">
                  CVC / CVV
                </label>
                <input
                  className="w-full rounded-32px border border-neutral-40 bg-neutral-20 px-6 py-3 focus:outline-none"
                  id="3Digit"
                  type="number"
                  value={cvc}
                  onChange={handleChange}
                  maxLength={3}
                  placeholder="3 digits"
                />
              </div>
            </div>
            <div>
              <label className="lText mb-3 block font-medium" htmlFor="name">
                Name on card
              </label>
              <input
                className="w-full rounded-32px border border-neutral-40 bg-neutral-20 px-6 py-3 focus:outline-none"
                id="name"
                type="text"
                placeholder="Jab Archur"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
