import post1 from "@/../public/images/home-five/footer-1.png";
import post4 from "@/../public/images/home-five/footer-4.png";
import FadeDownToTop from "@/motionEffect/FadeDownToTop";
import FadeTopToDown from "@/motionEffect/FadeTopToDown";
import StaggerEffectUl from "@/motionEffect/StaggerEffectUl";
import { IconArrowUpRight } from "@tabler/icons-react";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import SocialIconsSmall from "../icons/SocialIconsSmall";
import H3 from "../sharedComponents/H3";
import TextL from "../sharedComponents/TextL";
import ContactUs from "./ContactUs";
import FooterFivePost from "./FooterFivePost";
import FooterHomeOneBottom from "./FooterHomeOneBottom";

const FooterHomeEight = () => {
  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About" },
    { href: "/courses/courses-one", label: "Courses" },
    { href: "/community", label: "Community" },
    { href: "/instructor", label: "Mentors" },
    { href: "/event", label: "Event" },
  ];

  const menuItemsTwo = [
    { href: "/pricing-plan", label: "Pricing Plan" },
    { href: "/courses/courses-one", label: "Gallery" },
    { href: "/products", label: "Shop" },
    { href: "/courses-comparison", label: "Compare" },
    { href: "/faq", label: "FAQs" },
    { href: "/blog-classic", label: "Blogs" },
  ];

  return (
    <footer className=" overflow-hidden bg-bgColorOne text-white">
      <div className="container section-gap-top">
        {/* footer top */}
        <div className="grid-cols-12 justify-between gap-6 md:grid">
          {/* footer top left start */}

          <div className="gap-32px col-start-1 col-end-7 flex flex-col xxl:col-end-6">
            <h3 className="d4 font-semibold">
              <span className="text-primaryColor">Let&apos;s </span>Achieve
              Together
            </h3>
            <TextL>Welcome to our diverse and dynamic course catalog.</TextL>
          </div>
          <div className="col-start-8 col-end-13 flex flex-col gap-3 md:gap-32px max-md:mt-5 xl:col-start-9 xxl:col-start-11">
            <H3 className="text-white">Follow us</H3>
            <SocialIconsSmall />
          </div>
        </div>
        <div className="section-gap-top grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xxl:grid-cols-4">
          {/* left */}
          <FadeTopToDown className="relative">
            <h3 className="text-h3 font-semibold">Navigation</h3>
            <ul className="mt-8 flex flex-col gap-y-4 text-mText">
              {menuItems.map((menuItem, index) => (
                <StaggerEffectUl
                  className="theme-transition-3 relative before:theme-transition-3 before:left-0 before:top-1/2 before:h-1 before:w-1 before:rounded-full before:bg-primaryColor hover:translate-x-1 hover:ps-3 hover:text-primaryColor hover:before:absolute"
                  key={uuidv4()}
                  id={index}
                >
                  <Link href={menuItem.href}>{menuItem.label}</Link>
                </StaggerEffectUl>
              ))}
            </ul>
          </FadeTopToDown>
          <FadeDownToTop className="relative">
            {" "}
            <h3 className="text-h3 font-semibold">Others</h3>
            <ul className="mt-8 flex flex-col gap-y-4 text-mText">
              {menuItemsTwo.map((menuItem, index) => (
                <StaggerEffectUl
                  className="theme-transition-3 relative before:theme-transition-3 before:left-0 before:top-1/2 before:h-1 before:w-1 before:rounded-full before:bg-primaryColor hover:translate-x-1 hover:ps-3 hover:text-primaryColor hover:before:absolute"
                  key={uuidv4()}
                  id={index}
                >
                  <Link href={menuItem.href}>{menuItem.label}</Link>
                </StaggerEffectUl>
              ))}
            </ul>
          </FadeDownToTop>
          <div className="relative">
            <ContactUs />
          </div>
          {/* right */}{" "}
          <div className="">
            <H3>Recent Post</H3>
            <div className="padding-t-32 flex flex-col gap-6">
              <FooterFivePost
                image={post1}
                title="Demystifying Data Science"
                date="23/10/23"
              />
              <FooterFivePost
                image={post4}
                title="The Role of Emotional "
                date="23/10/23"
              />
              <Link
                href="/"
                className="group theme-transition-3 flex w-fit items-center gap-1 border-b border-primaryColor pb-1 font-semibold text-primaryColor hover:border-secondaryColor hover:text-white"
              >
                <span className="text-h6 capitalize">See All</span>
                <span className="theme-transition-3 group-hover:text-secondaryColor">
                  <IconArrowUpRight
                    size={20}
                    className="theme-transition-3 group-hover:rotate-45"
                  />
                </span>
              </Link>
            </div>
          </div>
        </div>
        {/* footer bottom */}
        <FooterHomeOneBottom />
      </div>
    </footer>
  );
};

export default FooterHomeEight;
