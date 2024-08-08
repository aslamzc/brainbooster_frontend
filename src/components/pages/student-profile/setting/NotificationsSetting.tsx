import BorderHorizontalN40 from "@/components/customBorder/BorderHorizontalN40";
import H4 from "@/components/sharedComponents/H4";
import TextS from "@/components/sharedComponents/TextS";
import SettingItem from "./SettingItem";

const NotificationsSetting = () => {
  return (
    <div className="padding-all-32 flex flex-col gap-6 rounded-16px bg-white">
      <H4>Notifications Settings</H4>
      <BorderHorizontalN40 />
      <TextS>
        Integrated features from these accounts make it easier to collaborate{" "}
      </TextS>
      <SettingItem
        settingTitle="Notify me via email when logging in"
        settingDetail="7+ Device Logging"
      />
      <SettingItem
        settingTitle="Send SMS confirmation for all online payments"
        settingDetail="Each device is included"
      />
      <SettingItem
        settingTitle="Check which devices access your account"
        settingDetail="Verify Your Own Devices"
      />
      <SettingItem
        settingTitle="Show your profile publicly"
        settingDetail="Everyone is looking at your profile"
      />
    </div>
  );
};

export default NotificationsSetting;
