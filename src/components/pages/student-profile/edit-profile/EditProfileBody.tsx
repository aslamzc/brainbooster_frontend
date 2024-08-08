import AddressSetting from "./AddressSetting";
import ChangePassword from "./ChangePassword";
import EditProfileSection from "./EditProfileSection";
import LinkedAccount from "./LinkedAccount";

const EditProfileBody = () => {
  return (
    <div className="flex flex-col gap-6">
      <EditProfileSection />
      {/* address section */}
      <AddressSetting />
      {/* Linked Account */}
      <LinkedAccount />
      {/* change password */}
      <ChangePassword />
    </div>
  );
};

export default EditProfileBody;
