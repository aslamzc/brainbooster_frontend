"use client";
import BorderHorizontalN40 from "@/components/customBorder/BorderHorizontalN40";
import H4 from "@/components/sharedComponents/H4";
import TextL from "@/components/sharedComponents/TextL";
import { useState } from "react";
import ButtonOutlineSmall from "./ButtonOutlineSmall";
import ButtonPrimarySmall from "./ButtonPrimarySmall";
import PasswordMustContain from "./PasswordMustContain";
import SinglePasswordField from "./SinglePasswordField";

const ChangePassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="border-neutral-30 padding-all-32 flex flex-col gap-6 rounded-16px border bg-white">
      <H4>Linked account</H4>
      <BorderHorizontalN40 />
      <form className="gap-40px flex flex-col">
        <div className={`flex flex-col gap-6 rounded-lg bg-white `}>
          <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
            <SinglePasswordField id="oldPassword" fieldName="Old Password" />
            <SinglePasswordField id="newPassword" fieldName="New Password" />
          </div>
          <SinglePasswordField
            id="confirmPassword"
            fieldName="Confirm Password"
          />
        </div>
        <div>
          <TextL className="font-medium text-neutral-500">
            New password must contain :
          </TextL>
          <ul className="flex flex-col gap-3 pt-4">
            <PasswordMustContain text="At least 8 characters" />
            <PasswordMustContain text="At least 1 lower letter (a-z)" />
            <PasswordMustContain text="At least 1 uppercase letter(A-Z)" />
            <PasswordMustContain text="At least 1 number (0-9)" />
            <PasswordMustContain text="At least 1 special characters" />
          </ul>
        </div>
        <div className="flex items-center gap-6 max-[400px]:flex-col">
          <ButtonPrimarySmall buttonText="Save Change" />{" "}
          <ButtonOutlineSmall buttonText="Cancel" />
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
