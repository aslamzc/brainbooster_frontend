"use client";
import profileImage from "@/../public/images/student-profile/prifile-image-120.png";
import CheckBoxSecondary from "@/components/button/CheckBoxSecondary";
import RadioButton from "@/components/button/RadioButton";
import BorderHorizontalN40 from "@/components/customBorder/BorderHorizontalN40";
import H4 from "@/components/sharedComponents/H4";
import TextL from "@/components/sharedComponents/TextL";
import Image from "next/image";
import { ChangeEvent, useRef, useState } from "react";
import ButtonOutlineSmall from "./ButtonOutlineSmall";
import ButtonPrimarySmall from "./ButtonPrimarySmall";
import Editor from "./Editor";

const EditProfileSection = () => {
  const [avatar, setAvatar] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files?.[0] as Blob);

    reader.onload = (e) => {
      let img = e.target?.result as string;
      setAvatar(img);
    };
  };

  const handleImageClick = () => {
    // Trigger the hidden file input when the image is clicked
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <div className="padding-all-32 flex flex-col gap-6 rounded-16px border border-neutral-30 bg-white">
      <H4>Edit Profile</H4>
      <BorderHorizontalN40 />
      <div className="flex flex-col gap-4">
        <TextL className="font-medium">Profile Photo</TextL>
        <form className="gap-40px flex items-center max-sm:flex-col">
          <div>
            <input
              type="file"
              ref={inputRef}
              className="hidden"
              onChange={handleChange}
            />
            <div
              className="cursor-pointer rounded-full"
              onClick={handleImageClick}
            >
              <Image
                width={120}
                height={120}
                src={avatar ? avatar : profileImage}
                className="max-h-[120px] max-w-[120px] rounded-full object-cover"
                alt=""
              />
            </div>
          </div>
          <div className="flex items-center gap-6 max-sm:flex-col">
            <ButtonPrimarySmall buttonText="Upload Photo" />

            <button className="theme-transition-3 rounded-32px border border-neutral-700 px-6 py-3 text-base font-semibold capitalize text-neutral-700 hover:border-transparent hover:bg-primaryColor ">
              Cancel
            </button>
          </div>
        </form>
      </div>
      <BorderHorizontalN40 />
      <form className="gap-40px flex flex-col">
        <div className={`flex flex-col gap-6 rounded-lg bg-white `}>
          <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
            <div>
              <label
                className="lText mb-3 block font-medium"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                className="w-full rounded-16px border border-neutral-30 bg-neutral-10 px-8 py-4 focus:outline-none"
                id="firstName"
                type="text"
                placeholder="Kathryn"
              />
            </div>
            <div>
              <label
                className="lText mb-3 block font-medium"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                className="w-full rounded-16px border border-neutral-30 bg-neutral-10 px-8 py-4 focus:outline-none"
                id="lastName"
                type="text"
                placeholder="Murphy"
              />
            </div>
          </div>
          <div>
            <label className="lText mb-3 block font-medium" htmlFor="email">
              Email
            </label>
            <input
              className="w-full rounded-16px border border-neutral-30 bg-neutral-10 px-8 py-4 focus:outline-none"
              id="email"
              type="email"
              placeholder="info@email.com "
            />
          </div>
          <div>
            <label className="lText mb-3 block font-medium" htmlFor="email">
              <span className="lText font-medium text-neutral-500">Phone</span>{" "}
              <span className="font-medium text-neutral-100">(Optional)</span>
            </label>
            <input
              className="w-full rounded-16px border border-neutral-30 bg-neutral-10 px-8 py-4 focus:outline-none"
              id="phone"
              type="number"
              placeholder="+010123338"
            />
          </div>
          <div className="flex flex-col gap-4">
            <TextL className="font-medium">Gender :</TextL>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <RadioButton label="Male" name="gender" />
                <RadioButton label="Female" name="gender" />
                <RadioButton label="Others" name="gender" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <TextL className="font-medium">Tagline :</TextL>
            <Editor placeholder="Write text" />
          </div>
          <div className="flex flex-col gap-4">
            <CheckBoxSecondary label="I agree to the privacy & policy" />
            <CheckBoxSecondary label="I agree with all terms & conditions" />
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

export default EditProfileSection;
