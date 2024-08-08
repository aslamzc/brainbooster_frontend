import H5 from "@/components/sharedComponents/H5";
import { IconShieldCheckFilled } from "@tabler/icons-react";

const SubTitle = ({ text }: { text: string }) => {
  return (
    <div className="flex w-fit items-center gap-3 rounded-32px border border-secondaryColorTwo px-4 py-2 sm:px-6">
      <span className="text-secondaryColorTwo">
        <IconShieldCheckFilled size={20} />
      </span>
      <H5>{text}</H5>
    </div>
  );
};

export default SubTitle;
