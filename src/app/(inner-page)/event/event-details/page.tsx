import bannerImage from "@/../public/images/event-details/event-details-banner.png";
import NewsLetter from "@/components/pages/about-us/NewsLetter";
import EventDetailsBody from "@/components/pages/event-details/EventDetailsBody";
import Banner1600WithBreadCrumbs from "@/components/sharedComponents/Banner1600WithBreadCrumbs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Event Details - Education & Online Course With Community",
  description: "Education & Online Course With Community",
};

const EventDetails = () => {
  return (
    <div className="bg-neutral-20">
      <Banner1600WithBreadCrumbs
        bannerImage={bannerImage}
        page="Event"
        pageLink="/event"
        subPage="Event Details"
      />
      <EventDetailsBody />
      <NewsLetter />
    </div>
  );
};

export default EventDetails;
