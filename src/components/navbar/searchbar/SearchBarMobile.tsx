"use client";
import ButtonRounded from "@/components/button/ButtonRounded";
import Dropdown from "@/components/dropdown/Dropdown";
import { IconX } from "@tabler/icons-react";
import { useState } from "react";

const SearchBarMobile = () => {
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  const category = [
    { label: "Category" },
    { label: "Arlene Mccoy" },
    { label: "Devon Webb" },
    { label: "Tom Cook" },
    { label: "Tanya Fox" },
    { label: "Hellen Schmidt" },
  ];
  return (
    <div className="z-[3000] lg:hidden">
      <div onClick={() => setSearchModalOpen(!searchModalOpen)}>
        <ButtonRounded iconName="Search" />
      </div>
      <div
        className={` absolute left-0 top-0 z-50 w-full bg-primaryColor opacity-100 transition-all duration-700 ${
          searchModalOpen ? "translate-y-0 " : "-z-10 -translate-y-40 opacity-0"
        }`}
      >
        <div className="flex min-w-full items-center justify-between gap-6 px-4 py-3 max-sm:flex-col-reverse">
          <Dropdown options={category} />
          <div className="items-center gap-2 max-sm:flex">
            <div className=" border-neutral-40 flex w-full items-center justify-between rounded-60px border bg-white py-2 pe-2 ps-5 ">
              <input
                type="text"
                placeholder="Search"
                className="me-3 w-full placeholder:text-neutral-300 focus:outline-none"
              />

              <ButtonRounded iconName="Search" />
            </div>
            <div>
              <div
                className="rounded-full bg-bgColorTwo p-2  text-primaryColor sm:hidden"
                onClick={() => setSearchModalOpen(!searchModalOpen)}
              >
                <IconX size={30} />
              </div>
            </div>
          </div>
          <div
            className=" rounded-full bg-bgColorTwo p-2  text-primaryColor max-sm:hidden"
            onClick={() => setSearchModalOpen(!searchModalOpen)}
          >
            <IconX size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBarMobile;
