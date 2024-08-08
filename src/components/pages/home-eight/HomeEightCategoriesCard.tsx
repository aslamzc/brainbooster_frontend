import vector from "@/../public/images/home-eight/vector.png";
import ButtonUnderLine from "@/components/button/ButtonUnderLine";
import TextXL from "@/components/sharedComponents/TextXL";
import Image, { StaticImageData } from "next/image";
type Props = {
  id: any;
  icon: StaticImageData;
  title: string;
  text: string;
  link: string;
};

const HomeEightCategoriesCard = ({ id, icon, title, text, link }: Props) => {
  return (
    <div className="group padding-t-40 padding-b-40 padding-s-32 padding-e-32 gap-32px theme-transition-4 relative flex flex-col rounded-16px border border-neutral-20 bg-neutral-20 hover:bg-primaryColor">
      {" "}
      <div className="w-fit rounded-full border border-neutral-30 bg-white p-6">
        <Image
          src={icon}
          width={40}
          height={40}
          alt="Icon image"
          className="h-10 w-10"
        />
      </div>
      <div className="flex flex-col gap-3">
        <TextXL className="xlText font-medium text-neutral-800">{title}</TextXL>
        <div>
          <p>{text}</p>
          <div className="pt-6">
            <ButtonUnderLine buttonText="Enroll Now" link={`${link}`} />
          </div>
        </div>
      </div>
      <Image
        src={vector}
        width={108}
        height={89}
        alt="Card vector"
        className="theme-transition-4 visible absolute bottom-0 right-0 opacity-100 group-hover:invisible group-hover:w-0 group-hover:opacity-0"
      />
    </div>
  );
};

export default HomeEightCategoriesCard;
