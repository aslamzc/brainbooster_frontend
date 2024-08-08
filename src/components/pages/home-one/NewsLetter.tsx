import image from "@/../public/images/homeOne/newsletter.png";
import ButtonBlackRounded from "@/components/button/ButtonBlackRounded";
import Fade from "@/motionEffect/Fade";
import FadeLeft from "@/motionEffect/FadeLeft";
import FadeRight from "@/motionEffect/FadeRight";
import Image from "next/image";
import Link from "next/link";

const NewsLetter = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="relative z-20 after:absolute after:bottom-0 after:-z-10 after:h-[85%] after:w-full after:bg-bgColorOne sm:after:h-[50%] lg:after:h-[35%]">
        <div className="z-20 mx-auto max-w-[1600px] bg-primaryColor max-xl:py-10 xl:rounded-16px xl:pe-[84px] xl:ps-[152px]">
          <div className="container grid-cols-12 items-center justify-between gap-24 xl:grid">
            <div className="col-start-1 col-end-7">
              <FadeLeft>
                <h2 className="h2 font-semibold">Subscribe for newsletters</h2>
              </FadeLeft>
              <FadeRight>
                <p className="mt-4 text-mText">
                  Subscribe Our Newsletter For Latest Updates
                </p>
              </FadeRight>
              <div className="mt-6 flex items-center justify-between rounded-full bg-bgColorOne ps-8 xl:mt-10">
                <input
                  type="email"
                  placeholder="Enter Email..."
                  className="me-3 w-full bg-inherit text-white placeholder:text-white focus:outline-none "
                />

                <ButtonBlackRounded />
              </div>
              <div className="mt-6 flex items-center gap-x-6">
                <div className="round">
                  <input type="checkbox" id="checkbox" />
                  <label htmlFor="checkbox"></label>
                </div>
                <p className="text-mText ">
                  I agree with{" "}
                  <Link href="/privacy-policy" className="font-semibold">
                    privacy policy
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy-policy" className="font-semibold">
                    terms
                  </Link>{" "}
                </p>
              </div>
            </div>
            <div className="col-start-7 col-end-13 hidden xl:block">
              <Fade>
                <Image
                  src={image}
                  width={616}
                  height={396}
                  alt="Newsletter image"
                  className="-me-16"
                />
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
