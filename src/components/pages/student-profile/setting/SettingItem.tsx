import ButtonSwitchPrimary from "@/components/button/ButtonSwitchPrimary";
import TextS from "@/components/sharedComponents/TextS";
import TextXL from "@/components/sharedComponents/TextXL";

type Props = {
  settingTitle: string;
  settingDetail: string;
};

const SettingItem = ({ settingTitle, settingDetail }: Props) => {
  return (
    <div className="flex items-center justify-between gap-6">
      <div className="flex flex-col gap-2">
        <TextXL className="text-neutral-500">{settingTitle}</TextXL>
        <TextS>{settingDetail}</TextS>
      </div>
      <ButtonSwitchPrimary />
    </div>
  );
};

export default SettingItem;
