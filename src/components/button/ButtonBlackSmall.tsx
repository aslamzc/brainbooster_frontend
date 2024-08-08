import { IconArrowUpRight } from "@tabler/icons-react";
import Link from "next/link";

const ButtonBlackSmall = ({
  buttonText,
  button = true,
  link = "/",
}: {
  buttonText: string;
  button?: boolean;
  link?: string;
}) => {
  return (
    <Link
      href={`${link}`}
      className="group theme-transition-3 flex w-fit items-center justify-center rounded-32px border border-transparent bg-bgColorOne px-6 py-3 text-center text-h6 text-primaryColor hover:rounded-32px hover:border hover:border-bgColorOne hover:bg-transparent hover:text-neutral-700"
    >
      <span>{buttonText}</span>
      {button && (
        <IconArrowUpRight className="theme-transition-3 group-hover:rotate-45" />
      )}
    </Link>
  );
};

export default ButtonBlackSmall;
