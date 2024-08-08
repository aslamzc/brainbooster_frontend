"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {
  link: string;
  icon: React.ReactNode;
  title: string;
};

const StudentProfileSidebarItem = ({ link, icon, title }: Props) => {
  const pathName = usePathname();
  return (
    <li>
      <Link
        href={`${link}`}
        className={`theme-transition-3 flex items-center gap-2 rounded-32px px-4 py-3 text-mText font-medium hover:bg-primaryColor hover:shadow-six ${
          pathName === link ? "bg-primaryColor shadow-six" : ""
        }`}
      >
        {icon}
        <span>{title}</span>
      </Link>
    </li>
  );
};

export default StudentProfileSidebarItem;
