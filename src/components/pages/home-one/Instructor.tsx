import arrow from "@/../public/images/homeOne/instructor-element-arrow.png";
import dollar from "@/../public/images/homeOne/instructor-element-dollar.png";
import instructor from "@/../public/images/homeOne/instructor.png";
import ButtonBlack from "@/components/button/ButtonBlack";
import Fade from "@/motionEffect/Fade";
import FadeLeft from "@/motionEffect/FadeLeft";
import FadeRight from "@/motionEffect/FadeRight";
import Image from "next/image";
const Instructor = () => {
  return (
    <section className="section-gap-top relative max-xxl:overflow-hidden xxl:mt-120px">
      <div className=" bg-primaryColor">
        <div className="container">
          <div className=" flex flex-col-reverse items-center justify-between lg:grid lg:grid-cols-12 ">
            <div className="col-start-1 col-end-7 xxl:-ms-[85px] xxl:-mt-[156px]">
              <Fade>
                <Image
                  src={instructor}
                  width={608}
                  height={624}
                  alt="Instructor image "
                  className=""
                />
              </Fade>
            </div>
            <div className="col-start-7 col-end-13 py-10 lg:py-20">
              <FadeRight>
                <h3 className="d4 font-semibold">Become an instructor today</h3>
              </FadeRight>
              <FadeLeft>
                <p className="lText mt-6 text-neutral-500">
                  Instructors from around the world teach millions of students
                  on Edufast. We provide the tools and skills to teach what you
                  love.
                </p>
              </FadeLeft>
              <div className="mt-10">
                <ButtonBlack buttonText="Start Teaching Today" link="/signup" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mg:bottom-0 absolute left-0 hidden sm:block sm:max-md:top-[35%] md:bottom-0">
        <Image
          src={dollar}
          width={138}
          height={148}
          alt="Instructor Dollar Image"
          className="animate-pulse"
        />
      </div>
      <div className="absolute right-0 top-1/2 hidden -translate-x-1/2 sm:block  lg:left-[58%] lg:top-[20%] xl:left-[60%] xl:top-1/4">
        <Image
          src={arrow}
          width={138}
          height={148}
          alt="Instructor Dollar Image"
        />
      </div>
    </section>
  );
};

export default Instructor;
