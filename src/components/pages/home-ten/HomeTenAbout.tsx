import about from "@/../public/images/home-ten/about.png";
import image1 from "@/../public/images/home-ten/global-courses.png";
import image3 from "@/../public/images/home-ten/marketing.png";
import image2 from "@/../public/images/home-ten/primary-school.png";
import ButtonUnderLine from "@/components/button/ButtonUnderLine";
import D2 from "@/components/sharedComponents/D2";
import D4 from "@/components/sharedComponents/D4";
import TextL from "@/components/sharedComponents/TextL";
import StaggerEffectTwo from "@/motionEffect/StaggerEffectTwo";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import HomeEightAboutInfo from "../home-eight/HomeEightAboutInfo";
const HomeTenAbout = () => {
  const infoData = [
    {
      image: image1,
      title: "Global Learning Experiences",
      text: "Edufast Abroad offers a diverse range of study programs designed to immerse students in global learning experiences.",
    },
    {
      image: image2,
      title: "Academic Excellence",
      text: "Our programs are anchored in academic excellence, providing students with access to world-class institutions",
    },
    {
      image: image3,
      title: "Holistic Development",
      text: "Beyond academics, Edufast Abroad focuses on holistic development. Our programs emphasize the development",
    },
  ];
  return (
    <div className="overflow-x-clip">
      <div className="container relative flex justify-end">
        <Image
          src={about}
          width={1608}
          height={500}
          alt="About section image"
          className="max-w-[unset]"
        />{" "}
        <div
          className="padding-t-60 padding-b-60 absolute bottom-0 right-0 flex flex-col gap-3 bg-white p-8 text-center
        sm:gap-6"
        >
          <D2>300k</D2>
          <TextL>Students Community</TextL>
        </div>
      </div>
      <div className="container section-gap-top section-gap-bottom grid-cols-12 items-center gap-6 lg:grid">
        <div className="col-start-1 col-end-7">
          <D4>Welcome to Edufast Abroad</D4>
          <TextL className="pt-6">
            Welcome to Edufast Abroad, where we believe that education knows no
            borders. Our commitment extends beyond traditional classrooms
          </TextL>
          <div className="padding-t-40">
            <ButtonUnderLine buttonText="Read More" />
          </div>
        </div>
        <div className="col-start-7 col-end-13 max-lg:padding-t-40 xl:col-start-8">
          {" "}
          <div className="gap-32px flex flex-col">
            {infoData.map((info, index) => (
              <StaggerEffectTwo key={uuidv4()} id={index}>
                <HomeEightAboutInfo
                  image={info.image}
                  title={info.title}
                  text={info.text}
                />
              </StaggerEffectTwo>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTenAbout;
