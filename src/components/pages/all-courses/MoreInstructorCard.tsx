import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
  image: StaticImageData;
  name: string;
  designation: string;
};

const MoreInstructorCard = ({ image, name, designation }: Props) => {
  return (
    <div className="flex items-center gap-6">
      <div>
        <Image
          src={image}
          width={80}
          height={80}
          alt="image"
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col gap-3">
        <Link
          href="/instructor"
          className="h5 theme-transition-3 font-semibold hover:tracking-wider"
        >
          {name}
        </Link>
        <p className="text-mText text-neutral-500">{designation}</p>
      </div>
    </div>
  );
};

export default MoreInstructorCard;
