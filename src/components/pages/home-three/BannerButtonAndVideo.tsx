import ButtonPrimary from "@/components/button/ButtonPrimary";
import H6 from "@/components/sharedComponents/H6";
import { IconPlayerPlayFilled } from "@tabler/icons-react";

type Props = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const BannerButtonAndVideo = ({ setOpen }: Props) => {
  return (
    <div className="padding-t-40 gap-40px flex items-center max-sm:flex-col">
      <ButtonPrimary
        buttonText="Browse courses"
        button
        link="/courses/courses-one"
      />
      <div className="flex items-center gap-5" onClick={() => setOpen(true)}>
        <button
          className={` theme-transition-3 rounded-full bg-bgColorTwo p-3 text-primaryColor hover:bg-primaryColor hover:text-bgColorOne`}
        >
          <IconPlayerPlayFilled size={24} />
        </button>
        <H6>Watch Demo</H6>
      </div>
    </div>
  );
};

export default BannerButtonAndVideo;
