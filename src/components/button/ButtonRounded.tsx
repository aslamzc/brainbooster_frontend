import { IconArrowUpRight, IconSearch, IconSend } from "@tabler/icons-react";

type Props = {
  iconName?: "Search" | "Arrow Up Right" | "Send";
};

const ButtonRounded = ({ iconName = "Arrow Up Right" }: Props) => {
  return (
    <>
      <button className="group theme-transition-3 flex items-center justify-center rounded-[22px] bg-primaryColor p-3 font-semibold text-neutral-700 shadow-four hover:bg-bgColorOne hover:shadow-four-theme ">
        {iconName === "Arrow Up Right" && (
          <span className="theme-transition-3 group-hover:text-white">
            <IconArrowUpRight size={20} />
          </span>
        )}
        {iconName === "Search" && (
          <span className="theme-transition-3 group-hover:text-white">
            <IconSearch size={20} />
          </span>
        )}
        {iconName === "Send" && (
          <span className="theme-transition-3 group-hover:text-white">
            <IconSend size={20} />
          </span>
        )}
      </button>
    </>
  );
};

export default ButtonRounded;
