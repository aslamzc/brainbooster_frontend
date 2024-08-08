import { IconArrowUpRight } from "@tabler/icons-react";
import Link from "next/link";

const ButtonPrimary = ({
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
        href={`${link ? link : "/"}`}
        className="py group theme-transition-3 flex w-fit items-center justify-center gap-2 rounded-32px bg-primaryColor px-5 py-3 text-base font-semibold capitalize text-neutral-700 shadow-five hover:bg-bgColorTwo hover:text-white hover:shadow-five-theme lg:px-6 lg:py-3 "
      >
        <span className="block shrink-0">{buttonText}</span>{" "}
        {button && (
          <IconArrowUpRight className="theme-transition-3 shrink-0 group-hover:rotate-45" />
        )}
      </Link>
    </div>
  );
};

export default ButtonPrimary;
