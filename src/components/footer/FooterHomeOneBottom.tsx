import Link from "next/link";
import BorderHorizontalGreen from "../customBorder/BorderHorizontalGreen";

const FooterHomeOneBottom = () => {
  return (
    <div className="section-gap-top">
      <BorderHorizontalGreen />
      <div className=" flex items-center justify-between py-10 max-sm:flex-col max-sm:gap-3 max-sm:text-center">
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

export default FooterHomeOneBottom;
