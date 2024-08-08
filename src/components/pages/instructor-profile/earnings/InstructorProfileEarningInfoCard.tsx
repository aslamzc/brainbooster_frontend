import H4 from "@/components/sharedComponents/H4";
import TextM from "@/components/sharedComponents/TextM";
import { IconChartLine } from "@tabler/icons-react";
import React from "react";

type Props = {
  icon: React.ReactNode;
  title: string;
  text: string;
  className?: string;
  progress: number;
  progressFrom: string;
};

const InstructorProfileEarningInfoCard = ({
  icon,
  title,
  text,
  className,
  progress,
  progressFrom,
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
      <div className="mt-7 flex flex-col gap-4">
        <div className="h-1 min-w-full  rounded-md bg-primaryColor">
          <div
            className={`progress-bar theme-transition-4 h-1 w-[53%] rounded-md bg-neutral-500`}
            role="progressbar"
          ></div>
        </div>
        <div className="flex gap-3 text-mText text-neutral-500">
          <div className="flex items-center gap-1">
            <IconChartLine /> <span>{progress}%</span>
          </div>
          <span>{progressFrom}</span>
        </div>
      </div>
    </div>
  );
};

export default InstructorProfileEarningInfoCard;
