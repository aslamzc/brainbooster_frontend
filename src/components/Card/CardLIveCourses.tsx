"use client";
import Image, { StaticImageData } from "next/image";
import ButtonPrimary from "../button/ButtonPrimary";
import ButtonVideo from "../button/ButtonVideoTwo";
import Users from "../sharedComponents/Users";

type Props = {
  image: StaticImageData;
  title: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const CardLIveCourses = ({ setOpen, image, title }: Props) => {
  return (
    <div className="mx-auto flex max-w-[400px] flex-col gap-8">
      <div className="relative w-fit overflow-hidden rounded-32px">
        <Image
          src={image}
          width={400}
          height={306}
          alt="Live Courses Card Image"
          className="theme-transition-3 rounded-32px hover:scale-105"
        />
        <ButtonVideo iconSize={24} setOpen={setOpen} />
      </div>
      <div className="flex flex-col justify-between gap-6">
        <h4 className="h3 font-semibold ">{title}</h4>
        <div className="flex  items-center justify-between">
          <div>
            <p className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-secondaryColor"></span>
              <span className="xlText font-medium">Live Students</span>
            </p>
            <div className="mt-4">
              <Users data={"2.1k+"} />
            </div>
          </div>
          <ButtonPrimary buttonText="Join Now" button={false} />
        </div>
      </div>
    </div>
  );
};

export default CardLIveCourses;
