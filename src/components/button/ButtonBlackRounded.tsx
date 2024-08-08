import { IconSend } from "@tabler/icons-react";

const ButtonBlackRounded = () => {
  return (
    <div className="rounded-full bg-primaryColor p-1">
      <button className="customerSliderNext group/button theme-transition-4 flex items-center justify-center rounded-full  bg-bgColorOne p-3 font-semibold text-primaryColor hover:text-white ">
        <IconSend
          size={36}
          className="theme-transition-3 group-hover/button:rotate-45"
        />
      </button>
    </div>
  );
};

export default ButtonBlackRounded;
