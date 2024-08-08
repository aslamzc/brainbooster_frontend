import Image, { StaticImageData } from "next/image";
import VectorAboutUsInstructorTopRight from "../vector/VectorAboutUsInstructorTopRight";

type Props = {
  image: StaticImageData;
  name: string;
  title: string;
};

const CardAboutTopInstructor = ({ image, name, title }: Props) => {
  return (
    <div className="group relative mx-auto max-w-[306px]">
      <VectorAboutUsInstructorTopRight />
      <Image
        src={image}
        width={306}
        height={400}
        alt="Instructor image"
        className="rounded-32px"
      />
      <div className="mentor-card-bg theme-transition-4 absolute bottom-0 left-0 flex h-1/2 w-full items-end justify-between gap-6 rounded-16px pb-6 ps-6 group-hover:visible group-hover:h-full group-hover:opacity-100">
        <div className="text-white">
          <p className="h4 font-semibold">{name}</p>
          <p className="mt-3 text-mText">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default CardAboutTopInstructor;
