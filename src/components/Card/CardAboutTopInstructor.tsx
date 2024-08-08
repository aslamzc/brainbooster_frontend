import Image, { StaticImageData } from "next/image";
import ButtonRoundedPrimary from "../button/ButtonRoundedPrimary";
import VectorAboutUsInstructorTopRight from "../vector/VectorAboutUsInstructorTopRight";

type Props = {
  image: StaticImageData;
  name: string;
  title: string;
};

const CardAboutTopInstructor = ({ image, name, title }: Props) => {
  return (
    <div className="group relative mx-auto max-w-[306px] ">
      <VectorAboutUsInstructorTopRight />
      <Image
        src={image}
        width={306}
        height={400}
        alt="Instructor image"
        className="rounded-32px"
      />

      <div className="theme-transition-4 invisible absolute bottom-0 left-6 flex items-center justify-between gap-6 rounded-16px bg-bgColorOne px-6 py-4 opacity-0 group-hover:visible group-hover:-translate-y-6 group-hover:opacity-100">
        <div className="text-white">
          <p className="h4 font-semibold">{name}</p>
          <p className="mt-3 text-mText">{title}</p>
        </div>
        <div>
          <ButtonRoundedPrimary />
        </div>
      </div>
    </div>
  );
};

export default CardAboutTopInstructor;
