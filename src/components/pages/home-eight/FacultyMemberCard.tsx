"use client";
import H4 from "@/components/sharedComponents/H4";
import TextM from "@/components/sharedComponents/TextM";
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

const FacultyMemberCard = ({ image, name, title }: Props) => {
  const [socialButtonOpen, setSocialButtonOpen] = useState(false);

  return (
    <div className="gap-32px mx-auto flex w-fit flex-col">
      <div className="relative">
        <Image
          src={image}
          width={306}
          height={306}
          alt="Faculty instructor image"
          className="rounded-16px "
        />{" "}
        <div
          className={`theme-transition-4 absolute -bottom-7 right-6 w-fit rounded-full   ${
            socialButtonOpen ? "bg-primaryColor" : ""
          }`}
        >
          <div
            className={`theme-transition-4 flex flex-col gap-3 p-2 ${
              socialButtonOpen ? "visible  opacity-100" : "invisible  opacity-0"
            }`}
          >
            <Link
              href="/"
              className="theme-transition-3 rounded-full border border-neutral-700 p-3 hover:bg-neutral-700 hover:text-primaryColor"
            >
              <IconBrandFacebook size={20} />
            </Link>
            <Link
              href="/"
              className="theme-transition-3 rounded-full border border-neutral-700 p-3 hover:bg-neutral-700 hover:text-primaryColor"
            >
              <IconBrandTwitter size={20} />
            </Link>
            <Link
              href="/"
              className="theme-transition-3 rounded-full border border-neutral-700 p-3 hover:bg-neutral-700 hover:text-primaryColor"
            >
              <IconBrandInstagram size={20} />
            </Link>
          </div>
          <div className="rounded-full bg-primaryColor p-2">
            <button
              onClick={() => setSocialButtonOpen(!socialButtonOpen)}
              className={` w-fit rounded-full bg-bgColorTwo p-3 text-primaryColor `}
            >
              {socialButtonOpen ? (
                <IconMinus size={20} />
              ) : (
                <IconPlus size={20} />
              )}
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 px-5">
        <H4>{name}</H4>
        <TextM>{title}</TextM>
      </div>
    </div>
  );
};

export default FacultyMemberCard;
