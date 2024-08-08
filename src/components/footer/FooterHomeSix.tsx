import logo from "@/../public/images/home-four/footer-icon.png";
import StaggerEffectUl from "@/motionEffect/StaggerEffectUl";
import Image from "next/image";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import ReactCounterUp from "../sharedComponents/Counter";
import D2 from "../sharedComponents/D2";
import TextM from "../sharedComponents/TextM";
import FooterHomeSixBottom from "./FooterHomeSixBottom";
import FooterSixSearchBar from "./FooterSixSearchBar";

const FooterHomeSix = () => {
  const menuItemsOne = [
    { link: "/", menuTitle: "Home" },
    { link: "/about-us", menuTitle: "About us" },
    { link: "/courses/course-one", menuTitle: "Courses" },
    { link: "/instructor", menuTitle: "Instructor" },
  ];
  const menuItemsTwo = [
    { link: "/community", menuTitle: "Community" },
    { link: "/event", menuTitle: "Events" },
    { link: "/products", menuTitle: "Shop" },
    { link: "/blog/blog-classic", menuTitle: "Blog" },
  ];

  return (
    <footer className=" overflow-hidden bg-bgColorOne text-white">
      <div className="">
        {/* footer top */}
        <div className="container padding-t-80 padding-b-80 flex items-center justify-between gap-6 max-lg:flex-col">
          <ul className="flex list-disc  max-sm:flex-col sm:items-center sm:gap-10">
            {menuItemsOne.map((menuItem, index) => (
              <StaggerEffectUl
                key={uuidv4()}
                id={index}
                className="theme-transition-3 text-mText hover:text-primaryColor"
              >
                <Link href={`${menuItem.link}`}>{menuItem.menuTitle}</Link>
              </StaggerEffectUl>
            ))}
          </ul>
          <Link href="/">
            <Image src={logo} width={184} height={39} alt="footer logo" />
          </Link>
          <ul className="flex list-disc  max-sm:flex-col sm:items-center sm:gap-10">
            {menuItemsTwo.map((menuItem, index) => (
              <StaggerEffectUl
                key={uuidv4()}
                id={index}
                className="theme-transition-3 text-mText hover:text-primaryColor"
              >
                <Link href={`${menuItem.link}`}>{menuItem.menuTitle}</Link>
              </StaggerEffectUl>
            ))}
          </ul>
        </div>
        <div className="border-b border-t border-white border-opacity-[0.15]">
          <div className="container grid-cols-12 gap-x-6 lg:grid  ">
            <div className="col-start-1 col-end-4 flex flex-col gap-6 text-center max-lg:padding-t-60 lg:section-gap-top lg:section-gap-bottom">
              <D2>
                <ReactCounterUp end={15} />
                K+
              </D2>
              <TextM>Customers are Satisfied with our work</TextM>
            </div>
            <div className="col-start-4 col-end-5 mx-auto hidden border-e border-white border-opacity-[.15] lg:block"></div>
            <div className="col-start-5 col-end-8 flex  flex-col gap-6 text-center max-lg:padding-t-60 lg:section-gap-top lg:section-gap-bottom">
              <D2>
                <ReactCounterUp end={9.5} decimals={1} />k
              </D2>
              <TextM>Websites are already existing</TextM>
            </div>
            <div className="col-start-8 col-end-9 mx-auto hidden border-e border-white border-opacity-[.15] lg:block"></div>
            <div className="col-start-9 col-end-13 my-auto grow max-lg:padding-t-80 max-lg:padding-b-80">
              <FooterSixSearchBar title="Subscribe for newsletters" />
            </div>
          </div>
        </div>
        {/* footer bottom */}
        <FooterHomeSixBottom />
      </div>
    </footer>
  );
};

export default FooterHomeSix;
