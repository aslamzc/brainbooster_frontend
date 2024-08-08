"use client";
import logo from "@/../public/images/homeOne/Logo.png";
import {
  IconArrowsExchange,
  IconCategory,
  IconChevronDown,
  IconDots,
  IconGridDots,
  IconSearch,
  IconShoppingCart,
  IconUserCircle,
  IconWorld,
  IconX,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import AnimateHeight from "react-animate-height";
import { navbarData } from "../../../public/data/navbarData";
import HeaderIcon from "../HeaderIcon";
import DropdownNavbar from "../dropdown/DropdownNavbar";
import IconDotVertical from "../icons/IconDotVertical";

const category = [
  { label: "Category", link: "/courses/courses-two" },
  { label: "Academic", link: "/courses/courses-two" },
  { label: "Language", link: "/courses/courses-two" },
  { label: "Programming", link: "/courses/courses-two" },
  { label: "CSE", link: "/courses/courses-two" },
  { label: "Art and Creative", link: "/courses/courses-two" },
];

const NavbarFour = () => {
  // top bar
  const [buttonModalOpen, setButtonModalOpen] = useState(false);
  const buttonModalAction = () => {
    setButtonModalOpen(!buttonModalOpen);
  };
  // main menu
  const [windowHeight, setWindowHeight] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropDown, setDropDown] = useState("");
  const [expanseSearch, setExpanseSearch] = useState(false);
  const [threeDotsMenu, setThreeDotsMenu] = useState(false);

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

  const handleExpanseSearch = () => {
    setExpanseSearch(!expanseSearch);
  };

  const handleDropDown = (id: string) => {
    if (dropDown === id) {
      setDropDown("");
    } else {
      setDropDown(id);
    }
  };
  const pathName = usePathname();

  return (
    <header className="sticky top-0 z-[200] border-b border-neutral-30">
      <div>
        {/* navbar start */}

        <nav className="relative">
          <div
            className={` theme-transition-3 z-[100] bg-white py-3 font-medium ${
              windowHeight > 150 && "shadow-md"
            }`}
          >
            <div
              className={`theme-transition-3 max-md:container md:padding-s-80 md:padding-e-80`}
            >
              {/* desktop menu start */}
              <div className=" hidden items-center justify-between xxl:flex">
                <div className="gap-40px flex items-center">
                  {" "}
                  <div className="gap-40px flex items-center">
                    <Link href="/home-four">
                      {" "}
                      <Image
                        src={logo}
                        width={184}
                        height={38}
                        alt="Home page one logo"
                        className="max-sm:w-[150px]"
                      />
                    </Link>

                    <div className="padding-s-32 padding-e-32 flex items-center justify-center gap-2 rounded-60px border-neutral-20 bg-neutral-20 py-4">
                      <IconCategory />
                      <DropdownNavbar options={category} />
                    </div>
                  </div>
                  <div>
                    <ul className="relative flex items-center justify-between gap-6">
                      {navbarData
                        .slice(0, 4)
                        .map(({ id, menuTitle, path, menuItems }) => {
                          let isActive = menuItems?.some(
                            (path) => pathName == path.menuItemPath,
                          );
                          return menuItems ? (
                            <li
                              key={id}
                              className={`group relative block w-full cursor-pointer py-2 hover:text-secondaryColorTwo ${
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
                                {menuItems.map(
                                  ({ id, title, menuItemPath }) => (
                                    <li
                                      key={id}
                                      className={`block w-full shrink-0 transition-all duration-300 ease-in-out hover:translate-x-1 hover:text-secondaryColorTwo  ${
                                        pathName === menuItemPath &&
                                        "text-secondaryColorTwo"
                                      }`}
                                    >
                                      <Link
                                        href={`${menuItemPath}`}
                                        className="block w-full"
                                      >
                                        {title}
                                      </Link>
                                    </li>
                                  ),
                                )}
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
                      <li
                        onMouseEnter={(e) => {
                          setThreeDotsMenu(true);
                        }}
                        onMouseLeave={() => setThreeDotsMenu(false)}
                        className="cursor-pointer py-8"
                      >
                        <IconDots />
                      </li>
                      <li>
                        <ul
                          onMouseLeave={() => setThreeDotsMenu(false)}
                          onMouseEnter={() => setThreeDotsMenu(true)}
                          className={` absolute right-[-10px] top-14 z-20 flex w-[180px] translate-y-0 flex-col  justify-center gap-2  rounded-md bg-bgColorTwo px-5 py-6 text-white shadow-md transition-all duration-300 lg:justify-between xxl:gap-3 ${
                            threeDotsMenu
                              ? "pointer-events-auto translate-y-4 opacity-100"
                              : " pointer-events-none opacity-0"
                          }`}
                        >
                          {navbarData
                            .slice(4)
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
                                  onClick={() => handleDropDown(id)}
                                  onMouseLeave={() => handleDropDown("")}
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
                                      className={`pointer-events-none right-0 z-10 mt-2 min-w-max origin-top-right transform space-y-3 rounded-sm bg-bgColorTwo px-5 py-2 text-white opacity-0  ring-opacity-5 transition-all duration-300 focus:outline-none ${
                                        dropDown === id
                                          ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
                                          : ""
                                      }`}
                                    >
                                      {menuItems.map(
                                        ({ id, title, menuItemPath }) => (
                                          <li
                                            key={id}
                                            className={`shrink-0 transition-all duration-300 ease-in-out hover:translate-x-1 hover:text-secondaryColorTwo  ${
                                              pathName === menuItemPath &&
                                              "text-secondaryColorTwo"
                                            }`}
                                          >
                                            <Link href={`${menuItemPath}`}>
                                              {title}
                                            </Link>
                                          </li>
                                        ),
                                      )}
                                    </ul>
                                  </AnimateHeight>
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
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex items-center gap-4 py-2 4xl:gap-6">
                  <div
                    className={`theme-transition-4 flex items-center justify-between rounded-60px border-neutral-40 md:bg-white ${
                      expanseSearch
                        ? "py-2 pe-2 ps-5  max-md:w-[100px] md:w-[300px] md:border lg:ps-8 xl:w-[350px] xxl:w-[350px] 4xl:w-[400px]"
                        : "w-10 "
                    }`}
                  >
                    <input
                      type="text"
                      placeholder="Search"
                      className={`me-3  w-full placeholder:text-neutral-300 focus:outline-none ${
                        expanseSearch ? "block" : "hidden"
                      }`}
                    />
                    <HeaderIcon
                      actionFunction={handleExpanseSearch}
                      icon={<IconSearch size={20} />}
                      bg="bg-neutral-20 border border-neutral-30"
                    />
                  </div>

                  <HeaderIcon
                    icon={<IconWorld size={20} />}
                    bg="bg-neutral-20 border border-neutral-30"
                  />
                  <HeaderIcon
                    icon={<IconShoppingCart size={20} />}
                    number={1}
                    bg="bg-neutral-20 border border-neutral-30"
                  />
                  <HeaderIcon
                    icon={<IconArrowsExchange size={20} />}
                    bg="bg-neutral-20 border border-neutral-30"
                  />
                  <HeaderIcon
                    icon={<IconUserCircle size={20} />}
                    bg="bg-neutral-20 border border-neutral-30"
                  />
                </div>
              </div>
              {/* desktop menu end */}
              {/* mobile menu start */}
              <div className="flex h-full items-center justify-between xxl:hidden">
                <div
                  onClick={() => setMenuOpen(!menuOpen)}
                  className={`${windowHeight > 150 ? "text-bgColorTwo" : ""}`}
                >
                  {menuOpen ? (
                    <div className="rounded-8px bg-bgColorOne p-1 text-white">
                      <IconX
                        size={30}
                        className={`theme-transition-8 ${
                          menuOpen ? "opacity-100" : "opacity-0"
                        }`}
                      />
                    </div>
                  ) : (
                    <IconGridDots
                      size={30}
                      className={`theme-transition-3 ${
                        menuOpen ? "opacity-0" : "opacity-100"
                      }`}
                    />
                  )}
                </div>

                <div className="gap-40px flex items-center">
                  <Image
                    src={logo}
                    width={184}
                    height={38}
                    alt="Home page one logo"
                    className="max-sm:w-[150px]"
                  />
                  <div className="padding-s-32 padding-e-32  hidden items-center justify-center gap-2 rounded-60px border-neutral-20 bg-neutral-20 py-4 lg:flex">
                    <IconCategory />
                    <DropdownNavbar options={category} />
                  </div>
                </div>

                <div
                  className={`visible absolute left-0 top-[67px] z-[2000] h-screen min-h-full w-full overflow-hidden overflow-y-scroll pb-[106px] transition-all duration-1000 lg:top-[86px] ${
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
                              aria-label={`example-panel-${id}`}
                            >
                              <ul
                                className="pointer-events-none z-10 mt-2 transform space-y-3 rounded-sm bg-bgColorTwo px-5 py-2 text-white ring-opacity-5 transition-all duration-300 focus:outline-none group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100
                        "
                              >
                                {menuItems.map(
                                  ({ id, title, menuItemPath }) => (
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
                                  ),
                                )}
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
                <div className="items-center gap-3 max-lg:flex sm:gap-6">
                  {/* <SearchBarMobile /> */}
                  <div className="relative flex items-center gap-6">
                    <div
                      className={`theme-transition-4 hidden items-center justify-between rounded-60px border-neutral-40 md:bg-white lg:flex ${
                        expanseSearch
                          ? "py-2 pe-2 ps-5 max-md:w-[100px] md:w-[300px] md:border lg:ps-8 xl:w-[350px] xxl:w-[350px] 4xl:w-[400px]"
                          : " w-10"
                      }`}
                    >
                      <input
                        type="text"
                        placeholder="Search"
                        className={`me-3  w-full placeholder:text-neutral-300 focus:outline-none ${
                          expanseSearch ? "block" : "hidden"
                        }`}
                      />
                      <HeaderIcon
                        actionFunction={handleExpanseSearch}
                        icon={<IconSearch size={20} />}
                        bg="bg-neutral-20 border border-neutral-30"
                      />
                    </div>

                    <div
                      className={`top-10 z-[2000] flex translate-y-0 items-center gap-2 transition-all duration-300 max-xxl:absolute max-xxl:z-20 max-xxl:flex-col max-xxl:justify-center max-xxl:space-y-2 max-xxl:rounded-sm max-xxl:bg-neutral-10 max-xxl:px-5 max-xxl:py-6 max-xxl:shadow-md max-sm:right-0 max-sm:w-20 sm:right-[-10px] sm:max-xxl:w-[180px] md:top-11 lg:justify-between xxl:gap-6 ${
                        buttonModalOpen
                          ? "max-xxl:translate-y-4 max-xxl:opacity-100"
                          : "max-xxl:opacity-0"
                      }`}
                    >
                      <HeaderIcon
                        icon={<IconWorld size={20} />}
                        bg="bg-neutral-20 border border-neutral-30"
                      />
                      <HeaderIcon
                        icon={<IconShoppingCart size={20} />}
                        number={1}
                        bg="bg-neutral-20 border border-neutral-30"
                      />
                      <HeaderIcon
                        icon={<IconArrowsExchange size={20} />}
                        bg="bg-neutral-20 border border-neutral-30"
                      />
                      <HeaderIcon
                        icon={<IconUserCircle size={20} />}
                        bg="bg-neutral-20 border border-neutral-30"
                      />
                    </div>
                    <div>
                      <IconDotVertical
                        buttonModalAction={buttonModalAction}
                        hiddenDeviceFrom="xxl"
                      />{" "}
                    </div>
                  </div>
                </div>
              </div>
              {/* mobile menu end */}
            </div>
          </div>
        </nav>
        {/* navbar end */}
      </div>
    </header>
  );
};

export default NavbarFour;
