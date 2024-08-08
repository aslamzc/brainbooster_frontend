import banner1 from "@/../public/images/about/about-banner.png";
import banner2 from "@/../public/images/about/about-banner2.png";
import elementOne from "@/../public/images/about/element-one.png";
import BorderHorizontal from "@/components/customBorder/BorderHorizontal";
import IconPrimaryBgCheck from "@/components/icons/IconPrimaryBgCheck";
import VectorAboutBannerRoundBottomLeft from "@/components/vector/VectorAboutBannerRoundBottomLeft";
import VectorBanner from "@/components/vector/VectorBannerAbout";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="section-gap-top relative">
      <div className="container">
        <div className="grid-cols-12 items-center justify-between gap-6 lg:grid">
          {/* banner left side */}
          <div className="col-start-1 col-end-6">
            <div className="relative overflow-hidden rounded-32px">
              <VectorBanner value="25+" />
              <Image
                src={banner1}
                width={526}
                height={492}
                alt="Banner Image 1"
                className="theme-transition-3 rounded-32px hover:scale-105"
              />
            </div>
            <div className="padding-t-60 flex flex-col justify-between gap-6">
              <p className="text-mText">
                Our courses are taught by experienced professionals and subject
                matter experts who are passionate
              </p>
              <BorderHorizontal />
              <div className="flex justify-between gap-6 max-xxl:flex-col">
                <div className="flex flex-col justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <IconPrimaryBgCheck />
                    <p className="xlText font-medium">Course Catalog</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <IconPrimaryBgCheck />
                    <p className="xlText font-medium">Expert Instructors</p>
                  </div>
                </div>
                <div className="flex flex-col justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <IconPrimaryBgCheck />
                    <p className="xlText font-medium">Interactive Learning</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <IconPrimaryBgCheck />
                    <p className="xlText font-medium">Community Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* banner right side */}
          <div className="col-start-7 col-end-13 max-lg:mt-10  max-md:mt-8">
            <h4 className="d4 font-semibold">
              Creating Worlds for Students to Study
            </h4>
            <p className="lText mt-6">
              Your trusted partner in the pursuit of knowledge and personal
              growth.
            </p>
            <div className="padding-t-60 relative overflow-hidden rounded-32px">
              <VectorAboutBannerRoundBottomLeft />
              <Image
                src={banner2}
                width={636}
                height={483}
                alt="Banner Image Two"
                className="theme-transition-3 rounded-32px hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" [1600px]:block absolute right-20 top-20 max-[1600px]:hidden">
        <Image
          src={elementOne}
          width={171}
          height={154}
          alt="Element One"
          className="animate-ping-smooth"
        />
      </div>
    </section>
  );
};

export default Banner;
