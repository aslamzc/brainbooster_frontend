import bookVideoIcon from "@/../public/images/home-six/book-video-icon.png";
import book from "@/../public/images/home-six/book.png";
import education from "@/../public/images/home-six/education.png";
import records from "@/../public/images/home-six/worlds-records.png";
import SectionHeading from "@/components/sharedComponents/SectionHeading";
import StaggerEffectTwo from "@/motionEffect/StaggerEffectTwo";
import ServiceCard from "./ServiceCard";

const HomeSixServices = () => {
  const services = [
    {
      image: education,
      title: "Exclusive Coach",
      text: "We believe in the power of education to transform",
    },
    {
      image: book,
      title: "Creative Minds",
      text: "We believe in the power of education to transform",
    },
    {
      image: bookVideoIcon,
      title: "Video Tutorials",
      text: "We believe in the power of education to transform",
    },
    {
      image: records,
      title: "Worlds Records",
      text: "We believe in the power of education to transform",
    },
  ];
  return (
    <div className="bg-neutral-20 section-gap-top section-gap-bottom overflow-hidden">
      <div className="container">
        <SectionHeading
          title="Life Learning Community Hub"
          description="Explore the philosophy that drives Edufast, shaping an educational ecosystem that values curiosity, collaboration"
          link="/"
          buttonText="Browsing Course"
        />
        <div className="padding-t-60">
          <div className="flex items-center justify-center gap-6 max-xl:flex-wrap  xl:grid-cols-4">
            {services.map((service, index) => (
              <StaggerEffectTwo key={index} id={index}>
                <ServiceCard
                  image={service.image}
                  title={service.title}
                  text={service.text}
                />
              </StaggerEffectTwo>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSixServices;
