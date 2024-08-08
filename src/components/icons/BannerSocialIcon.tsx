import Link from "next/link";
import React from "react";

const BannerSocialIcon = ({
  icon,
  link,
}: {
  icon: React.ReactNode;
  link: string;
}) => {
  return (
    <Link
      href={`${link}`}
      className="theme-transition-3 block rounded-full border border-primaryColor p-3 text-neutral-700 hover:bg-primaryColor hover:shadow-four"
    >
      {icon}
    </Link>
  );
};

export default BannerSocialIcon;
