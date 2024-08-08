import Link from "next/link";
import React from "react";

const SocialIconSmall = ({
  icon,
  link,
}: {
  icon: React.ReactNode;
  link: string;
}) => {
  return (
    <Link
      href={`${link}`}
      className="theme-transition-3 rounded-full border border-primaryColor p-2 text-primaryColor hover:bg-primaryColor hover:text-neutral-700"
    >
      {icon}
    </Link>
  );
};

export default SocialIconSmall;
