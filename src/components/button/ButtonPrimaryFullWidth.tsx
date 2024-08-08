import { IconArrowUpRight } from "@tabler/icons-react";
import Link from "next/link";

const ButtonPrimaryFullWidth = ({
  buttonText,
  button,
  link,
}: {
  buttonText: string;
  button: boolean;
  link?: string;
}) => {
  return (
    <div>
      <Link
        href={`${link}`}
        className="group/button theme-transition-3 flex w-full items-center justify-center gap-2 rounded-32px bg-primaryColor px-5 py-3 text-base font-semibold text-neutral-700 shadow-five hover:bg-bgColorOne hover:text-white hover:shadow-five-theme lg:px-8 lg:py-4 "
      >
        <span>{buttonText}</span>{" "}
        {button && (
          <IconArrowUpRight
            size={24}
            className="theme-transition-3 group-hover/button:rotate-45"
          />
        )}
      </Link>
    </div>
  );
};

export default ButtonPrimaryFullWidth;
