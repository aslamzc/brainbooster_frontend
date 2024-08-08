import BorderVerticalN60 from "@/components/customBorder/BorderVerticalN60";
import H3 from "@/components/sharedComponents/H3";
import H4 from "@/components/sharedComponents/H4";
import TextM from "@/components/sharedComponents/TextM";
import {
  IconArrowUpRight,
  IconClock,
  IconMapPinPin,
} from "@tabler/icons-react";
import Link from "next/link";

const EventCard = ({ title }: { title: string }) => {
  return (
    <div className="flex justify-between gap-6 rounded-16px border border-neutral-30 bg-neutral-20 px-10 py-6 max-xl:h-full max-xl:flex-col max-xl:items-center">
      <div className="flex shrink-0 flex-col gap-2">
        <H3>10</H3>
        <TextM>Apr, 2023</TextM>
      </div>
      <div className="hidden h-16 xl:block">
        <BorderVerticalN60 />
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex gap-3 max-xxl:flex-col xxl:items-center xxl:gap-6">
          <div className="flex items-center gap-2">
            <IconClock /> <TextM>02:30:am to 04:25:pm</TextM>{" "}
          </div>
          <div className="flex items-center gap-2">
            <IconMapPinPin /> <TextM>New York</TextM>{" "}
          </div>
        </div>
        <H4>{title}</H4>
      </div>
      <div className="hidden h-16 xl:block">
        <BorderVerticalN60 />
      </div>
      <Link
        href="#"
        className="group theme-transition-3 my-auto flex h-fit  w-fit shrink-0 items-center gap-2 rounded-32px border border-neutral-700 px-6 py-3 hover:border-transparent hover:bg-secondaryColorTwo hover:text-white"
      >
        <span className="h6 block font-semibold">Join Now</span>
        <span className="block">
          <IconArrowUpRight className="theme-transition-3 hover:text-white group-hover:rotate-45" />
        </span>
      </Link>
    </div>
  );
};

export default EventCard;
