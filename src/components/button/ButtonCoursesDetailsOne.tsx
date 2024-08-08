import React from "react";

type Props = {
  buttonName: string;
  icon: React.ReactNode;
  setTabButtonText: React.Dispatch<React.SetStateAction<string>>;
  tabButtonText: string;
};

const ButtonCoursesDetailsOne = ({
  buttonName,
  icon,
  tabButtonText,
  setTabButtonText,
}: Props) => {
  return (
    <button
      className={`h5 theme-transition-3 flex w-full items-center justify-center gap-3 px-5 py-4 font-semibold hover:bg-neutral-20 hover:shadow-five ${
        buttonName === tabButtonText
          ? "bg-neutral-20 shadow-five"
          : "bg-white first:rounded-bl-16px first:rounded-tl-16px last:rounded-br-16px last:rounded-tr-16px"
      }`}
      onClick={() => setTabButtonText(buttonName)}
    >
      <span className="shrink-0">{icon}</span>
      <span className="shrink-0">{buttonName}</span>
    </button>
  );
};

export default ButtonCoursesDetailsOne;
