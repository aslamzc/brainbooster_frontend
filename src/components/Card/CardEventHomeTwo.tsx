import {
  IconCalendarEvent,
  IconClockHour5,
  IconMapPinPin,
  IconTag,
} from "@tabler/icons-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import BorderHorizontal from "../customBorder/BorderHorizontal";
import VectorHomeTwoRightBottomEvent from "../vector/VectorHomeTwoRightBottomEvent";

type Props = {
  image: StaticImageData;
  eventTitle: string;
  eventTime: string;
  eventDate: string;
  eventPrice: number;
  eventLocation: string;
};

const CardEventHomeTwo = ({
  image,
  eventTitle,
  eventDate,
  eventLocation,
  eventPrice,
  eventTime,
}: Props) => {
  return (
    <div className="border-[rgba(223, 224, 228, 0.00)] theme-transition-3 relative mx-auto flex w-fit flex-col items-center justify-center gap-10 rounded-lg border bg-neutral-20 px-3 pb-8 pt-3 hover:shadow-cardOne">
      <div>
        <div className="relative overflow-hidden rounded-xl ">
          <Image
            src={image}
            width={392}
            height={306}
            alt="Event Image"
            className="theme-transition-3 mx-auto w-full rounded-xl hover:scale-105"
          />
          <VectorHomeTwoRightBottomEvent />
        </div>
      </div>
      <div className="flex flex-col gap-6 px-4 sm:px-6">
        <h4 className="h3 font-semibold ">
          <Link href="/courses/courses-details-one">{eventTitle}</Link>
        </h4>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <IconClockHour5 size={32} />
            <span className="lText">{eventTime}</span>
          </div>
          <div className="flex items-center gap-2">
            <IconCalendarEvent size={32} />
            <span className="lText">{eventDate}</span>
          </div>
        </div>
        <BorderHorizontal />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <IconTag size={32} />
            <span className="lText font-semibold">${eventPrice}</span>
          </div>
          <div className="flex items-center gap-2">
            <IconMapPinPin size={32} />

            <p className="lText font-semibold">
              <span className="font-normal">{eventLocation}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardEventHomeTwo;
