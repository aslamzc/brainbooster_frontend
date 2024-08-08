import H5 from "@/components/sharedComponents/H5";
import Fade from "@/motionEffect/Fade";
import { IconStarFilled } from "@tabler/icons-react";

const SubTitle = ({ text }: { text: string }) => {
  return (
    <Fade className="flex w-fit items-center gap-3 rounded-32px border border-secondaryColorTwo px-6 py-2">
      <span className="text-secondaryColorTwo">
        <IconStarFilled size={20} />
      </span>
      <H5>{text}</H5>
    </Fade>
  );
};

export default SubTitle;
