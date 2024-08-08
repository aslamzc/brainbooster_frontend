import TextM from "@/components/sharedComponents/TextM";
import { IconDiscountCheck } from "@tabler/icons-react";

const PlanDescriptionItem = ({ text }: { text: string }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="text-secondaryColorTwo">
        <IconDiscountCheck size={20} />
      </div>
      <TextM>{text}</TextM>
    </div>
  );
};

export default PlanDescriptionItem;
