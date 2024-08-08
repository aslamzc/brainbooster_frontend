import bookImage from "@/../public/images/homeOne/book-elements.png";
import CardWhyChoose from "@/components/Card/CardWhyChoose";
import ButtonUnderLine from "@/components/button/ButtonUnderLine";
import ElementLight from "@/components/sharedComponents/ElementLight";
import FadeLeft from "@/motionEffect/FadeLeft";
import FadeRight from "@/motionEffect/FadeRight";
import StaggerEffectTwo from "@/motionEffect/StaggerEffectTwo";
import Image from "next/image";
import { whyChooseUsData } from "../../../../public/data/whyChooseUsData";

const WhyChooseUs = () => {
  return (
    <section className="section-gap-top relative overflow-hidden">
      <div className="container">
        <div className="grid-cols-12 items-center justify-between md:grid">
          <FadeLeft className="d4 col-start-1 col-end-8 font-semibold lg:col-end-7">
            <h3>Build better growth skills, faster</h3>
          </FadeLeft>
          <div className=" col-start-8 col-end-13 lg:col-start-9">
            <FadeRight>
              <p className="lText max-md:pt-6">
                Explore new skills, deepen existing passions, and get lost in
                creativity. What you find just might surprise and inspire you.
              </p>
              <div className="mt-6">
                <ButtonUnderLine
                  buttonText="Read More"
                  link="/courses/courses-details-two"
                />
              </div>
            </FadeRight>
          </div>
        </div>
      </div>
      {/* card section */}
      <div className="relative">
        <div className="section-gap-bottom mt-60px after:absolute  after:bottom-0 after:-z-10 after:h-[85%] after:w-full after:bg-bgColorOne sm:after:h-[80%] lg:after:h-[65%]">
          <div className="container">
            <div>
              <div className=" grid items-center justify-between gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {whyChooseUsData.map(({ id, ...props }, index) => (
                  <StaggerEffectTwo key={id} id={index}>
                    <CardWhyChoose key={id} {...props} />
                  </StaggerEffectTwo>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* element */}
      <ElementLight />
      <Image
        src={bookImage}
        width={156}
        height={128}
        alt="Book Image"
        className="absolute bottom-5 left-[72px] max-[1600px]:hidden 4xl:bottom-[100px]"
      />
    </section>
  );
};

export default WhyChooseUs;
