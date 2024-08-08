"use client";
import commentUser1 from "@/../public/images/community/newsfeed/48-1.png";
import postUser from "@/../public/images/community/newsfeed/48-3.png";
import commentUser2 from "@/../public/images/community/newsfeed/48-4.png";
import commentUser5 from "@/../public/images/community/newsfeed/48-5.png";
import commentUser6 from "@/../public/images/community/newsfeed/48-6.png";
import postBigImage from "@/../public/images/community/newsfeed/news-big-1.png";
import postBigImage3 from "@/../public/images/community/newsfeed/news-big-3.png";
import postSmall1 from "@/../public/images/community/newsfeed/news-small-2.png";
import postSmall2 from "@/../public/images/community/newsfeed/news-small-5.png";
import BorderHorizontalN40 from "@/components/customBorder/BorderHorizontalN40";
import AddComment from "@/components/sharedComponents/AddComment";

import { IconWorld } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import AddNewPost from "./AddNewPost";
import LikeAndComment from "./LikeAndComment";
import { default as LikeCommentShare } from "./LikeCommentShare";
import PostModal from "./PostModal";
import Story from "./Story";
const NewsFeedTab = () => {
  return (
    <div className="flex flex-col gap-6">
      {/* Story section start */}
      <Story />
      {/* add new post start */}
      <AddNewPost />
      {/* social post start */}
      <div className="padding-all-32 flex flex-col justify-between gap-10 rounded-16px bg-white">
        {/* post section start */}
        <div className="flex flex-col justify-between gap-6">
          <div className="flex items-center justify-between gap-4">
            <div className="flex gap-4 max-sm:flex-col sm:items-center">
              <div>
                <Image
                  src={postUser}
                  width={48}
                  height={48}
                  alt="Post User"
                  className="rounded-full"
                />
              </div>
              <div>
                <p className="xlText font-medium">Kristin Watson</p>
                <div className="flex items-center gap-1">
                  <p className="text-sText text-neutral-500">36 minutes</p>
                  <IconWorld size={20} />
                </div>
              </div>
            </div>
            <PostModal />
          </div>
          <p className="text-sText">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <div className="flex items-center justify-between gap-4 max-lg:flex-col">
            <div className="overflow-hidden rounded-16px">
              <Image
                src={postBigImage3}
                width={388}
                height={306}
                alt="Post image one"
                className="theme-transition-3 w-full rounded-16px hover:scale-105"
              />
            </div>
            <div className="overflow-hidden rounded-16px">
              <Image
                src={postBigImage}
                width={388}
                height={306}
                alt="Post image one"
                className="theme-transition-3 w-full rounded-16px hover:scale-105"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 items-center justify-between gap-4 sm:grid-cols-2 md:grid-cols-4 ">
            <div className="overflow-hidden rounded-16px">
              <Image
                src={postSmall1}
                width={186}
                height={196}
                alt="Post image one"
                className="theme-transition-3 w-full rounded-16px hover:scale-105"
              />{" "}
            </div>
            <div className="overflow-hidden rounded-16px">
              <Image
                src={postSmall2}
                width={186}
                height={196}
                alt="Post image one"
                className="theme-transition-3 w-full rounded-16px hover:scale-105"
              />{" "}
            </div>
            <div className="overflow-hidden rounded-16px">
              <Image
                src={postSmall1}
                width={186}
                height={196}
                alt="Post image one"
                className="theme-transition-3 w-full rounded-16px hover:scale-105"
              />
            </div>
            <div className="overflow-hidden rounded-16px">
              <Image
                src={postSmall2}
                width={186}
                height={196}
                alt="Post image one"
                className="theme-transition-3 w-full rounded-16px hover:scale-105"
              />
            </div>
          </div>

          <LikeCommentShare />
        </div>
        {/* post section end */}
        {/* comment section start */}
        <div className="flex items-center justify-start gap-5">
          <div>
            <Image
              src={postUser}
              width={48}
              height={48}
              alt="Comment User Image"
              className="shrink-0 rounded-full"
            />
          </div>
          <AddComment />
        </div>
        <div className="flex gap-4 max-sm:flex-col sm:gap-6">
          <div className="shrink-0">
            <Image
              src={commentUser2}
              width={48}
              height={48}
              alt="Comment User Image"
              className="rounded-full"
            />
          </div>
          <div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-4">
                <p className="xlText font-medium text-neutral-500">
                  Guy Hawkins
                </p>
                <p className="text-sText text-neutral-500">9 days ago</p>
              </div>
              <p className="text-ellipsis text-mText text-neutral-500">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type
              </p>
            </div>
            <LikeAndComment />
            {/* replay comment end */}
          </div>
        </div>
        <div className="flex gap-4 max-sm:flex-col sm:gap-6">
          <div className="shrink-0">
            <Image
              src={commentUser5}
              width={48}
              height={48}
              alt="Comment User Image"
              className="rounded-full"
            />
          </div>
          <div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-4">
                <p className="xlText font-medium text-neutral-500">
                  Guy Hawkins
                </p>
                <p className="text-sText text-neutral-500">9 days ago</p>
              </div>
              <p className="text-ellipsis text-mText text-neutral-500">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type
              </p>
            </div>
            <LikeAndComment />
          </div>
        </div>
        <div className="flex gap-4 max-sm:flex-col sm:gap-6">
          <div className="shrink-0">
            <Image
              src={commentUser6}
              width={48}
              height={48}
              alt="Comment User Image"
              className="rounded-full"
            />
          </div>
          <div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-4">
                <p className="xlText font-medium text-neutral-500">
                  Guy Hawkins
                </p>
                <p className="text-sText text-neutral-500">9 days ago</p>
              </div>
              <p className="text-ellipsis text-mText text-neutral-500">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type
              </p>
            </div>
            <LikeAndComment />
          </div>
        </div>
        <div className="flex gap-4 max-sm:flex-col sm:gap-6">
          <div className="shrink-0">
            <Image
              src={commentUser1}
              width={48}
              height={48}
              alt="Comment User Image"
              className="rounded-full"
            />
          </div>
          <div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-4">
                <p className="xlText font-medium text-neutral-500">
                  Guy Hawkins
                </p>
                <p className="text-sText text-neutral-500">9 days ago</p>
              </div>
              <p className="text-ellipsis text-mText text-neutral-500">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type
              </p>
            </div>
            <LikeAndComment />
          </div>
        </div>
        {/* see all comment button start */}
        <Link
          href={`/`}
          className="h6 w-fit rounded-32px border border-neutral-700 px-6 py-3 font-semibold"
        >
          See All Comments
        </Link>
        {/* see all comment button end */}
        {/* comment section dnd */}
        <BorderHorizontalN40 />
        {/* second post start */}
        <div className="flex flex-col justify-between gap-6">
          <div className="flex items-center justify-between gap-4">
            <div className="flex gap-4 max-sm:flex-col sm:items-center">
              <div>
                <Image
                  src={commentUser5}
                  width={48}
                  height={48}
                  alt="Post User"
                  className="rounded-full"
                />
              </div>
              <div>
                <p className="xlText font-medium">Guy Hawkins</p>
                <div className="flex items-center gap-1">
                  <p className="text-sText text-neutral-500">36 minutes</p>
                  <IconWorld size={20} />
                </div>
              </div>
            </div>
            <PostModal />
          </div>
          <p className="text-sText">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>

          <div className="flex items-center justify-between gap-4 max-sm:flex-col">
            <div className="overflow-hidden rounded-16px">
              <Image
                src={postBigImage3}
                width={388}
                height={306}
                alt="Post image one"
                className="theme-transition-3  w-full rounded-16px hover:scale-105"
              />
            </div>
            <div className="overflow-hidden rounded-16px">
              <Image
                src={postBigImage}
                width={388}
                height={306}
                alt="Post image one"
                className="theme-transition-3  w-full rounded-16px hover:scale-105"
              />
            </div>
          </div>
          <LikeCommentShare />
        </div>
        {/* second post end */}
        <BorderHorizontalN40 />
        {/* Third post section start */}
        <div className="flex flex-col justify-between gap-6">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div>
                <Image
                  src={postUser}
                  width={48}
                  height={48}
                  alt="Post User"
                  className="rounded-full"
                />
              </div>
              <div>
                <p className="xlText font-medium">Kristin Watson</p>
                <div className="flex items-center gap-1">
                  <p className="text-sText text-neutral-500">36 minutes</p>
                  <IconWorld size={20} />
                </div>
              </div>
            </div>
            <PostModal />
          </div>
          <p className="text-sText">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <div className="grid grid-cols-1 items-center justify-between gap-4 sm:grid-cols-2 md:grid-cols-4 ">
            <div className="overflow-hidden rounded-16px">
              <Image
                src={postSmall1}
                width={186}
                height={196}
                alt="Post image one"
                className="theme-transition-3  w-full rounded-16px hover:scale-105"
              />
            </div>
            <div className="overflow-hidden rounded-16px">
              <Image
                src={postSmall2}
                width={186}
                height={196}
                alt="Post image one"
                className="theme-transition-3  w-full rounded-16px hover:scale-105"
              />
            </div>
            <div className="overflow-hidden rounded-16px">
              <Image
                src={postSmall1}
                width={186}
                height={196}
                alt="Post image one"
                className="theme-transition-3  w-full rounded-16px hover:scale-105"
              />
            </div>
            <div className="overflow-hidden rounded-16px">
              <Image
                src={postSmall2}
                width={186}
                height={196}
                alt="Post image one"
                className="theme-transition-3  w-full rounded-16px hover:scale-105"
              />
            </div>
          </div>
          <p className="text-sText">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </p>
          <LikeCommentShare />
        </div>
        {/* Third post section end */}
      </div>
    </div>
  );
};

export default NewsFeedTab;
