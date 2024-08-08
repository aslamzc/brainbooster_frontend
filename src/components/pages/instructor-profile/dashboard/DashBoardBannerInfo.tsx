import H4 from "@/components/sharedComponents/H4";
import TextM from "@/components/sharedComponents/TextM";
import React from "react";

type Props = {
  icon: React.ReactNode;
  title: string;
  text: string;
};

const DashBoardBannerInfo = ({ icon, title, text }: Props) => {
  return (
    <div className="items-center">
      <span className="text-secondaryColorTwo">{icon}</span>
      <H4 className="pt-4">{title}</H4>
      <TextM className="xl:pt-1">{text}</TextM>
    </div>
  );
};

export default DashBoardBannerInfo;
