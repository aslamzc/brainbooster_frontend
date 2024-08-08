import Link from "next/link";
import React from "react";

const LinkIconBgOne = ({
  children,
  link,
}: {
  children: React.ReactNode;
  link: string;
}) => {
  return (
    <Link
      href={`${link}`}
      className="theme-transition-3 rounded-full bg-bgColorOne p-3 text-primaryColor hover:scale-105 "
    >
      {children}
    </Link>
  );
};

export default LinkIconBgOne;
