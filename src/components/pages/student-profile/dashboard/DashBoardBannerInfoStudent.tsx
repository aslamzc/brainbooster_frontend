import H4 from "@/components/sharedComponents/H4";
import TextM from "@/components/sharedComponents/TextM";
import React from "react";

type Props = {
  icon: React.ReactNode;
  title: string;
  text: string;
};

const DashBoardBannerInfoStudent = ({ icon, title, text }: Props) => {
  return (
    <div className="flex items-center max-sm:gap-4 sm:flex-col">
      <div className=" text-secondaryColorTwo">{icon}</div>
      <div>
        <H4 className="sm:pt-4 sm:text-center">{title}</H4>
        <TextM className="sm:text-center xl:pt-1">{text}</TextM>
      </div>
    </div>
  );
};

export default DashBoardBannerInfoStudent;
