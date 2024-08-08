import ButtonBlack from "@/components/button/ButtonBlack";
import H3 from "@/components/sharedComponents/H3";
import H5 from "@/components/sharedComponents/H5";
import TextM from "@/components/sharedComponents/TextM";
import FadeLeft from "@/motionEffect/FadeLeft";
import FadeRight from "@/motionEffect/FadeRight";

const AllBanner = () => {
  return (
    <div className="before:bg-neutral-20 relative z-20 overflow-hidden before:absolute before:bottom-0 before:-z-10 before:h-[85%] before:w-full sm:before:h-[50%] lg:before:h-[50%]">
      <div className="container grid gap-6 max-lg:grid-flow-col max-lg:grid-rows-2 lg:grid-cols-2">
        <FadeLeft className="padding-t-60 padding-b-60 padding-s-60 padding-e-60 gap-32px flex flex-col items-center rounded-16px bg-primaryColor bg-opacity-50 text-center">
          <div className="flex flex-col gap-4">
            <H5>Just started new</H5>
            <H3>IELTS Batches</H3>
            <TextM>
              Accepted in more than 10K institutions around the world.
            </TextM>
          </div>
          <ButtonBlack buttonText="Register Now" button={false} />
        </FadeLeft>
        <FadeRight className="padding-t-60 padding-b-60 padding-s-60 padding-e-60 gap-32px flex flex-col items-center rounded-16px bg-secondaryColor bg-opacity-50 text-center">
          <div className="flex flex-col gap-4">
            <H5>Join Running Batch</H5>
            <H3>Study in Canada</H3>
            <TextM>Apply for 2023 May intakes</TextM>
          </div>
          <ButtonBlack buttonText="Register Now" button={false} />
        </FadeRight>
      </div>
    </div>
  );
};

export default AllBanner;
