"use client";
import { Listbox, Transition } from "@headlessui/react";
import { IconChevronDown } from "@tabler/icons-react";
import { Fragment, useState } from "react";
import { v4 as uuidv4 } from "uuid";

type Props = {
  options: { label: string }[];
  textColor?: string;
};

export default function Dropdown({
  options,
  textColor = "text-neutral-500",
}: Props) {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="z-[300] max-w-[150px]">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button
            className={`relative flex w-full cursor-pointer items-center justify-between gap-1 focus:outline-none focus-visible:border-indigo-500 ${textColor}`}
          >
            {({ open }) => (
              <>
                <span className={`truncate text-mText font-medium`}>
                  {selected.label}
                </span>

                <span className={` pointer-events-none items-center  `}>
                  <IconChevronDown
                    size={20}
                    className={`theme-transition-4 ${open && " rotate-180"}`}
                  />
                </span>
              </>
            )}
          </Listbox.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-300"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition ease-in duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-10 mt-3 max-h-60 min-w-[150px] -translate-x-12 overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {options.map((option) => (
                <Listbox.Option
                  key={uuidv4()}
                  className={({ active }) =>
                    `relative cursor-pointer select-none px-4 py-2 text-neutral-500 ${
                      active ? "bg-primaryColor bg-opacity-40 font-bold" : ""
                    }`
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {option.label}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
