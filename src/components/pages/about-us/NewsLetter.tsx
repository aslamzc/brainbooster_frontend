import SearchNewsLetter from "@/components/sharedComponents/SearchNewsLetter";
import FadeLeft from "@/motionEffect/FadeLeft";
import FadeRight from "@/motionEffect/FadeRight";
import Link from "next/link";

const NewsLetter = () => {
  return (
    <section className="relative z-20 overflow-hidden after:absolute after:bottom-0 after:-z-10 after:h-[85%] after:w-full after:bg-bgColorOne sm:after:h-[50%] lg:after:h-[50%]">
      <div className="padding-t-80 padding-b-80 z-20 mx-auto max-w-[1600px] bg-primaryColor max-xl:py-10 xl:rounded-16px xl:pe-[84px] xxl:ps-[152px]">
        <div className="container">
          <FadeLeft>
            <h2 className="h1 text-center  font-semibold">
              Subscribe for newsletters
            </h2>
          </FadeLeft>
        </div>
        <div className="container grid-cols-12 items-center justify-center gap-24 md:grid">
          <div className="col-start-3 col-end-11 text-center xl:col-start-4 xl:col-end-10">
            <FadeRight>
              <p className="mt-4 text-mText">
                Subscribe Our Newsletter For Latest Updates
              </p>
            </FadeRight>
            <div className="mt-6 xl:mt-10">
              <SearchNewsLetter />
            </div>
            <div className="mt-6 flex justify-center gap-x-6 sm:items-center">
              <div className="round">
                <input type="checkbox" id="checkbox" />
                <label htmlFor="checkbox"></label>
              </div>
              <p className="text-mText max-sm:text-left ">
                I agree with{" "}
                <Link href="/privacy-policy" className="font-semibold">
                  privacy policy
                </Link>{" "}
                and{" "}
                <Link href="/terms" className="font-semibold">
                  terms
                </Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
