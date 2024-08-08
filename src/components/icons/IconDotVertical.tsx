import { IconDotsVertical } from "@tabler/icons-react";

type Props = {
  buttonModalAction: () => void;
  hiddenDeviceFrom: "sm" | "md" | "lg" | "xl" | "xxl";
};

const IconDotVertical = ({ buttonModalAction, hiddenDeviceFrom }: Props) => {
  return (
    <button
      className={`block cursor-pointer rounded-full bg-bgColorTwo p-2 text-white focus-visible:outline-none ${
        hiddenDeviceFrom === "sm" && "sm:hidden"
      } ${hiddenDeviceFrom === "md" && "md:hidden"} 
      ${hiddenDeviceFrom === "lg" && "lg:hidden"} ${
        hiddenDeviceFrom === "xl" && "xl:hidden"
      } ${hiddenDeviceFrom === "xxl" && "xxl:hidden"}`}
      onClick={buttonModalAction}
    >
      <IconDotsVertical />
    </button>
  );
};

export default IconDotVertical;
