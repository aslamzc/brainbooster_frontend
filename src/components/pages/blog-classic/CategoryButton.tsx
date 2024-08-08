import TextXL from "@/components/sharedComponents/TextXL";
import Link from "next/link";
import React from "react";

type Props = {
  icon: React.ReactNode;
  text: string;
  link: string;
};

const CategoryButton = ({ icon, text, link }: Props) => {
  return (
    <Link
      href={`${link}`}
      className="bg-neutral-20 padding-s-32 padding-e-32 theme-transition-3 flex w-full items-center gap-4 rounded-32px py-3 hover:bg-primaryColor"
    >
      <span className="rounded-full bg-bgColorTwo p-2 text-primaryColor">
        {icon}
      </span>
      <TextXL>{text}</TextXL>
    </Link>
  );
};

export default CategoryButton;
