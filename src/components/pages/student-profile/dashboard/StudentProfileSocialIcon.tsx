import Link from "next/link";
import React from "react";
type Props = {
  link: string;
  icon: React.ReactNode;
};

const StudentProfileSocialIcon = ({ icon, link }: Props) => {
  return (
    <Link
      href={`${link}`}
      className="theme-transition-3 rounded-full bg-bgColorTwo p-2 text-primaryColor hover:bg-primaryColor hover:text-neutral-700 hover:shadow-four"
    >
      {icon}
    </Link>
  );
};

export default StudentProfileSocialIcon;
