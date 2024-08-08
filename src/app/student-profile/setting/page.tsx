import NotificationsSetting from "@/components/pages/student-profile/setting/NotificationsSetting";
import SettingSection from "@/components/pages/student-profile/setting/SettingSection";

const Setting = () => {
  return (
    <div className="flex flex-col gap-6">
      <SettingSection />
      <NotificationsSetting />
    </div>
  );
};

export default Setting;
