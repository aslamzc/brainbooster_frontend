import post1 from "@/../public/images/home-five/footer-1.png";
import post2 from "@/../public/images/home-five/footer-2.png";
import post3 from "@/../public/images/home-five/footer-3.png";
import post4 from "@/../public/images/home-five/footer-4.png";
import logo from "@/../public/images/home-four/footer-icon.png";
import FadeDownToTop from "@/motionEffect/FadeDownToTop";
import FadeTopToDown from "@/motionEffect/FadeTopToDown";
import StaggerEffectTwo from "@/motionEffect/StaggerEffectTwo";
import StaggerEffectUl from "@/motionEffect/StaggerEffectUl";
import { IconArrowUpRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import SocialIconsSmall from "../icons/SocialIconsSmall";
import H3 from "../sharedComponents/H3";
import TextM from "../sharedComponents/TextM";
import ContactUsFooterHomeFive from "./ContactUsFooterHomeFive";
import FooterFivePost from "./FooterFivePost";
import FooterHomeOneBottom from "./FooterHomeOneBottom";
import FooterThreeSearchBar from "./FooterThreeSearchBar";

const FooterHomeFive = () => {
  const posts = [
    { image: post1, title: "Demystifying Data Science", date: "23/10/23" },
    {
      image: post2,
      title: "Crafting Compelling Presentations",
      date: "23/10/23",
    },
    { image: post3, title: "The Psychology of Learning", date: "23/10/23" },
    { image: post4, title: "The Role of Emotional", date: "23/10/23" },
  ];
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
        <div className="grid-cols-12 justify-between gap-6 xl:grid">
          {/* footer top left start */}
          <div className="col-start-1 col-end-9">
            <div className="grid-cols-8 gap-6 sm:grid">
              <div className="col-start-1 col-end-5 lg:col-end-4">
                <div className="gap-32px flex flex-col">
                  <Link href="/">
                    <Image
                      src={logo}
                      width={184}
                      height={39}
                      alt="footer logo"
                    />
                  </Link>
                  <TextM>
                    Welcome to our diverse and dynamic course catalog.{" "}
                  </TextM>
                </div>
              </div>
              <div className="col-start-5 col-end-9 max-sm:pt-6 lg:col-start-4">
                <FooterThreeSearchBar title="Subscribe for newsletters" />
              </div>
            </div>
            <div className="section-gap-top grid grid-cols-8 gap-6">
              <FadeTopToDown className="relative col-start-1 col-end-9 sm:col-end-5 lg:col-end-4">
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
              </FadeTopToDown>
              <FadeDownToTop className="relative col-start-1 col-end-9 sm:col-start-5 lg:col-start-4 lg:col-end-7 ">
                <ContactUsFooterHomeFive />
              </FadeDownToTop>
              <div className="relative col-start-1 col-end-5 flex flex-col gap-4 lg:col-start-7 lg:col-end-9">
                <H3 className="text-white">Follow us</H3>
                <SocialIconsSmall />
              </div>
            </div>
          </div>
          {/* footer top left end*/}
          <div className="col-start-10 col-end-13 max-xl:padding-t-80">
            <H3>Recent Post</H3>
            <div className="padding-t-32 flex flex-col gap-6">
              {posts.map((post, index) => (
                <StaggerEffectTwo key={index} id={index}>
                  <FooterFivePost
                    image={post.image}
                    title={post.title}
                    date={post.date}
                  />
                </StaggerEffectTwo>
              ))}
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

export default FooterHomeFive;
