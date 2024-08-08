"use client";
import { IconClock, IconMailOpened, IconMapPinPin } from "@tabler/icons-react";
import Image, { StaticImageData } from "next/image";
import FriendButton from "./FriendButton";

type Props = {
  image: StaticImageData;
  name: string;
  location: string;
  time: string;
};

const SingleMember = ({ image, name, location, time }: Props) => {
  return (
    <div className="padding-all-32 flex justify-between gap-6 rounded-16px border border-neutral-30 bg-neutral-20 max-md:flex-col max-sm:items-center md:items-center">
      <div className="flex items-center gap-4 max-sm:flex-col sm:gap-6">
        <div>
          <Image
            src={image}
            width={80}
            height={80}
            alt="Member"
            className="rounded-full"
          />
        </div>
        <div>
          <p className="h5 font-semibold">{name}</p>
          <div className="mt-3 flex gap-6">
            <div className="flex gap-2 text-neutral-500">
              <IconMapPinPin size={20} />{" "}
              <p className="text-mText">{location}</p>
            </div>
            <div className="flex gap-2 text-neutral-500">
              <IconClock size={20} /> <p className="text-mText">{time}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <FriendButton />
        <button className="theme-transition-3 rounded-full border border-neutral-40 bg-white p-3 hover:bg-primaryColor hover:bg-opacity-50">
          <IconMailOpened size={20} />
        </button>
      </div>
    </div>
  );
};

export default SingleMember;
