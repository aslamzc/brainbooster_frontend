import TextM from "@/components/sharedComponents/TextM";
import {
  IconBrandAndroid,
  IconStarFilled,
  IconStarHalfFilled,
  IconUsers,
  IconWorld,
} from "@tabler/icons-react";

const TrustPilot = () => {
  return (
    <div className="padding-t-32 padding-b-32 bg-bgColorOne">
      <div className="container flex items-center justify-between py-[6.5px] text-white max-sm:flex-col max-sm:gap-3">
        <div className="flex gap-3 max-xl:flex-col xl:items-center">
          <TextM>
            Rated <span className="font-semibold">Excellent</span> On
          </TextM>
          <div className="flex items-center gap-2">
            <div className="text-primaryColor">
              <IconStarFilled size={20} />
            </div>
            <TextM>Trustpilot</TextM>
          </div>
          <div className="flex items-center gap-1">
            <div className="bg-primaryColor p-1 text-neutral-700">
              <IconStarFilled size={16} />
            </div>
            <div className="bg-primaryColor p-1 text-neutral-700">
              <IconStarFilled size={16} />
            </div>
            <div className="bg-primaryColor p-1 text-neutral-700">
              <IconStarFilled size={16} />
            </div>
            <div className="bg-primaryColor p-1 text-neutral-700">
              <IconStarFilled size={16} />
            </div>
            <div className="bg-primaryColor p-1 text-neutral-700">
              <IconStarHalfFilled size={16} />
            </div>
          </div>
        </div>
        <div className="bg-neutral-30 h-px w-full text-bgColorOne sm:h-full sm:w-px">
          .
        </div>
        <div className="flex gap-3 max-lg:flex-col lg:items-center lg:gap-6">
          <div className="flex items-center gap-3 ">
            <IconUsers size={20} />
            <TextM>
              <span className="font-semibold">30 Million</span> +Learners
            </TextM>
          </div>
          <div className="flex items-center gap-3">
            <IconBrandAndroid size={20} />
            <TextM>
              <span className="font-semibold">6 Million</span> +Graduates
            </TextM>
          </div>
          <div className="flex items-center gap-3">
            <IconWorld size={20} />
            <TextM>
              <span className="font-semibold">195</span> +Countries
            </TextM>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustPilot;
