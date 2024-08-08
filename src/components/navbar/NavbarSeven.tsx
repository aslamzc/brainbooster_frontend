"use client";
import logo from "@/../public/images/homeOne/Logo.png";
import { RootState } from "@/redux/store";
import {
  IconArrowsExchange,
  IconCategory,
  IconChevronDown,
  IconGridDots,
  IconHeart,
  IconShoppingCart,
  IconX,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import AnimateHeight from "react-animate-height";
import { useSelector } from "react-redux";
import { navbarData } from "../../../public/data/navbarData";
import HeaderIcon from "../HeaderIcon";
import ButtonOutline from "../button/ButtonOutline";
import ButtonPrimary from "../button/ButtonPrimary";
import ButtonRounded from "../button/ButtonRounded";
import Dropdown from "../dropdown/Dropdown";
import DropdownNavbar from "../dropdown/DropdownNavbar";
import IconDotVertical from "../icons/IconDotVertical";
import SearchBarMobile from "./searchbar/SearchBarMobile";

const categoryOne = [
  { label: "All Category" },
  { label: "Programming" },
  { label: "Web Design" },
  { label: "CSE" },
];
const category = [
  { label: "Category", link: "/courses/courses-two" },
  { label: "Academic", link: "/courses/courses-two" },
  { label: "Language", link: "/courses/courses-two" },
  { label: "Programming", link: "/courses/courses-two" },
  { label: "CSE", link: "/courses/courses-two" },
  { label: "Art and Creative", link: "/courses/courses-two" },
];

const NavbarSeven = () => {
  // top bar
  const [buttonModalOpen, setButtonModalOpen] = useState(false);
  const buttonModalAction = () => {
    setButtonModalOpen(!buttonModalOpen);
  };
  // main menu
  const [windowHeight, setWindowHeight] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropDown, setDropDown] = useState("");
  const { quantity } = useSelector((state: RootState) => state.cart.value);

  const navBarTop = () => {
    if (window !== undefined) {
      let height = window.scrollY;
      setWindowHeight(height);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", navBarTop);
    return () => {
      window.removeEventListener("scroll", navBarTop);
    };
  }, []);

  const handleDropDown = (id: string) => {
    if (dropDown === id) {
      setDropDown("");
    } else {
      setDropDown(id);
    }
  };
  const pathName = usePathname();

  return (
    <>
      {/* top bar start */}
      <header className=" border-b border-neutral-30 py-4">
        <div className="container">
          <div className="flex items-center justify-between max-lg:gap-5 lg:gap-5 xl:gap-[60px]">
            <div className="flex grow items-center justify-between gap-4 xxl:gap-60px">
              <Link href="/" className="shrink-0">
                <Image
                  src={logo}
                  width={184}
                  height={38}
                  alt="Home page one logo"
                  className="max-sm:w-[150px]"
                />
              </Link>
              <div className="padding-s-32 hidden grow items-center gap-6 rounded-32px border border-neutral-40 bg-neutral-20 py-2 pe-2 lg:flex">
                <div className="flex items-center gap-2 border-e border-neutral-40">
                  <Dropdown options={categoryOne} />
                </div>
                <div className="flex grow items-center justify-between rounded-60px  bg-neutral-20  ">
                  <input
                    type="text"
                    placeholder="Search Courses..."
                    className="me-3 w-full grow bg-transparent placeholder:text-neutral-300 focus:outline-none"
                  />
                  <ButtonRounded iconName="Search" />
                </div>
              </div>
              {/* mobile Search bar start */}
              <SearchBarMobile />

              {/* mobile Search bar end */}
            </div>
            <div className="relative">
              <div
                className={`top-10 z-[20000] flex translate-y-0  items-center gap-2 transition-all duration-300 max-lg:absolute max-lg:w-[180px] max-lg:flex-col max-lg:justify-center max-lg:space-y-2 max-lg:rounded-sm max-lg:bg-neutral-10 max-lg:px-5 max-lg:py-6 max-lg:shadow-md max-sm:right-0 sm:right-[-10px]  md:top-11 lg:justify-between xxl:gap-6 ${
                  buttonModalOpen
                    ? "max-lg:translate-y-4 max-lg:opacity-100"
                    : "max-lg:opacity-0"
                }`}
              >
                <ButtonOutline
                  buttonText="Sing In"
                  button={true}
                  link="/signin"
                />

                <ButtonPrimary
                  buttonText="Sing Up"
                  button={true}
                  link="/signup"
                />
              </div>
              <IconDotVertical
                buttonModalAction={buttonModalAction}
                hiddenDeviceFrom="lg"
              />
            </div>
          </div>
        </div>
      </header>
      {/* top bar end */}
      {/* navbar start */}

      <nav className="sticky top-0 z-[200]">
        <div
          className={` theme-transition-3 top-0  z-[100] bg-white  py-6  
        
            ${windowHeight > 150 ? "shadow-md" : ""}`}
        >
          <div className="container">
            {/* desktop menu start */}
            <div className="hidden items-center justify-between xl:flex">
              <div
                className={`padding-s-32 padding-e-32 flex items-center gap-2 rounded-32px border border-neutral-30 bg-neutral-20 pb-4 pt-4 text-neutral-700`}
              >
                <IconCategory size={20} />
                <DropdownNavbar options={category} />
              </div>
              <div>
                <ul className="flex items-center justify-between gap-6">
                  {navbarData.map(({ id, menuTitle, path, menuItems }) => {
                    let isActive = menuItems?.some(
                      (path) => pathName == path.menuItemPath,
                    );
                    return menuItems ? (
                      <li
                        key={id}
                        className={`group relative cursor-pointer py-2 hover:text-secondaryColorTwo ${
                          isActive && "text-secondaryColorTwo"
                        }`}
                      >
                        <p className="flex">
                          <span>{menuTitle}</span> <IconChevronDown />
                        </p>
                        <ul
                          className="pointer-events-none absolute right-0 z-10 mt-2 min-w-max origin-top-right translate-y-[50px] scale-75 transform space-y-2 rounded-sm bg-bgColorTwo px-5 py-2 text-white opacity-0 shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-300 focus:outline-none group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100
                        "
                        >
                          {menuItems.map(({ id, title, menuItemPath }) => (
                            <li
                              key={id}
                              className={`shrink-0 transition-all duration-300 ease-in-out hover:translate-x-1 hover:text-secondaryColorTwo  ${
                                pathName === menuItemPath &&
                                "text-secondaryColorTwo"
                              }`}
                            >
                              <Link href={`${menuItemPath}`}>{title}</Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ) : (
                      <li
                        key={id}
                        className="transition-all duration-150 ease-in-out hover:text-secondaryColorTwo"
                      >
                        <Link href={`${path}`}>{menuTitle}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="flex items-center gap-6 py-2 text-neutral-700">
                <HeaderIcon
                  icon={<IconHeart size={20} />}
                  number={1}
                  bg="bg-neutral-20"
                />
                <div>
                  <HeaderIcon
                    icon={<IconShoppingCart size={20} />}
                    number={quantity}
                    link="/cart"
                    bg="bg-neutral-20"
                  />{" "}
                </div>
                <HeaderIcon
                  icon={<IconArrowsExchange size={20} />}
                  number={1}
                  bg="bg-neutral-20"
                />
              </div>
            </div>
            {/* desktop menu end */}
            {/* mobile menu start */}
            <div className="flex h-full items-center justify-between xl:hidden">
              <div onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? (
                  <IconX
                    size={30}
                    className={`theme-transition-8 ${
                      menuOpen ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ) : (
                  <IconGridDots
                    size={30}
                    className={`theme-transition-3 ${
                      menuOpen ? "opacity-0" : "opacity-100"
                    }`}
                  />
                )}
              </div>

              <div
                className={`visible absolute left-0 top-[100px] z-[500] h-screen w-full overflow-x-hidden overflow-y-scroll pb-[106px] transition-all duration-1000 ${
                  menuOpen
                    ? " translate-x-0 overflow-auto bg-white opacity-100"
                    : "invisible -translate-x-[500px] opacity-0"
                }`}
              >
                <div className="container max-sm:px-2">
                  <ul className="space-y-4">
                    {navbarData.map(({ id, menuTitle, path, menuItems }) => {
                      let isActive = menuItems?.some(
                        (path) => pathName == path.menuItemPath,
                      );
                      return menuItems ? (
                        <li
                          key={id}
                          className={`group relative cursor-pointer py-2 text-neutral-700 hover:text-secondaryColorTwo ${
                            isActive && "text-secondaryColorTwo"
                          }`}
                          onClick={() => handleDropDown(id)}
                        >
                          <p className="flex justify-between">
                            <span>{menuTitle}</span> <IconChevronDown />
                          </p>
                          <AnimateHeight
                            duration={500}
                            height={dropDown === id ? "auto" : 0}
                            aria-label={`example-panel-${menuTitle}`}
                          >
                            <ul
                              className="pointer-events-none z-10 mt-2 space-y-3 rounded-sm bg-white px-5 py-2 text-neutral-700 ring-opacity-5 transition-all duration-300 focus:outline-none group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100
                        "
                            >
                              {menuItems.map(({ id, title, menuItemPath }) => (
                                <li
                                  key={id}
                                  className={`shrink-0 transition-all duration-300 ease-in-out hover:translate-x-1 hover:text-secondaryColorTwo  ${
                                    pathName === menuItemPath &&
                                    "text-secondaryColorTwo"
                                  }`}
                                >
                                  <Link
                                    href={`${menuItemPath}`}
                                    onClick={() => setMenuOpen(!menuOpen)}
                                  >
                                    {title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </AnimateHeight>
                        </li>
                      ) : (
                        <li
                          key={id}
                          className="text-neutral-700 transition-all duration-150 ease-in-out hover:text-secondaryColorTwo"
                        >
                          <Link
                            href={`${path}`}
                            onClick={() => setMenuOpen(!menuOpen)}
                          >
                            {menuTitle}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>

              <div className="flex items-center gap-6 py-2 text-neutral-700">
                <HeaderIcon
                  icon={<IconHeart size={20} />}
                  number={1}
                  bg="bg-neutral-20"
                />
                <HeaderIcon
                  icon={<IconShoppingCart size={20} />}
                  number={quantity}
                  bg="bg-neutral-20"
                />
                <HeaderIcon
                  icon={<IconArrowsExchange size={20} />}
                  number={1}
                  bg="bg-neutral-20"
                />
              </div>
            </div>
            {/* mobile menu end */}
          </div>
        </div>
      </nav>
      {/* navbar end */}
    </>
  );
};

export default NavbarSeven;
