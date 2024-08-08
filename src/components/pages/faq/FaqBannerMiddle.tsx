// import image from "@/../public/images/faq/faq-banner.png";
import { IconArrowUpRight } from "@tabler/icons-react";
import Link from "next/link";

const FaqBannerMiddle = () => {
  return (
    <div className="section-gap-top section-gap-bottom relative bg-[url('/images/faq/faq-banner.png')]  bg-cover bg-no-repeat text-white">
      <div className="absolute left-0 top-0 h-full w-full bg-bgColorOne bg-opacity-70"></div>
      <div className="container relative z-10 grid grid-cols-6 items-center justify-between lg:grid-cols-2">
        <h4 className="d4 font-semibold max-lg:col-start-1 max-lg:col-end-6">
          Start Your Educational Journey Now
        </h4>{" "}
        <div className="justify-self-end max-lg:col-start-6 max-lg:col-end-7">
          <Link
            href="/instructor/all-course"
            className="group group theme-transition-3  flex items-center justify-center rounded-full bg-primaryColor p-3 font-semibold text-neutral-700 xl:p-5 xxl:p-6"
          >
            <IconArrowUpRight
              size={40}
              stroke={1}
              className="w theme-transition-3 h-6 w-6 group-hover:rotate-45 sm:max-xxl:h-10 sm:max-xxl:w-10 xxl:h-[40px] xxl:w-[40px]"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FaqBannerMiddle;
