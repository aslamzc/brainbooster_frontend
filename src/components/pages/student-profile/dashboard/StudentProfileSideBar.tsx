"use client";
import sidebarImage from "@/../public/images/student-profile/illustration.png";
import ButtonPrimaryFullWidthSmall from "@/components/button/ButtonPrimaryFullWidthSmall";
import BorderHorizontalN40 from "@/components/customBorder/BorderHorizontalN40";
import TextM from "@/components/sharedComponents/TextM";
import TextXL from "@/components/sharedComponents/TextXL";
import { IconAdjustmentsHorizontal, IconX } from "@tabler/icons-react";
import Image from "next/image";
import { useState } from "react";
import StudentProfileSidebarItem from "./StudentProfileSidebarItem";

type Props = {
  sidebarData: { id: string; link: string; icon: JSX.Element; title: string }[];
  instructorProfile: boolean;
};

// <T,>({ sidebarData }: Props<T>)

const StudentProfileSideBar = ({ sidebarData, instructorProfile }: Props) => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const showSidebar = () => {
    setShowSideDrawer(!showSideDrawer);
    disableScroll();
  };

  const disableScroll = () => {
    if (!showSideDrawer) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };
  return (
    <div className="sticky top-32 ">
      <div className=" mb-6 flex items-center justify-between rounded-16px bg-white p-6 xl:hidden">
        <TextXL>Menu</TextXL>{" "}
        <button className=" text-secondaryColorTwo" onClick={showSidebar}>
          <IconAdjustmentsHorizontal size={32} />
        </button>
      </div>
      <div
        onClick={showSidebar}
        className={`theme-transition-8 fixed left-0 top-0 h-screen w-screen  bg-secondaryColorTwo bg-opacity-25 xl:hidden ${
          showSideDrawer ? "translate-y-0" : "-translate-y-full"
        }`}
      ></div>
      <div
        className={`max-xl:theme-transition-6 max-xl:fixed max-xl:bottom-0 max-xl:z-[500]  max-xl:h-screen xl:col-start-1 xl:col-end-2 ${
          showSideDrawer ? "max-xl:left-0" : "max-xl:-translate-x-[500px]"
        }`}
      >
        <div className="padding-all-40 rounded-16px bg-white max-xl:h-full">
          <div className="max-xl:flex max-xl:items-center max-xl:justify-between">
            <TextM className="font-medium">Dashboard</TextM>{" "}
            <button
              className="rounded-full bg-neutral-30 p-2 text-secondaryColorTwo shadow-sm xl:hidden"
              onClick={showSidebar}
            >
              <IconX />
            </button>
          </div>
          <div className="py-6">
            <BorderHorizontalN40 />
          </div>
          <div className="dashboard-scrollbar flex flex-col gap-3 max-xl:max-h-[80vh] max-xl:overflow-y-scroll max-xl:rounded-16px max-xl:bg-secondaryColorTwo max-xl:bg-opacity-10 max-xl:p-5">
            <ul className=" flex flex-col gap-3">
              {sidebarData.map(({ id, ...props }) => (
                <StudentProfileSidebarItem key={id} {...props} />
              ))}
            </ul>
            {instructorProfile ? (
              ""
            ) : (
              <>
                <div className="xl:padding-t-40">
                  <Image
                    src={sidebarImage}
                    width={226}
                    height={214}
                    alt="Sidebar Image"
                    className="max-xl:hidden"
                  />
                  <div className="pt-4">
                    <p className="text-sText text-neutral-500">
                      Upgrade to <span className="font-semibold">PRO</span> for
                      more resources
                    </p>
                  </div>
                </div>
                <div className="padding-t-40">
                  <ButtonPrimaryFullWidthSmall
                    button={false}
                    buttonText="Upgrade Now"
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfileSideBar;
