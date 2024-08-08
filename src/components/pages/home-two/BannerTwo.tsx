import imageGirl from "@/../public/images/homeTwo/homeTwo-banner-girl.png";
import imageMan from "@/../public/images/homeTwo/homeTwo-banner-man.png";
import ButtonUnderLine from "@/components/button/ButtonUnderLine";
import SearchBarFullWidthBannerTwo from "@/components/navbar/searchbar/SearchBarFullWidthBannerTwo";
import ReactCounterUp from "@/components/sharedComponents/Counter";
import InfoBannerTwo from "@/components/sharedComponents/InfoBannerTwo";
import Users from "@/components/sharedComponents/Users";
import VectorCardRightTop from "@/components/vector/VectorIconTopRight";
import FadeLeft from "@/motionEffect/FadeLeft";
import FadeRight from "@/motionEffect/FadeRight";
import {
  IconBriefcase,
  IconPlus,
  IconUserHeart,
  IconUserMinus,
} from "@tabler/icons-react";
import BannerTwoImage from "./BannerTwoImage";
import UsersAndReview from "./UsersAndReview";

const BannerTwo = () => {
  return (
    <section>
      <div className="container max-xxl:overflow-hidden">
        <div className="grid-cols-12 justify-between max-xxl:gap-8 lg:grid">
          <div className="col-start-1 col-end-7 pt-[105px]">
            <FadeLeft>
              <h3 className="d3 clear-left font-semibold">
                Education, talents, and career opportunities
              </h3>
            </FadeLeft>
            <FadeRight>
              <p className="xlText mt-4 xxl:mt-6">
                Learning is a lifelong endeavor, and your quest starts here.
                Join us in embracing the exciting journey of continuous growth
              </p>
            </FadeRight>
            <div className="mt-6 xxl:mt-10">
              <SearchBarFullWidthBannerTwo />
            </div>
            <div className="mt-8 lg:mt-10 xxl:mt-60px">
              <UsersAndReview />
              <p className="mt-6 text-mText xxl:mt-10">
                Learning is a lifelong endeavor, and your quest starts here.
                Join us in embracing the exciting journey of continuous growth
              </p>
              <div className="pt-6">
                <ButtonUnderLine
                  buttonText="Join Community"
                  link="/community"
                />
              </div>
            </div>
          </div>
          <div className="col-start-7 col-end-13 xxl:col-start-8 ">
            <div className="grid-cols-5 xxl:grid">
              <div className="col-start-2 col-end-6 !bg-opacity-30 pt-10 xl:pt-[63px] xxl:bg-primaryColor">
                <div className="hidden justify-between xxl:flex ">
                  <div>
                    <div className="-ms-[67px] 4xl:-ms-[90px]">
                      <InfoBannerTwo
                        icon={<IconBriefcase />}
                        iconBg="Purple"
                        textOne="Available Job"
                        textTwo="240+"
                      />
                    </div>
                    <div className="pt-[42px] xxl:-ms-10">
                      <InfoBannerTwo
                        icon={<IconUserMinus />}
                        iconBg="Green"
                        textOne="Resume Builder"
                        textTwo="Free"
                      />
                    </div>
                  </div>
                  <div className="[1450px]:-mr-[67px] -mr-[50px]">
                    <BannerTwoImage image={imageMan} />
                  </div>
                </div>
                <div className="flex max-xl:gap-6 max-lg:items-center max-sm:flex-col lg:max-xl:flex-col xl:items-center xl:justify-between">
                  <div className="[1450px]:-ml-[85px] lg:pt-11 xxl:-mb-[113px] xxl:-ml-[45px]">
                    <BannerTwoImage image={imageGirl} />
                  </div>
                  <div className="">
                    <div>
                      <InfoBannerTwo
                        icon={<IconUserHeart />}
                        iconBg="Purple"
                        textOne="Free Training"
                        textTwo="With Amazing Mentor"
                        className="mb-[22px] whitespace-nowrap max-[1600px]:items-start max-sm:flex-col xl:max-[1600px]:flex-col min-[1600px]:-mr-[120px]"
                      />
                    </div>
                    <div className=" w-fit max-sm:mx-auto lg:-mb-[140px]">
                      <Users data={<IconPlus />} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 grid-cols-6 lg:mt-[160px] xl:mt-[150px] xxl:grid xxl:grid-cols-5">
              <div className="max-sm: col-start-1 col-end-6 flex items-center gap-6 max-sm:mx-auto  max-sm:flex-col ">
                <div className="bg relative w-fit shrink-0 rounded-32px bg-neutral-20 px-6 py-10 text-center xl:px-8 xl:py-60px">
                  <VectorCardRightTop />
                  <p className="d4 font-semibold uppercase">
                    <ReactCounterUp end={15} />K
                  </p>
                  <p className="lText pt-4 font-medium text-neutral-500">
                    Successfully Trained
                  </p>
                </div>
                <div className="bg relative w-fit shrink-0 rounded-32px bg-neutral-20 px-6 py-10 text-center xl:px-8 xl:py-60px">
                  <VectorCardRightTop />
                  <p className="d4 font-semibold uppercase">
                    <ReactCounterUp end={30} />K
                  </p>
                  <p className="lText pt-4 font-medium text-neutral-500">
                    Courses Completed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerTwo;
