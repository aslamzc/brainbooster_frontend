import TextS from "@/components/sharedComponents/TextS";
import TextXL from "@/components/sharedComponents/TextXL";
import React from "react";
type Props = {
  icon: React.ReactNode;
  textOne: string;
  textTwo: string;
};

const AllInfoItem = ({ icon, textOne, textTwo }: Props) => {
  return (
    <div className="flex items-center gap-6">
      <div className="rounded-full bg-secondaryColorTwo p-4 text-white">
        {icon}
      </div>
      <div className="flex flex-col gap-2">
        <TextXL>{textOne}</TextXL>
        <TextS>{textTwo}</TextS>
      </div>
    </div>
  );
};

export default AllInfoItem;
