"use client";
import logo from "@/../public/images/homeOne/Logo.png";
import { RootState } from "@/redux/store";
import {
  IconArrowsExchange,
  IconChevronDown,
  IconGridDots,
  IconHeart,
  IconShoppingCart,
  IconX,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import AnimateHeight from "react-animate-height";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { navbarData } from "../../../public/data/navbarData";
import HeaderIconPrimary from "../HeaderIconPrimary";
import ButtonOutline from "../button/ButtonOutline";
import ButtonPrimary from "../button/ButtonPrimary";
import DropdownNavbar from "../dropdown/DropdownNavbar";
import IconDotVertical from "../icons/IconDotVertical";
import SearchBar from "./searchbar/SearchBar";
import SearchBarMobile from "./searchbar/SearchBarMobile";

const category = [
  { label: "Category", link: "/courses/courses-two" },
  { label: "Academic", link: "/courses/courses-two" },
  { label: "Language", link: "/courses/courses-two" },
  { label: "Programming", link: "/courses/courses-two" },
  { label: "CSE", link: "/courses/courses-two" },
  { label: "Art and Creative", link: "/courses/courses-two" },
];

const NavbarOne = () => {
  // top bar
  const [buttonModalOpen, setButtonModalOpen] = useState(false);
  const buttonModalAction = () => {
    setButtonModalOpen(!buttonModalOpen);
  };
  // main menu
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropDown, setDropDown] = useState("");
  const { quantity } = useSelector((state: RootState) => state.cart.value);

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
      <header className="overflow-x-clip bg-primaryColor bg-opacity-[0.08] py-4">
        <div className="container">
          <div className="flex items-center justify-between max-lg:gap-5 lg:gap-5 xl:gap-[60px]">
            <div className="flex grow items-center justify-between gap-4 xxl:gap-60px">
              <Link href="/" className="shrink-0">
                <Image
                  src={logo}
                  width={184}
                  height={38}
                  alt="Home page one logo"
                  className="max-sm:h-auto max-sm:w-[150px]"
                />
              </Link>
              <div className="hidden items-center justify-between md:flex xxl:gap-6">
                <DropdownNavbar options={category} />
                <SearchBar />
              </div>
              {/* mobile Search bar start */}
              <SearchBarMobile />

              {/* mobile Search bar end */}
            </div>
            <div className="relative">
              <div
                className={`right-[-10px] top-10 z-[20000]  flex translate-y-0 items-center gap-2 transition-all duration-300 max-lg:absolute max-lg:w-[180px] max-lg:flex-col max-lg:justify-center max-lg:space-y-2 max-lg:rounded-sm max-lg:bg-neutral-10 max-lg:px-5 max-lg:py-6 max-lg:shadow-md md:top-11 lg:justify-between xxl:gap-6 ${
                  buttonModalOpen
                    ? "max-lg:translate-y-4 max-lg:opacity-100"
                    : "max-lg:invisible max-lg:opacity-0"
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

      <nav className=" sticky top-0 z-[200]">
        <div
          className={`theme-transition-8  sticky z-[100] w-full bg-bgColorOne text-white max-lg:py-4 `}
        >
          <div className="container">
            {/* desktop menu start */}
            <div className="hidden items-center justify-between lg:flex">
              <div>
                <ul className="flex items-center justify-between gap-6">
                  {navbarData.map(({ id, menuTitle, path, menuItems }) => {
                    let isActive = menuItems?.some(
                      (path) => pathName == path.menuItemPath,
                    );
                    return menuItems ? (
                      <li
                        key={uuidv4()}
                        className={`group relative cursor-pointer py-6 hover:text-primaryColor ${
                          isActive && "text-primaryColor"
                        }`}
                      >
                        <p className="flex">
                          <span>{menuTitle}</span> <IconChevronDown />
                        </p>
                        <ul
                          className="pointer-events-none absolute right-0 z-10 mt-2 min-w-max origin-top-right translate-x-12 translate-y-[50px] scale-75 transform space-y-2 rounded-sm bg-bgColorTwo px-5 py-2 text-white opacity-0 shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-300 focus:outline-none group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100
                        "
                        >
                          {menuItems.map(({ id, title, menuItemPath }) => (
                            <li
                              key={id}
                              className={`shrink-0 transition-all duration-300 ease-in-out hover:translate-x-1 hover:text-primaryColor  ${
                                pathName === menuItemPath && "text-primaryColor"
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
                        className={`transition-all duration-150 ease-in-out hover:text-primaryColor ${
                          pathName === path && "text-primaryColor"
                        }`}
                      >
                        <Link href={`${path}`}>{menuTitle}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="flex items-center gap-6 py-6">
                <HeaderIconPrimary icon={<IconHeart size={20} />} number={1} />
                <div>
                  <HeaderIconPrimary
                    icon={<IconShoppingCart size={20} />}
                    number={quantity}
                    link="/cart"
                  />{" "}
                </div>
                <HeaderIconPrimary
                  icon={<IconArrowsExchange size={20} />}
                  number={1}
                />
              </div>
            </div>
            {/* desktop menu end */}
            {/* mobile menu start */}
            <div className="flex h-full items-center justify-between lg:hidden ">
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
                className={`visible absolute left-0 top-[94px] z-20 h-screen w-full overflow-x-hidden overflow-y-scroll pb-[106px] transition-all duration-1000 ${
                  menuOpen
                    ? " translate-x-0 overflow-y-auto bg-bgColorTwo opacity-100"
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
                          className={`group relative cursor-pointer py-2 hover:text-primaryColor ${
                            isActive && "text-primaryColor"
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
                              className="pointer-events-none  z-10 mt-2 transform space-y-3 rounded-sm bg-bgColorTwo px-5 py-2 text-white ring-opacity-5 transition-all duration-300 focus:outline-none group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100
                        "
                            >
                              {menuItems.map(({ id, title, menuItemPath }) => (
                                <li
                                  key={id}
                                  className={`shrink-0 transition-all duration-300 ease-in-out hover:translate-x-1 hover:text-primaryColor  ${
                                    pathName === menuItemPath &&
                                    "text-primaryColor"
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
                          className="transition-all duration-150 ease-in-out hover:text-primaryColor"
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

              <div className="flex items-center gap-6 py-2">
                <HeaderIconPrimary icon={<IconHeart size={20} />} number={1} />
                <HeaderIconPrimary
                  icon={<IconShoppingCart size={20} />}
                  number={quantity}
                />
                <HeaderIconPrimary
                  icon={<IconArrowsExchange size={20} />}
                  number={1}
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

export default NavbarOne;
