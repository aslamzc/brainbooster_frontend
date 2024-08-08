"use client";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
  IconMinus,
  IconPlus,
} from "@tabler/icons-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";

type Props = {
  image: StaticImageData;
  name: string;
  title: string;
};

const TeachingStarCard = ({ image, name, title }: Props) => {
  const [socialButtonOpen, setSocialButtonOpen] = useState(false);
  return (
    <div className="group relative mx-auto max-w-[306px]">
      <Image
        src={image}
        width={306}
        height={400}
        alt="Instructor image"
        className="rounded-32px"
      />
      <div className="absolute right-6 top-7 z-10 w-fit rounded-full p-2">
        <button
          onClick={() => setSocialButtonOpen(!socialButtonOpen)}
          className={`theme-transition-3 w-fit rounded-full  p-3 hover:bg-bgColorOne hover:text-white ${
            socialButtonOpen
              ? "mb-3 bg-bgColorOne text-white"
              : "mt-0 bg-white text-bgColorOne"
          }`}
        >
          {socialButtonOpen ? <IconMinus size={20} /> : <IconPlus size={20} />}
        </button>
        <div
          className={`theme-transition-3 flex flex-col gap-3 ${
            socialButtonOpen ? "visible opacity-100" : "invisible opacity-0"
          }`}
        >
          <Link
            href="#"
            className="theme-transition-4 rounded-full bg-white p-3 hover:bg-primaryColor"
          >
            <IconBrandFacebook size={20} />
          </Link>
          <Link
            href="#"
            className="theme-transition-4 rounded-full bg-white p-3 hover:bg-primaryColor"
          >
            <IconBrandTwitter size={20} />
          </Link>
          <Link
            href="#"
            className="theme-transition-4 rounded-full bg-white p-3 hover:bg-primaryColor"
          >
            <IconBrandInstagram size={20} />
          </Link>
        </div>
      </div>
      <div className="home-nine-stars-card theme-transition-4 absolute bottom-0 left-0 flex h-1/2 w-full items-end justify-between gap-6 rounded-16px pb-6 ps-6 group-hover:visible group-hover:h-full group-hover:opacity-100">
        <div className="w-full text-center text-white">
          <p className="h4 font-semibold">{name}</p>
          <p className="mt-3 text-mText">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default TeachingStarCard;
