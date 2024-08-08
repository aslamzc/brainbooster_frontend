import TextM from "@/components/sharedComponents/TextM";
import Link from "next/link";
import React from "react";

type Props = {
  icon: React.ReactNode;
  number: number;
  text: string;
  className?: string;
};

const StudentDashboardInfoCard = ({ icon, number, text, className }: Props) => {
  return (
    <div
      className={`border-neutral-30 theme-transition-3 flex items-center gap-3 rounded-16px border bg-white p-4 hover:scale-102 xxl:gap-5 xxl:p-6 ${className}`}
    >
      <div className="border-neutral-30 rounded-full bg-primaryColor p-2">
        {icon}
      </div>
      <div className="flex flex-col gap-2">
        <Link href="#" className="h3 font-semibold">
          {number}
        </Link>
        <TextM>{text}</TextM>
      </div>
    </div>
  );
};

export default StudentDashboardInfoCard;
