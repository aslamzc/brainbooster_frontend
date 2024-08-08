import NewsLetter from "@/components/pages/about-us/NewsLetter";
import EventBanner from "@/components/pages/event/EventBanner";
import EventCards from "@/components/pages/event/EventCards";
import ReviewFromStudent from "@/components/pages/event/ReviewFromStudent";
import DiscoverCourse from "@/components/sharedComponents/DiscoverCourse";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Event - Education & Online Course With Community",
  description: "Education & Online Course With Community",
};

const Event = () => {
  return (
    <>
      <EventBanner />
      <EventCards />
      <DiscoverCourse />
      <ReviewFromStudent />
      <NewsLetter />
    </>
  );
};

export default Event;
