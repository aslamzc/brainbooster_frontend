import Link from "next/link";
import React from "react";

const SocialIconDarkBorder = ({
  icon,
  link,
}: {
  icon: React.ReactNode;
  link: string;
}) => {
  return (
    <Link
      href={`${link}`}
      className="theme-transition-3 rounded-full border border-neutral-700 p-3 text-neutral-700 hover:bg-primaryColor hover:shadow-four"
    >
      {icon}
    </Link>
  );
};

export default SocialIconDarkBorder;
