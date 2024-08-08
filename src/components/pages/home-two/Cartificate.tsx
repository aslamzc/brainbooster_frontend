import certificate from "@/../public/images/homeTwo/certificate.png";
import FadeLeft from "@/motionEffect/FadeLeft";
import FadeRight from "@/motionEffect/FadeRight";
import StaggerEffectTwo from "@/motionEffect/StaggerEffectTwo";
import {
  IconAward,
  IconLockOpen,
  IconSailboat2,
  IconStar,
} from "@tabler/icons-react";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
const Certificate = () => {
  const items = [
    {
      icon: <IconAward size={32} />,
      title: "Learn from Industry Experts",
      description:
        "Lorem ipsum dolor sit amet, conse ctetur adipisc amus ac iaculis arcu.",
    },
    {
      icon: <IconStar size={32} />,
      title: "Free Resources",
      description:
        "Lorem ipsum dolor sit amet, conse ctetur adipisc amus ac iaculis arcu.",
    },
    {
      icon: <IconLockOpen size={32} />,
      title: "Learn Anytime, Anywhere",
      description:
        "Lorem ipsum dolor sit amet, conse ctetur adipisc amus ac iaculis arcu.",
    },
    {
      icon: <IconSailboat2 size={32} />,
      title: "Skill-based Learning",
      description:
        "Lorem ipsum dolor sit amet, conse ctetur adipisc amus ac iaculis arcu.",
    },
  ];
  return (
    <section className="section-gap-top section-gap-bottom overflow-hidden bg-bgColorOne text-white">
      <div className="container">
        <div className="mx-auto max-w-[605px] text-center">
          <FadeLeft>
            <h3 className="d4 font-semibold  ">
              Building strong foundational skills
            </h3>
          </FadeLeft>
          <FadeRight>
            <p className="lText pt-6">
              Online courses certification section design for showcase your
              certificate program features.
            </p>
          </FadeRight>
        </div>
        <div className="mt-60px grid-cols-12 items-center justify-between gap-6 xl:grid">
          <div className="col-start-1 col-end-6 ">
            <Image
              src={certificate}
              width={526}
              height={375}
              alt="Certificate image"
              className="block shrink-0 animate-pulse-smooth max-xl:mx-auto"
            />
          </div>
          <div className="col-start-7 col-end-13 mt-5 grid-cols-2 gap-8 sm:grid sm:max-xl:mt-10 xl:gap-10 xxl:gap-60px">
            {items.map((item, index) => (
              <StaggerEffectTwo key={uuidv4()} id={index}>
                <div key={index} className="max-sm:pt-8">
                  <div className="text-primaryColor">{item.icon}</div>
                  <h4 className="mt-6 text-h5 font-semibold">{item.title}</h4>
                  <p className="mt-4 text-sText">{item.description}</p>
                </div>
              </StaggerEffectTwo>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificate;
