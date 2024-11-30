"use client";
import ElementLightHomeFourInstructor from "@/components/sharedComponents/ElementLightHomeFourInstructor";
import FadeLeft from "@/motionEffect/FadeLeft";
import FadeRight from "@/motionEffect/FadeRight";

const AboutUS = () => {
  return (
    <section className="section-gap-top section-gap-bottom relative overflow-hidden bg-neutral-20">
      <div className="container">
        <div className="mx-auto h-fit max-w-[696px] text-center">
          <FadeLeft>
            <h4 className="d4 font-semibold">About Us</h4>
          </FadeLeft>
          <FadeRight>
            <p className="lText mt-6">
              Welcome to the Educational Learning Quiz Platform – your gateway to accessible and engaging learning experiences.
            </p>
            <p className="lText mt-6">
              n today's globalized world, we believe that education should be inclusive and adaptable to the needs of diverse learners. Our platform bridges the gap by providing an innovative, multilingual environment where learning is enhanced through interactive quizzes and modern technologies.
            </p>
          </FadeRight>
          <FadeLeft>
            <h4 className="d4 font-semibold mt-10">Our Mission</h4>
          </FadeLeft>
          <FadeRight>
            <p className="lText mt-6">
              To democratize education by creating a versatile learning platform that empowers learners and educators across the globe, regardless of language or location.
            </p>
          </FadeRight>
          <FadeLeft>
            <h4 className="d4 font-semibold mt-10">What We Offer</h4>
          </FadeLeft>
          <FadeRight>
            <p className="lText mt-6">
              <b>Multilingual Learning</b>
            </p>
            <p className="lText">
              Break down language barriers with our real-time translation tools, supporting learners in their native languages
            </p>
            <p className="lText mt-6">
              <b>Interactive Quizzes</b>
            </p>
            <p className="lText">
              Reinforce knowledge and assess understanding through dynamic and engaging quizzes
            </p>
            <p className="lText mt-6">
              <b>AI-Powered Innovation</b>
            </p>
            <p className="lText">
              Utilize cutting-edge AI, like ChatGPT, to generate diverse and contextual quizzes, ensuring relevance and quality
            </p>
            <p className="lText mt-6">
              <b>User-Friendly Interface</b>
            </p>
            <p className="lText">
              Experience seamless navigation with a responsive and intuitive design tailored for all devices
            </p>
            <p className="lText mt-6">
              <b>Comprehensive Admin Controls</b>
            </p>
            <p className="lText">
              Empower educators and administrators with tools to create, manage, and oversee educational content effectively
            </p>
          </FadeRight>
          <FadeLeft>
            <h4 className="d4 font-semibold mt-10">Why Choose Us?</h4>
          </FadeLeft>
          <FadeRight>
            <p className="lText mt-6">
              With a strong foundation in advanced technology and a focus on user-centric design, we’re setting the standard for next-generation educational tools. Whether you’re a student aiming to excel, an educator creating meaningful assessments, or an institution seeking scalable solutions, our platform adapts to your needs
            </p>
          </FadeRight>
        </div>
      </div>
      <ElementLightHomeFourInstructor />
    </section>
  );
};

export default AboutUS;
