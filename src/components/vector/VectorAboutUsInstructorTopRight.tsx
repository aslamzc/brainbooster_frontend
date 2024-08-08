import vector from "@/../public/images/about/vector-about-instructor-top-right.png";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

const VectorAboutUsInstructorTopRight = () => {
  return (
    <div className="absolute right-0 top-0 z-10">
      <Image
        src={vector}
        width={102}
        height={230}
        alt="Vector image"
        className="relative"
      />
      <div className="absolute right-0 top-0 flex w-fit flex-col items-start gap-3 rounded-32px bg-primaryColor p-2 shadow-four">
        <Link
          href="/"
          className="theme-transition-4 rounded-full border border-neutral-700 p-3 hover:bg-neutral-700 hover:text-primaryColor"
        >
          <IconBrandFacebook size={20} />
        </Link>
        <Link
          href="/"
          className="theme-transition-4 rounded-full border border-neutral-700 p-3 hover:bg-neutral-700 hover:text-primaryColor"
        >
          <IconBrandTwitter size={20} />
        </Link>
        <Link
          href="/"
          className="theme-transition-4 rounded-full border border-neutral-700 p-3 hover:bg-neutral-700 hover:text-primaryColor"
        >
          <IconBrandInstagram size={20} />
        </Link>
      </div>
    </div>
  );
};

export default VectorAboutUsInstructorTopRight;
