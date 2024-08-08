import CheckBoxSecondary from "@/components/button/CheckBoxSecondary";
import BorderHorizontalN40 from "@/components/customBorder/BorderHorizontalN40";
import H4 from "@/components/sharedComponents/H4";
import TextXL from "@/components/sharedComponents/TextXL";
import Link from "next/link";
import ButtonOutlineSmall from "../edit-profile/ButtonOutlineSmall";
import ButtonPrimarySmall from "../edit-profile/ButtonPrimarySmall";

const DeleteProfileSection = () => {
  return (
    <div className="padding-all-32 rounded-16px bg-white">
      <div className="flex flex-col gap-6 ">
        <H4>Deactivate Account</H4>
        <BorderHorizontalN40 />
        <div>
          <TextXL className="text-neutral-500">Before you go...</TextXL>
          <ul className="flex flex-col gap-2 pt-4">
            <li className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-secondaryColorTwo"></span>{" "}
              <span className="text-sText text-neutral-500">
                Take a backup of your data{" "}
                <Link href="#" className="font-semibold text-secondaryColorTwo">
                  Here
                </Link>
              </span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-secondaryColorTwo"></span>{" "}
              <span className="text-sText text-neutral-500">
                If you delete your account, you will lose your all data.
              </span>
            </li>
          </ul>
        </div>
        <div className="-ms-3">
          <CheckBoxSecondary label="Yes, I'd like to delete my account" />
        </div>
      </div>
      <div className="padding-t-40 flex items-center gap-6 max-sm:flex-col max-sm:gap-4">
        <ButtonPrimarySmall buttonText="Delete my account" />{" "}
        <ButtonOutlineSmall buttonText="Keep my account" />
      </div>
    </div>
  );
};

export default DeleteProfileSection;
