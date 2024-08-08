import infoLeft from "@/../public/images/home-four/info-left.png";
import infoRight from "@/../public/images/home-four/info-right.png";
import ButtonBlackSmall from "@/components/button/ButtonBlackSmall";
import H3 from "@/components/sharedComponents/H3";
import FadeLeft from "@/motionEffect/FadeLeft";
import FadeRight from "@/motionEffect/FadeRight";
import Image from "next/image";

const HomeFourInfo = () => {
  return (
    <div className="container flex items-center gap-6 overflow-hidden max-xl:flex-col">
      <FadeLeft>
        <div className="padding-t-60 padding-b-60 padding-e-60 relative w-full rounded-16px bg-primaryColor bg-opacity-60 ps-5 sm:ps-[289px]">
          <div className="sm:max-w-[287px]">
            <H3>Expert Instructor Live Classes Here!</H3>
            <div className="padding-t-32">
              <ButtonBlackSmall buttonText="Take Our Services" button={false} />
            </div>
            <div className="absolute bottom-0 left-5 hidden sm:block">
              <Image
                src={infoLeft}
                width={220}
                height={264}
                alt="illustration one"
                className=""
              />
            </div>
          </div>
        </div>
      </FadeLeft>
      <FadeRight>
        <div className="padding-t-60 padding-b-60 padding-e-60 relative w-full rounded-16px bg-secondaryColor bg-opacity-60 ps-5 sm:ps-[260px]">
          <div className="sm:max-w-[310px]">
            <H3>Achieve Your Goals With Quiklearn</H3>

            <div className="padding-t-32">
              <ButtonBlackSmall buttonText="Let's Discover" button={false} />
            </div>
            <div className="absolute bottom-0 left-0 hidden ps-1 sm:block">
              <Image
                src={infoRight}
                width={250}
                height={238}
                alt="illustration one"
                className=""
              />
            </div>
          </div>
        </div>
      </FadeRight>
    </div>
  );
};

export default HomeFourInfo;
