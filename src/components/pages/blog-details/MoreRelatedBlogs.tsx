import H5 from "@/components/sharedComponents/H5";
import TextM from "@/components/sharedComponents/TextM";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
type Props = {
  image: StaticImageData;
  title: string;
  date: string;
  link: string;
};

const MoreRelatedBlogs = ({ image, title, date, link }: Props) => {
  return (
    <div className="flex items-center gap-6">
      <div>
        <Image
          src={image}
          width={80}
          height={80}
          alt="More Related Blogs"
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col gap-3">
        <H5>
          <Link
            href={`${link}`}
            className="theme-transition-3 hover:text-secondaryColorTwo"
          >
            {title}
          </Link>
        </H5>
        <TextM>{date}</TextM>
      </div>
    </div>
  );
};

export default MoreRelatedBlogs;
