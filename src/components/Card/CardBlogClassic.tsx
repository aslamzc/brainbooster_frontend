import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import BlogInfo from "../pages/blog-classic/BlogInfo";
import H3 from "../sharedComponents/H3";
import TextM from "../sharedComponents/TextM";

type Props = {
  image: StaticImageData;
  title: string;
  text: string;
  message: string;
  by: string;
  view?: number;
  date: string;
};

const CardBlogClassic = ({
  image,
  title,
  text,
  message,
  view,
  by,
  date,
}: Props) => {
  return (
    <div className="flex flex-col  justify-center gap-6 self-stretch">
      <div className="relative ">
        <Image
          src={image}
          width={856}
          height={500}
          alt="Card Image"
          className="rounded-16px"
        />
      </div>
      <div>
        <div className="flex flex-col gap-6 ">
          <BlogInfo by={by} view={view} message={message} date={date} />
          <H3>
            <Link href="/">{title}</Link>
          </H3>
          <TextM>{text}</TextM>
        </div>
      </div>
    </div>
  );
};

export default CardBlogClassic;
