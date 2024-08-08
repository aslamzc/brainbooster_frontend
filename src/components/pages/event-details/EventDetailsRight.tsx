import ButtonPrimaryFullWidth from "@/components/button/ButtonPrimaryFullWidth";
import LinkIconBgOne from "@/components/button/LinkIconBgOne";
import BorderHorizontal from "@/components/customBorder/BorderHorizontal";
import BorderHorizontalN40 from "@/components/customBorder/BorderHorizontalN40";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconFileText,
  IconMinus,
  IconPlus,
  IconTag,
} from "@tabler/icons-react";
import { eventInfoData } from "../../../../public/data/eventInfoData";
import EventDetailsRightVideo from "./EventDetailsRightVideo";

const EventDetailsRight = () => {
  return (
    <div className="sticky top-32 flex flex-col gap-6 rounded-16px border border-neutral-30 bg-white px-3 pb-8 pt-2">
      {/* author image */}
      <EventDetailsRightVideo />

      <BorderHorizontal />

      <div className=" flex flex-col justify-between gap-5 rounded-16px bg-neutral-20 p-4 sm:p-6">
        {eventInfoData?.map(({ id, icon, title, text }, index) => (
          <>
            <div key={id} className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                {icon}
                <span className="lText">{title}</span>
              </div>
              <p className="lText font-medium">{text}</p>
            </div>
            <div
              className={`${
                eventInfoData.length - 1 === index ? "hidden" : ""
              }`}
            >
              <BorderHorizontal />
            </div>
          </>
        ))}
      </div>
      <div className="padding-all-32 flex flex-col gap-5 rounded-16px bg-neutral-20">
        <div className="flex items-center justify-between gap-6">
          <p className="h3 font-semibold">$500</p>{" "}
          <div className="gap-32px flex items-center justify-between rounded-32px border border-neutral-40 bg-white p-1">
            <button className=" cursor-pointer rounded-full bg-bgColorOne p-3 text-primaryColor">
              <IconMinus size={20} />
            </button>
            <span className="h3 font-semibold">1</span>{" "}
            <button className=" cursor-pointer rounded-full bg-primaryColor p-3 text-bgColorOne">
              <IconPlus size={20} />
            </button>
          </div>
        </div>
        <BorderHorizontalN40 />
        <div className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <IconFileText size={32} />{" "}
            <p className="lText text-neutral-500">Total Quantity</p>
          </div>{" "}
          <p className="lText font-semibold">01</p>
        </div>
        <BorderHorizontalN40 />
        <div className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <IconTag size={32} />{" "}
            <p className="lText text-neutral-500">Total Price</p>
          </div>{" "}
          <p className="lText font-semibold">$500</p>
        </div>
      </div>

      <BorderHorizontalN40 />
      <div className="w-full px-6">
        <ButtonPrimaryFullWidth
          button
          buttonText="Enroll Course"
          link="/singup"
        />
        <div className="mt-6 flex items-center justify-center gap-6">
          <LinkIconBgOne link="/">
            <IconBrandFacebook size={20} />
          </LinkIconBgOne>
          <LinkIconBgOne link="/">
            <IconBrandInstagram size={20} />
          </LinkIconBgOne>
          <LinkIconBgOne link="/">
            <IconBrandTwitter size={20} />
          </LinkIconBgOne>
          <LinkIconBgOne link="/">
            <IconBrandLinkedin size={20} />
          </LinkIconBgOne>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsRight;
