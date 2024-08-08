import { IconSend } from "@tabler/icons-react";
import H4 from "../sharedComponents/H4";

const FooterThreeSearchBar = ({ title = "Subscribe" }: { title?: string }) => {
  return (
    <div className="my-auto flex flex-col gap-6">
      <H4>{title}</H4>
      <div className="text-neutral-700">
        <div className=" flex items-center justify-between rounded-full bg-bgColorTwo ps-8 ">
          <input
            type="text"
            placeholder="Enter Email..."
            className=" me-3 w-full bg-inherit text-white placeholder:text-white focus:outline-none "
          />
          <button className="group theme-transition-3 flex items-center justify-center rounded-full border-4 border-bgColorOne bg-primaryColor p-2 font-semibold text-neutral-700 shadow-four hover:bg-bgColorOne hover:text-white hover:shadow-four-theme">
            <IconSend
              size={36}
              className="theme-transition-3 group-hover:rotate-45"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FooterThreeSearchBar;
