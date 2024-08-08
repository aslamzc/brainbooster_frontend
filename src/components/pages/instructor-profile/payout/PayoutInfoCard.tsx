import H4 from "@/components/sharedComponents/H4";
import TextM from "@/components/sharedComponents/TextM";
import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

type Props = {
  icon: React.ReactNode;
  title: string;
  text: string;
  className?: string;
  progress: number;
  link: string;
};

const PayoutInfoCard = ({
  icon,
  title,
  text,
  className,
  progress,
  link,
}: Props) => {
  return (
    <div
      className={`border-neutral-30 padding-s-32 padding-e-32 theme-transition-3 items-center gap-3 rounded-16px border bg-white py-6 hover:scale-102 xxl:gap-7 ${className}`}
    >
      <div className="flex gap-6">
        <div className="border-neutral-30 rounded-16px bg-primaryColor p-3">
          {icon}
        </div>
        <div className="flex flex-col gap-3">
          <TextM>{text}</TextM>
          <H4>${title}</H4>
        </div>
      </div>
      <div className="mt-7 flex flex-col gap-6">
        <div className="bg-neutral-30 h-1  min-w-full rounded-md">
          <div
            className={`progress-bar theme-transition-4 h-1 w-[53%] rounded-md bg-secondaryColor`}
            role="progressbar"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <Link
          href={`${link}`}
          className="flex items-center gap-1 text-h6 font-semibold"
        >
          {" "}
          <span>View Transaction</span>
          <IconArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default PayoutInfoCard;
