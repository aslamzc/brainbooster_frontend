import { IconArrowUpRight } from "@tabler/icons-react";
import Link from "next/link";

const ButtonUnderLine = ({
  buttonText,
  link = "/",
}: {
  buttonText: string;
  link?: string;
}) => {
  return (
    <Link
      href={`${link}`}
      className="group/button theme-transition-3 flex w-fit items-center gap-1 border-b border-neutral-700 pb-1 font-semibold hover:border-secondaryColor hover:text-neutral-500"
    >
      <span className="text-h6 capitalize">{buttonText}</span>
      <span>
        <IconArrowUpRight
          size={20}
          className="theme-transition-3 group-hover/button:rotate-45 group-hover/button:text-secondaryColor"
        />
      </span>
    </Link>
  );
};

export default ButtonUnderLine;
