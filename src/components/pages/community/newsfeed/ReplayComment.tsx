import icon from "@/../public/images/community/newsfeed/replay-1.png";
import { IconSend } from "@tabler/icons-react";
import Image from "next/image";

const ReplayComment = () => {
  return (
    <div className="mt-5 flex gap-5 max-sm:flex-col sm:items-center">
      <div>
        <Image
          src={icon}
          width={40}
          height={40}
          alt="Nested comment user image"
          className="rounded-full"
        />
      </div>
      <div className="max-w bg-neutral-20 flex items-center justify-between gap-2 rounded-[30px] px-5 py-2">
        <input
          type="text"
          placeholder="Join the discussion..."
          className="bg-inherit"
        />{" "}
        <div>
          <IconSend size={20} />
        </div>
      </div>
    </div>
  );
};

export default ReplayComment;
