"use client";
import { Switch } from "@headlessui/react";
import { useState } from "react";

const ButtonSwitchPrimary = () => {
  const [enabled, setEnabled] = useState(true);
  return (
    <div>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? "bg-primaryColor" : "bg-neutral-20"}
      relative inline-flex h-8 w-60px shrink-0 cursor-pointer rounded-full border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
      >
        <span
          aria-hidden="true"
          className={`${
            enabled
              ? "translate-x-[30px] bg-bgColorOne "
              : "bg-neutral-60 translate-x-1"
          }
        pointer-events-none my-auto inline-block h-[26px] w-[26px] transform rounded-full  shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  );
};

export default ButtonSwitchPrimary;
