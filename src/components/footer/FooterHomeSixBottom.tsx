import Link from "next/link";
import SocialIconsSmall from "../icons/SocialIconsSmall";

const FooterHomeSixBottom = () => {
  return (
    <div>
      <div className=" container flex items-center  justify-between gap-6  py-5 max-lg:flex-col max-sm:flex-col max-sm:text-center lg:py-10">
        <p className="text-mText">
          Copyright © {new Date().getFullYear()}{" "}
          <Link
            href="/"
            className="theme-transition-3 text-primaryColor hover:text-white"
          >
            Edufast
          </Link>{" "}
          All Rights Reserved.
        </p>
        <SocialIconsSmall />
        <div className="flex gap-3 max-md:flex-col md:gap-6 ">
          <Link
            href="/privacy-policy"
            className="theme-transition-3 hover:text-primaryColor"
          >
            Terms & Conditions
          </Link>
          <Link
            href="/privacy-policy"
            className="theme-transition-3 hover:text-primaryColor"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterHomeSixBottom;
