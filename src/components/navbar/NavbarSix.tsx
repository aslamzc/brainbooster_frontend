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
import { useEffect, useState } from "react";
import AnimateHeight from "react-animate-height";
import { useSelector } from "react-redux";
import { navbarData } from "../../../public/data/navbarData";
import HeaderIcon from "../HeaderIcon";
import ButtonPrimary from "../button/ButtonPrimary";
import Dropdown from "../dropdown/Dropdown";
import SearchBarFullWidth from "./searchbar/SearchBarFullWidth";
import SearchBarMobile from "./searchbar/SearchBarMobile";

const category = [
  { label: "Category" },
  { label: "Programming" },
  { label: "Web Design" },
  { label: "CSE" },
];
const NavbarSix = () => {
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
      <header className=" py-4">
        <div className="container">
          <div className="flex w-full items-center justify-between max-lg:gap-5 lg:gap-5 xl:gap-[60px]">
            <Link href="/" className="shrink-0">
              <Image
                src={logo}
                width={184}
                height={38}
                alt="Home page one logo"
                className="max-sm:w-[150px]"
              />
            </Link>
            <div className="hidden grow items-center  lg:flex xxl:gap-6">
              <Dropdown options={category} />
              <div className="grow">
                <SearchBarFullWidth />
              </div>
            </div>
            {/* mobile Search bar start */}
            <SearchBarMobile />
            {/* mobile Search bar end */}
          </div>
        </div>
      </header>
      {/* top bar end */}
      {/* navbar start */}

      <nav className=" sticky top-0 z-[2000]">
        <div
          className={` theme-transition-3 top-0 z-[100] bg-neutral-20 py-3  text-neutral-500 ${
            windowHeight > 150 && "shadow-md"
          }`}
        >
          <div className="container">
            {/* desktop menu start */}
            <div className="hidden items-center justify-between lg:flex">
              <div>
                <ul className="flex items-center justify-between gap-6">
                  {navbarData
                    .slice(0, 5)
                    .map(({ id, menuTitle, path, menuItems }) => {
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
              <div className={`flex items-center gap-6 py-2 text-neutral-700`}>
                <HeaderIcon
                  icon={<IconHeart size={20} />}
                  number={1}
                  bg="bg-white"
                />
                <div>
                  <HeaderIcon
                    icon={<IconShoppingCart size={20} />}
                    number={quantity}
                    link="/cart"
                    bg="bg-white"
                  />{" "}
                </div>
                <HeaderIcon
                  icon={<IconArrowsExchange size={20} />}
                  number={1}
                  bg="bg-white"
                />
                <ButtonPrimary button buttonText="Sign Up" link="/signup" />
              </div>
            </div>
            {/* desktop menu end */}
            {/* mobile menu start */}
            <div className=" flex h-full items-center justify-between lg:hidden">
              <div
                onClick={() => setMenuOpen(!menuOpen)}
                className={`${windowHeight > 150 ? "text-bgColorTwo" : ""}`}
              >
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
                className={`visible absolute left-0 top-[80px] z-[500] h-screen w-full overflow-x-hidden overflow-y-scroll pb-[106px] transition-all duration-1000 ${
                  menuOpen
                    ? " translate-x-0 overflow-auto bg-bgColorTwo opacity-100"
                    : "invisible -translate-x-[500px] opacity-0"
                }`}
              >
                <div className="container max-sm:px-2">
                  <ul className="space-y-4 text-white">
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
                              className="pointer-events-none z-10 mt-2 space-y-3 rounded-sm bg-bgColorTwo px-5 py-2 text-white  ring-opacity-5 transition-all duration-300 focus:outline-none group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100
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
                          className="transition-all duration-150 ease-in-out hover:text-secondaryColorTwo"
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
                  bg="bg-white"
                />
                <HeaderIcon
                  icon={<IconShoppingCart size={20} />}
                  number={quantity}
                  bg="bg-white"
                />
                <HeaderIcon
                  icon={<IconArrowsExchange size={20} />}
                  number={1}
                  bg="bg-white"
                />
              </div>
            </div>
            {/* mobile menu end */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarSix;
