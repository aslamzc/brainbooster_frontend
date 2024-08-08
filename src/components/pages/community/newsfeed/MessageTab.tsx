"use client";
import activeMessageUser from "@/../public/images/community/message/active-message-user.png";
import profile from "@/../public/images/community/message/profile.png";
import SearchBarNatural30 from "@/components/sharedComponents/SearchBarNatural30";
import SearchBarNatural30Send from "@/components/sharedComponents/SearchBarNatural30Send";

import {
  IconCamera,
  IconCirclePlus,
  IconDotsVertical,
  IconMicrophone,
  IconMoodSmile,
  IconPhone,
  IconTriangleFilled,
  IconVideo,
} from "@tabler/icons-react";
import Image from "next/image";
import { useState } from "react";
import { messengerData } from "../../../../../public/data/messengerData";
import AddNewPostIcon from "./AddNewPostIcon";
import MessageModal from "./MessageModal";
import MessageModalTwo from "./MessageModalTwo";

const MessageTab = () => {
  const [sidebarOpen, setSideBarOpen] = useState(false);

  return (
    <div className="sticky top-32 z-20 grid-cols-8 rounded-16px bg-white lg:grid">
      <div
        onClick={() => setSideBarOpen(false)}
        className={`theme-transition-4 absolute left-0 top-0 z-30 h-full w-full rounded-16px bg-emerald-200 lg:hidden ${
          sidebarOpen
            ? "max-lg:translate-y-0 max-lg:opacity-25 "
            : "max-lg:translate-y-[1000px] max-lg:opacity-0"
        }`}
      ></div>
      <div
        className={`padding-t-32 padding-b-32 gap-32px theme-transition-4 z-40 col-start-1 col-end-4 flex flex-col max-lg:absolute max-lg:h-full max-lg:rounded-16px ${
          sidebarOpen
            ? "max-lg:-translate-x-0 max-lg:opacity-100 "
            : "max-lg:-translate-x-[500px] max-lg:opacity-0 "
        }  max-lg:bg-white`}
      >
        <div className="padding-s-32 padding-e-32 flex w-full items-center justify-between">
          <div>
            <Image
              src={profile}
              width={66}
              height={66}
              alt="Profile image"
              className="rounded-full"
            />
          </div>
          <div className="flex items-center gap-5">
            <MessageModal /> <MessageModalTwo />
          </div>
        </div>
        {/* search bar start */}
        <div className="padding-s-32 padding-e-32">
          <SearchBarNatural30 />
        </div>
        {/* search bar end */}
        {/* friends list start */}
        <div className="friend-list-scrollbar padding-s-32 padding-e-32 max-h-[600px] overflow-y-scroll ">
          <div className="gap-32px flex flex-col">
            {messengerData.map(
              ({
                id,
                image,
                name,
                lastMessage,
                lastActiveTime,
                active,
                unseenMessage,
              }) => (
                <div
                  key={id}
                  className="flex items-center justify-between gap-5"
                >
                  <div className="flex items-center justify-between gap-5">
                    <div className="relative">
                      <Image
                        src={image}
                        width={40}
                        height={40}
                        alt="Friend list image"
                        className="rounded-full"
                      />
                      {active && (
                        <div className="absolute bottom-0 right-1 h-2 w-2 rounded-full bg-primaryColor"></div>
                      )}
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-mText font-semibold text-neutral-500">
                        {name}
                      </p>
                      <p className="text-xsText text-neutral-500">
                        {lastMessage}
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="rounded-full bg-primaryColor  px-2 text-center text-xsText">
                      {unseenMessage !== 0 && (
                        <p className="font-semibold">{unseenMessage}</p>
                      )}
                    </div>
                    <p className="text-xsText">{lastActiveTime}</p>
                  </div>
                </div>
              ),
            )}
          </div>{" "}
        </div>
        {/* friends list end */}
      </div>
      <div className="padding-all-32 col-start-4 col-end-9 border-neutral-30 lg:border-s">
        <div className="flex items-center justify-between pb-6">
          <div className="flex items-center gap-5">
            <div
              className="lg:hidden"
              onClick={() => setSideBarOpen(!sidebarOpen)}
            >
              <IconDotsVertical />
            </div>
            <div className="relative">
              <Image
                src={activeMessageUser}
                width={66}
                height={66}
                alt="Active message user"
                className="rounded-full"
              />
              <div className="absolute bottom-1 right-2 h-2 w-2 rounded-full bg-primaryColor"></div>
            </div>
            <p className="h5 font-semibold text-neutral-500">Lois Lane</p>
          </div>
          <div className="flex items-center justify-between gap-4">
            <button>
              <IconPhone />
            </button>{" "}
            <button>
              <IconVideo />
            </button>
          </div>
        </div>
        {/* message area start */}
        <div className="message-area-scrollbar padding-t-32 padding-b-32 padding-x-24 flex max-h-[634px] flex-col justify-between gap-6 overflow-y-scroll rounded-16px bg-neutral-20">
          {/* message */}
          <div className="max-w-[80%] sm:max-w-[60%] md:max-w-[40%]">
            <Image
              src={activeMessageUser}
              width={50}
              height={50}
              alt=""
              className="rounded-full"
            />
            <div className="relative mt-4  rounded-lg bg-white px-5 py-3 text-sText text-neutral-500">
              <div className="absolute -top-4 left-3 text-white">
                <IconTriangleFilled />
              </div>
              <p>Lorem Ipsum is simply dummy text of the printing</p>
            </div>
          </div>
          {/* replay message */}
          <div className="max-w-[80%] self-end sm:max-w-[60%] md:max-w-[40%]">
            <div className="relative mb-4  rounded-lg bg-white px-5 py-3 text-sText text-neutral-500">
              <p>Lorem Ipsum is simply dummy text of the printing</p>
              <div className="absolute -bottom-4 right-3 rotate-180 text-white">
                <IconTriangleFilled />
              </div>
            </div>
            <Image
              src={profile}
              width={50}
              height={50}
              alt=""
              className="float-right rounded-full"
            />
          </div>
          {/* message */}
          <div className="max-w-[80%] sm:max-w-[60%] md:max-w-[40%]">
            <Image
              src={activeMessageUser}
              width={50}
              height={50}
              alt=""
              className="rounded-full"
            />
            <div className="relative mt-4  rounded-lg bg-white px-5 py-3 text-sText text-neutral-500">
              <div className="absolute -top-4 left-3 text-white">
                <IconTriangleFilled />
              </div>
              <p>Lorem Ipsum is simply dummy text of the printing</p>
            </div>
          </div>
          {/* replay message */}
          <div className="max-w-[80%] self-end sm:max-w-[60%] md:max-w-[40%]">
            <div className="relative mb-4  rounded-lg bg-white px-5 py-3 text-sText text-neutral-500">
              <p>Lorem Ipsum is simply dummy text of the printing</p>
              <div className="absolute -bottom-4 right-3 rotate-180 text-white">
                <IconTriangleFilled />
              </div>
            </div>
            <Image
              src={profile}
              width={50}
              height={50}
              alt=""
              className="float-right rounded-full"
            />
          </div>
        </div>
        {/* message area end */}
        <div className=" flex gap-2 pt-6 sm:gap-10 sm:ps-6 sm:pt-6">
          <div className="flex items-center gap-1 sm:gap-3">
            <AddNewPostIcon icon={<IconCirclePlus />} />
            <AddNewPostIcon icon={<IconMicrophone />} />
            <AddNewPostIcon icon={<IconCamera />} />
            <AddNewPostIcon icon={<IconMoodSmile />} />
          </div>
          <div className="w-full">
            <SearchBarNatural30Send />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageTab;
