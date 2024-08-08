import detailsImage1 from "@/../public/images/event-details/event-detail-1.png";
import detailsImage2 from "@/../public/images/event-details/event-detail-2.png";
import BorderHorizontal from "@/components/customBorder/BorderHorizontal";
import Li from "@/components/sharedComponents/Li";
import Ul from "@/components/sharedComponents/Ul";
import Image from "next/image";
import EventDetailsRight from "./EventDetailsRight";
import EventDetailsVideo from "./EventDetailsVideo";
const EventDetailsBody = () => {
  return (
    <div className="container padding-b-80 padding-t-60 grid-cols-12 gap-6 xl:grid">
      <div className="col-start-1 col-end-9">
        <div className="gap-32px flex flex-col">
          <div className="flex flex-col gap-6">
            <h4 className="d4 font-semibold">Tech Innovate Summit</h4>
            <p className="text-mText">
              Tech Innovate Summit is a premier event bringing together thought
              leaders, innovators, and tech enthusiasts to explore the latest
              trends and advancements in the world of technology. This summit is
              designed to inspire, educate, and foster collaboration within the
              tech community.
            </p>
          </div>
          <BorderHorizontal />
          {/* event detail start */}
          <div className="gap-32px flex flex-col">
            <div className="flex flex-col gap-4">
              <h2 className="h2 font-semibold">Day 1: Future Tech Trends</h2>
              <Ul>
                <Li>Startup Pitch Competition</Li>
                <Li>Tech Showcase: Live Demos</Li>
                <Li>Deep-Dive Sessions on Industry 4.0</Li>
                <Li>Fireside Chat with Tech Leaders</Li>
              </Ul>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="h3 font-semibold">Day 2: Innovations in Action</h2>
              <Ul>
                <Li>Startup Pitch Competition</Li>
                <Li>Tech Showcase: Live Demos</Li>
                <Li>Deep-Dive Sessions on Industry 4.0</Li>
                <Li>Fireside Chat with Tech Leaders</Li>
              </Ul>
              <p className="text-mText">
                These courses are commonly offered in both in-person and online
                formats. Online courses often include video lectures,
                interactive coding exercises, and discussion forums.
              </p>
            </div>
            <div className="flex items-center gap-6 ">
              <div>
                <Image
                  src={detailsImage1}
                  width={420}
                  height={335}
                  alt="event detail image 1"
                  className="rounded-16px"
                />{" "}
              </div>
              <div>
                <Image
                  src={detailsImage2}
                  width={420}
                  height={335}
                  alt="event detail image 2"
                  className="rounded-16px"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="h4 font-semibold">
                Day 3: Building Tomorrow&apos;s Tech
              </h2>
              <Ul>
                <Li>Startup Pitch Competition</Li>
                <Li>Tech Showcase: Live Demos</Li>
                <Li>Deep-Dive Sessions on Industry 4.0</Li>
                <Li>Fireside Chat with Tech Leaders</Li>
              </Ul>
              <p className="text-mText">
                These courses are commonly offered in both in-person and online
                formats. Online courses often include video lectures,
                interactive coding exercises, and discussion forums.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="h5 font-semibold">Speakers:</h2>
              <Ul>
                <Li>
                  [Keynote Speaker]: Dr. [Tech Expert], CEO of [Innovative Tech
                  Company]
                </Li>
                <Li>[Panelists]: [Tech Leaders from Prominent Companies]</Li>
                <Li>Deep-Dive Sessions on Industry 4.0</Li>
                <Li>
                  [Workshop Facilitators]: Experts in AI, Blockchain, and IoT
                </Li>
              </Ul>
              <p className="text-mText">
                Web Development Fundamentals courses can vary in length, ranging
                from a few weeks to a few months. It depends on the depth of
                content covered and the pace of the course.
              </p>
            </div>
            <EventDetailsVideo />
            <div className="flex flex-col gap-4">
              <h2 className="h6 font-semibold">Awards:</h2>
              <Ul>
                <Li>Tech Innovator of the Year</Li>
                <Li>Best Tech Startup</Li>
                <Li>Deep-Dive Sessions on Industry 4.0</Li>
                <Li>Outstanding Contribution to Tech</Li>
              </Ul>
              <p className="text-mText">
                Feel free to customize these details based on your event&apos;s
                specifics, such as the theme, agenda, speakers, and sponsors.
                Additionally, if your event is hosted online, you can provide
                information on the virtual platform and access details.
              </p>
            </div>
          </div>
          {/* event detail end */}
        </div>
      </div>
      <div className="col-start-9 col-end-13 max-xl:padding-t-40 xl:-mt-[200px]">
        <EventDetailsRight />
      </div>
    </div>
  );
};

export default EventDetailsBody;
