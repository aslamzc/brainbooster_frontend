import image1 from "@/../public/images/pricing-plan/Illustration-1.png";
import image2 from "@/../public/images/pricing-plan/Illustration-2.png";
import ButtonBlackSmall from "@/components/button/ButtonBlackSmall";
import FadeLeft from "@/motionEffect/FadeLeft";
import FadeRight from "@/motionEffect/FadeRight";
import Image from "next/image";

const AllContent = () => {
  return (
    <div className="container flex items-center gap-6 overflow-hidden max-xl:flex-col">
      <FadeLeft>
        {" "}
        <div className="padding-t-60 padding-b-60 padding-s-60 relative rounded-16px bg-primaryColor bg-opacity-60 pe-5 sm:pe-[289px]">
          <div className="sm:max-w-[287px]">
            <h3 className="h3 font-semibold">Earn a Certificate</h3>
            <p className="text-mText text-neutral-500">
              Get the right professional certificate program for you
            </p>
            <div className="padding-t-32">
              <ButtonBlackSmall buttonText="View Programs" />
            </div>
            <div className="absolute bottom-0 right-0 hidden sm:block">
              <Image
                src={image1}
                width={337}
                height={244}
                alt="illustration one"
                className="max-md:w-[300px]"
              />
            </div>
          </div>
        </div>
      </FadeLeft>
      <FadeRight>
        <div className="padding-t-60 padding-b-60 padding-s-60 relative rounded-16px bg-secondaryColor bg-opacity-60 pe-5 sm:pe-[260px]">
          <div className="sm:max-w-[310px]">
            <h3 className="h3 font-semibold">Best Rated Courses</h3>
            <p className="text-mText text-neutral-500">
              Enroll now in the most popular and best rated courses.
            </p>
            <div className="padding-t-32">
              <ButtonBlackSmall buttonText="View Programs" />
            </div>
            <div className="absolute bottom-0 right-0 hidden sm:block">
              <Image
                src={image2}
                width={337}
                height={244}
                alt="illustration one"
                className="max-xxl:w-[300px]"
              />
            </div>
          </div>
        </div>
      </FadeRight>
    </div>
  );
};

export default AllContent;
