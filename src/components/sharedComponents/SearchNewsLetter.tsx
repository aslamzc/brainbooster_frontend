import { IconSend } from "@tabler/icons-react";

type Props = {
  placeholder?: string;
  buttonText?: string;
  bg?: string;
  iconShow?: boolean;
};

const SearchNewsLetter = ({
  placeholder = "Enter Your Email...",
  iconShow = true,
  bg = "bg-bgColorOne",
  buttonText = "Send",
}: Props) => {
  return (
    <div
      className={` flex items-center justify-between rounded-full  py-3 pe-3 ps-8  ${bg}`}
    >
      <input
        type="text"
        placeholder={placeholder}
        className={`me-3 w-full bg-inherit   focus:outline-none ${
          bg === "bg-bgColorOne"
            ? "text-white placeholder:text-white"
            : "text-neutral-300 placeholder:text-neutral-300"
        }`}
      />

      <button
        className={` group/button rounded-32px bg-primaryColor px-4 py-2 sm:px-8 sm:py-4 ${
          iconShow && "flex items-center gap-2"
        }`}
      >
        <span className="whitespace-nowrap text-h6 font-semibold">
          {buttonText}
        </span>{" "}
        {iconShow && (
          <IconSend className=" theme-transition-3 group-hover/button:rotate-45" />
        )}
      </button>
    </div>
  );
};

export default SearchNewsLetter;
