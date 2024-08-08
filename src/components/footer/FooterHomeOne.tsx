import FadeDownToTop from "@/motionEffect/FadeDownToTop";
import FadeTopToDown from "@/motionEffect/FadeTopToDown";
import StaggerEffectUl from "@/motionEffect/StaggerEffectUl";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandPinterest,
  IconBrandTwitter,
} from "@tabler/icons-react";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import BorderVertical from "../customBorder/BorderVertical";
import SocialIcon from "../icons/SocialIcon";
import ContactUs from "./ContactUs";
import FooterHomeOneBottom from "./FooterHomeOneBottom";

const FooterHomeOne = () => {
  const navigationItems = [
    { link: "/about-us", label: "About" },
    { link: "/courses/courses-one", label: "Courses" },
    { link: "/community", label: "Community" },
    { link: "/instructor", label: "Mentors" },
    { link: "/faq", label: "FAQs" },
    { link: "/blog-classic", label: "Blogs" },
  ];

  return (
    <footer className=" bg-bgColorOne text-white">
      <div className="container section-gap-top">
        {/* footer top */}
        <div className="grid-cols-12 justify-between sm:grid">
          {/* footer top left */}
          <div className="col-start-1 col-end-13 flex flex-col gap-y-8 lg:col-end-6 ">
            <h4 className="d4 font-semibold ">
              <span className="text-primaryColor">Let’s</span> Work Together
            </h4>
            <p className="text-mText">
              Welcome to our diverse and dynamic course catalog. At Edufast,
              we&apos;re dedicated to providing you with access to high-quality
              education that empowers your personal and professional growth.
            </p>
            <div className="flex items-center gap-x-4">
              <SocialIcon
                key={uuidv4()}
                icon={<IconBrandFacebook />}
                link="/"
              />
              <SocialIcon key={uuidv4()} icon={<IconBrandTwitter />} link="/" />
              <SocialIcon
                key={uuidv4()}
                icon={<IconBrandInstagram />}
                link="/"
              />
              <SocialIcon
                key={uuidv4()}
                icon={<IconBrandPinterest />}
                link="/"
              />
            </div>
          </div>
          {/* dot line */}
          <div className=" col-start-6 col-end-7 hidden justify-center lg:flex">
            <BorderVertical />
          </div>
          {/* footer top middle */}
          <FadeDownToTop>
            <div className="relative col-start-1 col-end-6 max-lg:mt-6 lg:col-start-7 lg:col-end-9">
              <h3 className="text-h3 font-semibold">Navigation</h3>
              <ul className="mt-8 flex flex-col gap-y-4 text-mText">
                {navigationItems.map((item, index) => (
                  <StaggerEffectUl
                    className="theme-transition-3 relative before:theme-transition-3 before:left-0 before:top-1/2 before:h-1 before:w-1 before:rounded-full before:bg-primaryColor hover:translate-x-1 hover:ps-3 hover:text-primaryColor hover:before:absolute"
                    key={uuidv4()}
                    id={index}
                  >
                    <Link href={item.link}>{item.label}</Link>
                  </StaggerEffectUl>
                ))}
              </ul>
            </div>
          </FadeDownToTop>
          {/* dot line */}
          <div className=" col-start-6 col-end-7 flex justify-center max-lg:mt-6 lg:col-start-9 lg:col-end-10">
            <BorderVertical />
          </div>

          {/* footer top right */}
          <div className="col-start-8 col-end-13 max-lg:mt-6 lg:col-start-10">
            <FadeTopToDown>
              <ContactUs />
            </FadeTopToDown>
          </div>
        </div>
        {/* footer bottom */}
        <FooterHomeOneBottom />
      </div>
    </footer>
  );
};

export default FooterHomeOne;
