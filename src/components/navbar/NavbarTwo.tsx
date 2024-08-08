"use client";
import logo from "@/../public/images/homeTwo/logo.png";
import {
  IconArrowsExchange,
  IconShoppingCart,
  IconUserCircle,
  IconWorld,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import HeaderIcon from "../HeaderIcon";
import Dropdown from "../dropdown/Dropdown";
import IconDotVertical from "../icons/IconDotVertical";
import SearchBarDark from "./searchbar/SearchBarDark";

const category = [
  { label: "Category" },
  { label: "Programming" },
  { label: "Web Design" },
  { label: "CSE" },
];

const NavbarTwo = () => {
  // top bar
  const [buttonModalOpen, setButtonModalOpen] = useState(false);
  const [windowHeight, setWindowHeight] = useState(0);

  const buttonModalAction = () => {
    setButtonModalOpen(!buttonModalOpen);
  };

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

  return (
    <header className="sticky top-0 z-[200]">
      <div>
        {/* top bar start */}
        <div
          className={`bg-bgColorOne py-6 ${windowHeight > 150 && "shadow-md"}`}
        >
          <div className="container">
            <div className="flex items-center justify-between max-lg:gap-5 lg:gap-5 xl:gap-[60px]">
              <div className="flex grow items-center  gap-6 max-lg:justify-between xxl:gap-60px">
                <Link href="/" className="shrink-0">
                  <Image
                    src={logo}
                    width={184}
                    height={38}
                    alt="Home page one logo"
                    className="max-sm:w-[150px]"
                  />
                </Link>
                <div className="hidden items-center justify-between  lg:flex xxl:gap-6">
                  <Dropdown options={category} textColor="text-white" />
                  <SearchBarDark />
                </div>

                {/* mobile Search bar end */}
              </div>
              <div className="hidden items-center gap-6 py-2 md:flex">
                <HeaderIcon
                  icon={<IconWorld color="#dfff5e" size={20} />}
                  number={1}
                />
                <HeaderIcon
                  icon={<IconShoppingCart color="#dfff5e" size={20} />}
                  number={1}
                />
                <HeaderIcon
                  icon={<IconArrowsExchange color="#dfff5e" size={20} />}
                  number={1}
                />
                <HeaderIcon
                  icon={<IconUserCircle color="#dfff5e" size={20} />}
                />
              </div>
              {/* small device dropdown */}
              <div className="md:hidden">
                <div
                  className={`right-0 top-16 z-[2000]  flex translate-y-0 items-center gap-2 transition-all duration-300 max-lg:absolute max-lg:z-20 max-lg:w-[280px] max-lg:flex-col max-lg:justify-center max-lg:space-y-2 max-lg:rounded-sm max-lg:bg-bgColorOne max-lg:px-5 max-lg:py-6 max-lg:shadow-md md:top-11 lg:justify-between xxl:gap-6 ${
                    buttonModalOpen
                      ? "max-lg:translate-y-4 max-lg:opacity-100"
                      : "max-lg:opacity-0"
                  }`}
                >
                  <div className=" flex items-center gap-6 py-2">
                    <HeaderIcon
                      icon={<IconWorld color="#dfff5e" size={20} />}
                      number={1}
                    />
                    <HeaderIcon
                      icon={<IconShoppingCart color="#dfff5e" size={20} />}
                      number={1}
                    />
                    <HeaderIcon
                      icon={<IconArrowsExchange color="#dfff5e" size={20} />}
                      number={1}
                    />
                    <HeaderIcon
                      icon={<IconUserCircle color="#dfff5e" size={20} />}
                    />
                  </div>
                </div>
              </div>
              <IconDotVertical
                buttonModalAction={buttonModalAction}
                hiddenDeviceFrom="md"
              />
            </div>
          </div>
        </div>
        {/* top bar end */}
      </div>
    </header>
  );
};

export default NavbarTwo;
