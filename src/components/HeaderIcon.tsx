import Link from "next/link";

type Props = {
  icon: React.ReactNode;
  number?: number;
  bg?: string;
  actionFunction?: () => void;
  link?: string;
};

const HeaderIcon = ({
  icon,
  number,
  bg = "bg-bgColorTwo",
  actionFunction,
  link = "",
}: Props) => {
  return (
    <Link
      href={`${link}`}
      onClick={actionFunction}
      className={`theme-transition-3 relative block rounded-full border border-transparent  p-3 hover:border-secondaryColor ${bg}`}
    >
      {icon}
      <span
        className={` -top-[11px] right-[-3px] rounded-full bg-secondaryColor px-2 py-0.5 text-xs font-semibold text-neutral-700 ${
          number ? "absolute" : "hidden"
        }`}
      >
        {number}
      </span>
    </Link>
  );
};

export default HeaderIcon;
