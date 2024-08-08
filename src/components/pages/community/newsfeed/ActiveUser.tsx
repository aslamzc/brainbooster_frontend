import BorderHorizontalN40 from "@/components/customBorder/BorderHorizontalN40";
import Users from "@/components/sharedComponents/Users";
import { IconPlus } from "@tabler/icons-react";

const ActiveUser = () => {
  return (
    <div className="padding-all-32 flex flex-col gap-6 rounded-16px bg-white">
      <p className="h4 font-semibold">Active User</p>
      <BorderHorizontalN40 />
      <div>
        <Users data={<IconPlus />} />
      </div>
      <p className="text-mText font-medium">5.9k Active User</p>
    </div>
  );
};

export default ActiveUser;
