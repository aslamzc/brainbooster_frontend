"use client";
import BorderHorizontalN40 from "@/components/customBorder/BorderHorizontalN40";
import { useState } from "react";
import ButtonPrimarySmall from "../student-profile/edit-profile/ButtonPrimarySmall";
import AllFaqs from "./AllFaqs";

const TabFaq = ({}) => {
  const [dropDown, setDropDown] = useState("");

  return (
    <div>
      <AllFaqs />
      <div className="mt-8">
        <form className="flex flex-col gap-6 rounded-lg bg-neutral-20 p-4 sm:p-10">
          <h2 className="h4 font-semibold">Write a Question</h2>
          <BorderHorizontalN40 />
          <div>
            <label className="lText mb-3 block font-medium" htmlFor="name">
              Name
            </label>
            <input
              className="w-full rounded-32px border border-neutral-40 bg-white px-6 py-3 focus:outline-none"
              id="name"
              type="text"
              placeholder="Enter Name..."
            />
          </div>
          <div>
            <label className="lText mb-3 block font-medium" htmlFor="email">
              Email
            </label>
            <input
              className="w-full rounded-32px border border-neutral-40 bg-white px-6 py-3 focus:outline-none"
              id="email"
              type="email"
              placeholder="Enter Email..."
            />
          </div>

          <div>
            <label className="lText mb-3 block font-medium" htmlFor="question">
              Your Question
            </label>
            <textarea
              className="w-full appearance-none rounded-32px border border-neutral-40 bg-white px-6 py-3 leading-tight focus:outline-none"
              id="question"
              rows={8}
              placeholder="Write your question..."
            ></textarea>
          </div>
          <div className="mt-4">
            <ButtonPrimarySmall buttonText="Submit Question" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default TabFaq;
