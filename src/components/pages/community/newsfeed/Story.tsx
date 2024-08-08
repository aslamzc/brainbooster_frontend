"use client";
import story1 from "@/../public/images/community/newsfeed/Story-1.png";
import story2 from "@/../public/images/community/newsfeed/Story-2.png";
import story3 from "@/../public/images/community/newsfeed/Story-3.png";
import story4 from "@/../public/images/community/newsfeed/Story-4.png";
import icon from "@/../public/images/community/newsfeed/replay-1.png";
import { IconPlus } from "@tabler/icons-react";
import Image from "next/image";
import { ChangeEvent, MouseEvent, useRef, useState } from "react";

const Story = () => {
  const [avatar, setAvatar] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files?.[0] as Blob);

    reader.onload = (e) => {
      let img = e.target?.result as string;
      setAvatar(img);
    };
  };

  const handleImageClick = () => {
    // Trigger the hidden file input when the image is clicked
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  // Drag function
  const sliderRef = useRef<HTMLDivElement>(null);
  const [mouseDown, setMouseDown] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);

  const startDragging = (e: MouseEvent) => {
    if (sliderRef.current) {
      setMouseDown(true);
      setStartX(e.nativeEvent.pageX - sliderRef.current.offsetLeft);
      setScrollLeft(sliderRef.current.scrollLeft);
    }
  };

  const stopDragging = () => {
    setMouseDown(false);
  };

  const move = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (!mouseDown || !sliderRef.current) return;
    const x = e.nativeEvent.pageX - sliderRef.current.offsetLeft;
    const scroll = x - startX;
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = scrollLeft - scroll;
    }
  };

  return (
    <div
      ref={sliderRef}
      onMouseMove={move}
      onMouseDown={startDragging}
      onMouseUp={stopDragging}
      onMouseLeave={stopDragging}
      className="parent story-scrollbar padding-all-32 flex w-full items-center justify-between  gap-4 overflow-x-scroll rounded-16px bg-white"
    >
      <div className="relative shrink-0">
        <Image
          src={avatar ? avatar : story3}
          width={146}
          height={200}
          alt="story image"
          className="rounded-16px "
        />
        <div className="absolute left-1/2 top-2/3 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-between gap-2 text-center ">
          <input
            type="file"
            ref={inputRef}
            className="hidden"
            onChange={handleChange}
          />

          <button
            onClick={handleImageClick}
            className="w-fit rounded-full bg-primaryColor p-1"
          >
            <IconPlus />
          </button>

          <p className="text-xsText font-semibold text-white">Add Story</p>
        </div>
      </div>
      <div className="relative shrink-0">
        <Image
          src={story2}
          width={146}
          height={200}
          alt="story image"
          className="rounded-16px"
        />
        <div className="absolute left-2 top-2">
          <Image
            src={icon}
            width={38}
            height={38}
            alt="Icon"
            className="rounded-full"
          />
        </div>
      </div>
      <div className="relative shrink-0">
        <Image
          src={story1}
          width={146}
          height={200}
          alt="story image"
          className="rounded-16px"
        />
        <div className="absolute left-2 top-2">
          <Image
            src={icon}
            width={38}
            height={38}
            alt="Icon"
            className="rounded-full"
          />
        </div>
      </div>
      <div className="relative shrink-0">
        <Image
          src={story4}
          width={146}
          height={200}
          alt="story image"
          className="rounded-16px"
        />
        <div className="absolute left-2 top-2">
          <Image
            src={icon}
            width={38}
            height={38}
            alt="Icon"
            className="rounded-full"
          />
        </div>
      </div>
      <div className="relative shrink-0">
        <Image
          src={story2}
          width={146}
          height={200}
          alt="story image"
          className="rounded-16px"
        />
        <div className="absolute left-2 top-2">
          <Image
            src={icon}
            width={38}
            height={38}
            alt="Icon"
            className="rounded-full"
          />
        </div>
      </div>
      <div className="relative shrink-0">
        <Image
          src={story2}
          width={146}
          height={200}
          alt="story image"
          className="rounded-16px"
        />
        <div className="absolute left-2 top-2">
          <Image
            src={icon}
            width={38}
            height={38}
            alt="Icon"
            className="rounded-full"
          />
        </div>
      </div>
      <div className="relative shrink-0">
        <Image
          src={story2}
          width={146}
          height={200}
          alt="story image"
          className="rounded-16px"
        />
        <div className="absolute left-2 top-2">
          <Image
            src={icon}
            width={38}
            height={38}
            alt="Icon"
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Story;
