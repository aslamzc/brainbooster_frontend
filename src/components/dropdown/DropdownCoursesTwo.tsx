"use client";
import { Listbox, Transition } from "@headlessui/react";
import { IconChevronDown } from "@tabler/icons-react";
import { Fragment, useState } from "react";
import { v4 as uuidv4 } from "uuid";

type Props = {
  options: { label: string }[];
};

export default function DropdownCoursesTwo({ options }: Props) {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="rounded-32px border border-neutral-40 px-5 py-2">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="relative flex w-full cursor-pointer items-center justify-between gap-1 focus:outline-none  ">
            <span className="block truncate font-medium text-neutral-700">
              {selected.label}
            </span>
            <span
              className={`pointer-events-none block items-center pr-2 text-neutral-500 `}
            >
              <IconChevronDown size={20} />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="theme-transition-3 absolute -right-8 z-20 mt-3 max-h-60 w-full min-w-[150px] overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {options.map((option) => (
                <Listbox.Option
                  key={uuidv4()}
                  className={({ active }) =>
                    `theme-transition-3 relative cursor-pointer select-none px-4 py-2 text-neutral-500 ${
                      active ? "bg-primaryColor bg-opacity-20 font-bold" : ""
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
