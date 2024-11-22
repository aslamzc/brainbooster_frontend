"use client";
import { Listbox, Transition } from "@headlessui/react";
import { IconChevronDown } from "@tabler/icons-react";
import { Fragment, useState } from "react";
import { v4 as uuidv4 } from "uuid";

type Props = {
  options: { label: string; language: string }[];
  setAnswerLanguage: (language: string) => void;
};

export default function DropdownAnswer({ options, setAnswerLanguage }: Props) {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="z-[300] ">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="relative flex  cursor-pointer items-center justify-start gap-1 focus:outline-none focus-visible:border-indigo-500 ">
            <span className="truncate text-mText font-medium text-neutral-500">
              {selected.label}
            </span>
            <span
              className={`pointer-events-none items-center pr-2 text-neutral-500 `}
            >
              <IconChevronDown size={20} />
            </span>
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
            <Listbox.Options className="absolute mt-1 max-h-60 min-w-[150px] overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {options.map((option) => (
                <Listbox.Option
                  key={uuidv4()}
                  className={({ active }) =>
                    `relative cursor-pointer select-none px-4 py-2 text-neutral-500 ${active ? "bg-primaryColor bg-opacity-40 font-bold" : ""
                    }`
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <>
                      <span
                        onClick={() => setAnswerLanguage(option.language)}
                        className={`block truncate ${selected ? "font-medium" : "font-normal"
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
