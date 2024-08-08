import Users from "@/components/sharedComponents/Users";
import { IconPlus } from "@tabler/icons-react";

const UsersAndReview = () => {
  return (
    <div className="flex items-center gap-3 max-[400px]:flex-col sm:gap-6 xxl:gap-8">
      <Users data={<IconPlus />} />
      <div className="">
        <p className="h3 font-semibold">4.5/5.00</p>
        <p className="text-mText font-medium text-neutral-500">Good Review</p>
      </div>
    </div>
  );
};

export default UsersAndReview;
