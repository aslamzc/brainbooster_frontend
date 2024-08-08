import { IconArrowUpRight } from "@tabler/icons-react";
import Link from "next/link";

const LinkOutlineSmall = ({
  buttonText,
  button,
  link,
}: {
  buttonText: string;
  button: boolean;
  link?: string;
}) => {
  return (
    <>
      <Link
        href={`${link ? link : "/"}`}
        className="group theme-transition-3 flex items-center justify-center gap-2 rounded-32px border border-neutral-700 px-6 py-3 text-base font-semibold text-neutral-700 hover:border-transparent hover:bg-primaryColor hover:shadow-five"
      >
        <span className="block shrink-0">{buttonText}</span>{" "}
        {button && (
          <IconArrowUpRight className="theme-transition-3 shrink-0 group-hover:rotate-45" />
        )}
      </Link>
    </>
  );
};

export default LinkOutlineSmall;
