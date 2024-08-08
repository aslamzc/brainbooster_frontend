import BorderHorizontal from "@/components/customBorder/BorderHorizontal";
import DropdownOne from "@/components/dropdown/DropdownOne";
import H4 from "@/components/sharedComponents/H4";
import { countries } from "../../../../../public/data/allCountryName";
import ButtonOutlineSmall from "./ButtonOutlineSmall";
import ButtonPrimarySmall from "./ButtonPrimarySmall";

const AddressSetting = () => {
  return (
    <div className="padding-all-32 flex flex-col gap-6 rounded-16px border border-neutral-30 bg-white">
      <H4 className="font-semibold text-neutral-500">Address</H4>
      <BorderHorizontal />
      <form className="gap-40px flex flex-col">
        <div className={`flex flex-col gap-6 rounded-lg bg-white `}>
          <div>
            <label className="lText mb-3 block font-medium" htmlFor="firstName">
              Location
            </label>
            <div className="w-full rounded-16px border border-neutral-30 bg-neutral-10  focus:outline-none">
              <DropdownOne isLabel dropDownItems={countries} />
            </div>
          </div>
          <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
            <div>
              <label
                className="lText mb-3 block font-medium"
                htmlFor="addressOne"
              >
                Address 1
              </label>
              <input
                className="w-full rounded-16px border border-neutral-30 bg-neutral-10 px-8 py-4 focus:outline-none"
                id="addressOne"
                type="text"
                placeholder="Enter Address"
              />
            </div>
            <div>
              <label
                className="lText mb-3 block font-medium"
                htmlFor="addressTwo"
              >
                Address 2
              </label>
              <input
                className="w-full rounded-16px border border-neutral-30 bg-neutral-10 px-8 py-4 focus:outline-none"
                id="addressTwo"
                type="text"
                placeholder="Enter Address"
              />
            </div>
          </div>
          <div>
            <label
              className="lText mb-3 block font-medium"
              htmlFor="addressOne"
            >
              <span className="lText font-medium text-neutral-500">
                Zip Code
              </span>
            </label>
            <input
              className="w-full rounded-16px border border-neutral-30 bg-neutral-10 px-8 py-4 focus:outline-none"
              id="text"
              type="text"
              placeholder="Enter Code"
            />
          </div>
        </div>
        <div className="flex items-center gap-6 max-[400px]:flex-col">
          <ButtonPrimarySmall buttonText="Save Change" />{" "}
          <ButtonOutlineSmall buttonText="Cancel" />
        </div>
      </form>
    </div>
  );
};

export default AddressSetting;
