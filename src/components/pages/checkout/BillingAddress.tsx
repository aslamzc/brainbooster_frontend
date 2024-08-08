"use client";
import BorderHorizontalN40 from "@/components/customBorder/BorderHorizontalN40";
import DropdownOne from "@/components/dropdown/DropdownOne";
import H4 from "@/components/sharedComponents/H4";
import TextM from "@/components/sharedComponents/TextM";
import { countries } from "../../../../public/data/allCountryName";

const BillingAddress = () => {
  return (
    <div className="padding-all-32 flex flex-col gap-6 rounded-16px bg-white">
      <div className="flex flex-col gap-3">
        <H4>Billing address</H4>
        <div className="flex justify-between gap-3 max-sm:flex-col sm:items-center sm:gap-6">
          <TextM>
            Transaction ID: <span className="font-medium"> 25246584</span>{" "}
          </TextM>{" "}
          <div className="flex items-center gap-1">
            <TextM>Total Payable Amount: </TextM>{" "}
            <TextM className="font-semibold">$1115</TextM>
          </div>
        </div>
      </div>
      <BorderHorizontalN40 />
      <div className="flex flex-col gap-6">
        <form className={`flex flex-col gap-6 rounded-lg bg-white `}>
          <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
            <div>
              <input
                className="w-full rounded-32px border border-neutral-40 bg-neutral-20 px-6 py-3 focus:outline-none"
                id="name"
                type="text"
                placeholder="Enter Name..."
              />
            </div>
            <div>
              <input
                className="w-full rounded-32px border border-neutral-40 bg-neutral-20 px-6 py-3 focus:outline-none"
                id="email"
                type="email"
                placeholder="Enter Email..."
              />
            </div>
          </div>
          <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
            <div>
              <input
                className="w-full rounded-32px border border-neutral-40 bg-neutral-20 px-6 py-3 focus:outline-none"
                id="number"
                type="number"
                placeholder="Enter Your Number..."
              />
            </div>
            <div>
              <div className="w-full rounded-32px border border-neutral-40 bg-neutral-20  focus:outline-none">
                <DropdownOne isLabel dropDownItems={countries} />
              </div>
            </div>
          </div>
          <div>
            <textarea
              className="w-full appearance-none rounded-32px border border-neutral-40 bg-neutral-20 px-6 py-3 leading-tight focus:outline-none"
              id="question"
              rows={8}
              placeholder="Enter Address"
            ></textarea>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BillingAddress;
