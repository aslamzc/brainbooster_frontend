import primarySchool from "@/../public/images/home-nine/about-primary-school.png";
import sectionImage from "@/../public/images/home-nine/about-section.png";
import programmingLanguage from "@/../public/images/home-nine/programing-language.png";
import videoTutorial from "@/../public/images/home-nine/video-tTutorials.png";
import ButtonPrimary from "@/components/button/ButtonPrimary";
import BorderHorizontal from "@/components/customBorder/BorderHorizontal";
import D4 from "@/components/sharedComponents/D4";
import TextL from "@/components/sharedComponents/TextL";
import Fade from "@/motionEffect/Fade";
import FadeLeft from "@/motionEffect/FadeLeft";
import FadeRight from "@/motionEffect/FadeRight";
import Image from "next/image";
import HomeEightAboutInfo from "../home-eight/HomeEightAboutInfo";
import BannerInspireText from "./BannerInspireText";

const AboutSchool = () => {
  return (
    <div className="bg-neutral-20 section-gap-top section-gap-bottom overflow-hidden">
      <div className="container grid-cols-12 items-center gap-6 md:grid">
        <div className="col-start-1 col-end-7 lg:col-end-6">
          <Fade>
            <Image
              src={sectionImage}
              width={526}
              height={694}
              alt="About section image"
            />
          </Fade>
        </div>
        <div className="col-start-7 col-end-13 flex flex-col max-xxl:padding-t-80">
          <BannerInspireText />
          <FadeLeft>
            <D4 className="pt-4">Welcome to Edufast Schools</D4>
          </FadeLeft>
          <div className="gap-40px flex flex-col  pt-6">
            <FadeRight>
              <TextL>
                At Edufast School, we are more than just an educational
                institution; we are a community dedicated to nurturing young
                minds.
              </TextL>
            </FadeRight>
            <FadeLeft className="gap-32px flex flex-col">
              <HomeEightAboutInfo
                image={programmingLanguage}
                title="Academic Excellence"
                text="Our rigorous academic programs are designed to challenge."
              />
              <HomeEightAboutInfo
                image={primarySchool}
                title="Passionate Educators"
                text="At Edufast School, we believe in the power of exceptional educators. "
              />
              <HomeEightAboutInfo
                image={videoTutorial}
                title="Extracurricular Excellence"
                text="Beyond academics, Edufast School offers a vibrant array of extracurricular activitie"
              />
            </FadeLeft>
            <BorderHorizontal />
            <Fade>
              <ButtonPrimary button buttonText="Read More" />
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSchool;
