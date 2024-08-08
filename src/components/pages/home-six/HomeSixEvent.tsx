import ButtonPrimary from "@/components/button/ButtonPrimary";
import D4 from "@/components/sharedComponents/D4";
import TextL from "@/components/sharedComponents/TextL";
import EventCard from "./EventCard";
import EventVideoBanner from "./EventVideoBanner";

const HomeSixEvent = () => {
  return (
    <div className="container section-gap-top section-gap-bottom grid-cols-12 items-center gap-6 lg:grid">
      <div className="col-start-1 col-end-9">
        <div className="max-w-[636px]">
          <D4>Join Our Upcoming Events </D4>
          <TextL className="pt-6">
            Join us for a variety of exciting events that cater to your
            interests and learning needs. Our events are designed to inspire and
            educate
          </TextL>
        </div>
        <div className="padding-t-60 flex grid-cols-2 flex-col  gap-6">
          <EventCard title="Coding Challenge Championship" />
          <EventCard title="Career Development Symposium" />
          <EventCard title="Global Conference on Mitigation." />
        </div>
        <div className="padding-t-40 w-fit max-xxl:mx-auto">
          <ButtonPrimary button buttonText="See All Event" />
        </div>
      </div>

      <EventVideoBanner />
    </div>
  );
};

export default HomeSixEvent;
