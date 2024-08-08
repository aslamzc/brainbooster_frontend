import BorderHorizontalN40 from "@/components/customBorder/BorderHorizontalN40";
import H4 from "@/components/sharedComponents/H4";
import TextS from "@/components/sharedComponents/TextS";
import SettingItem from "./SettingItem";

const SettingSection = () => {
  return (
    <div className="padding-all-32 flex flex-col gap-6 rounded-16px bg-white">
      <H4>Settings</H4>
      <BorderHorizontalN40 />
      <TextS>
        Integrated features from these accounts make it easier to collaborate{" "}
      </TextS>
      <SettingItem
        settingTitle="Secure Browsing"
        settingDetail="Browsing Securely ( https ) when it's necessary"
      />
      <SettingItem
        settingTitle="Login Notifications"
        settingDetail="Notify when login attempted from other place"
      />
      <SettingItem
        settingTitle="Login Approvals"
        settingDetail="Approvals is not required when login from unrecognized devices."
      />
      <SettingItem
        settingTitle="Job Notification"
        settingDetail="Approvals is not required when login from unrecognized devices."
      />
      <SettingItem
        settingTitle="Message"
        settingDetail="Approvals is not required when login from unrecognized devices."
      />
    </div>
  );
};

export default SettingSection;
