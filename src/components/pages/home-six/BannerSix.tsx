import bannerImage1 from "@/../public/images/home-six/banner-home-six-1.png";
import bannerImage2 from "@/../public/images/home-six/banner-home-six-2.png";
import bannerImage3 from "@/../public/images/home-six/banner-home-six-3.png";
import bannerImage4 from "@/../public/images/home-six/banner-home-six-4.png";
import threeDots from "@/../public/images/home-six/banner-three-line.png";
import vector from "@/../public/images/home-six/banner-vector.png";
import ButtonRounded from "@/components/button/ButtonRounded";
import Dropdown from "@/components/dropdown/Dropdown";
import D2 from "@/components/sharedComponents/D2";
import H5 from "@/components/sharedComponents/H5";
import TextXL from "@/components/sharedComponents/TextXL";
import Fade from "@/motionEffect/Fade";
import FadeLeft from "@/motionEffect/FadeLeft";
import StaggerEffectWord from "@/motionEffect/StaggerEffectWord";
import { IconCategory } from "@tabler/icons-react";
import Image from "next/image";

const BannerSix = () => {
  const category = [
    { label: "Category" },
    { label: "Arlene Mccoy" },
    { label: "Devon Webb" },
    { label: "Tom Cook" },
    { label: "Tanya Fox" },
    { label: "Hellen Schmidt" },
  ];

  const text = "Achieve".split("");
  return (
    <div className="relative  overflow-hidden">
      <div className="container">
        <div className="grid-cols-12 items-center gap-6 xl:grid">
          <div className="col-start-1 col-end-7 max-xl:section-gap-top">
            <Fade className="flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-secondaryColorTwo"></div>
              <H5>Inspire Learning Journeys</H5>
            </Fade>
            <FadeLeft>
              <div className="relative w-fit">
                <D2 className="pt-4 capitalize max-sm:text-h3">
                  Dream, Learn, Grow,
                  {text.map((character, id) => (
                    <StaggerEffectWord
                      className="text-secondaryColorTwo"
                      key={id}
                      id={id}
                    >
                      {character}
                    </StaggerEffectWord>
                  ))}
                </D2>
                <Image
                  src={threeDots}
                  width={66}
                  height={66}
                  alt="Banner Three Dots"
                  className="absolute right-20 top-0 hidden xl:block "
                />{" "}
              </div>
              <TextXL className="padding-t-40">
                Welcome to a new era of education! Unleash your potential, learn
                from experts, and grow with us.
              </TextXL>
            </FadeLeft>
            <div className="padding-s-32 mt-10 flex items-center gap-6 rounded-32px border border-neutral-40 bg-neutral-20 py-2 pe-2">
              <div className="flex items-center gap-2 border-e border-neutral-40">
                <IconCategory size={20} />
                <Dropdown options={category} />
              </div>
              <div className="flex grow items-center justify-between rounded-60px  bg-neutral-20  ">
                <input
                  type="text"
                  placeholder="Search Courses..."
                  className="me-3 w-full grow bg-transparent placeholder:text-neutral-300 focus:outline-none"
                />
                <ButtonRounded iconName="Search" />
              </div>
            </div>
          </div>
          <div className="padding-t-80 padding-b-80 relative col-start-8 col-end-13 grid grid-cols-2 items-center justify-center max-xl:gap-6">
            <div className="shrink-0 justify-self-end xl:justify-self-center">
              <Image
                src={bannerImage2}
                width={155}
                height={155}
                alt="Banner image"
                className="rounded-full"
              />
            </div>
            <div className="shrink-0 justify-self-start xl:-ms-10 xl:justify-self-center">
              {" "}
              <Image
                src={bannerImage1}
                width={315}
                height={315}
                alt="Banner image"
                className="rounded-full"
              />
            </div>
            <div className="-mt-10 shrink-0 justify-self-end xl:-me-10 xl:justify-self-center">
              {" "}
              <Image
                src={bannerImage3}
                width={278}
                height={278}
                alt="Banner image"
                className="rounded-full"
              />
            </div>{" "}
            <div className="shrink-0 justify-self-start xl:-mt-10 xl:justify-self-center">
              {" "}
              <Image
                src={bannerImage4}
                width={155}
                height={155}
                alt="Banner image"
                className="rounded-full"
              />
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="absolute right-0 top-0 -z-10 max-xxl:hidden">
        <Image src={vector} width={776} height={603} alt="Vector" />
      </div>
    </div>
  );
};

export default BannerSix;
