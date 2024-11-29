import SearchBarPrimary from "@/components/sharedComponents/SearchbarPrimary";
import { v4 as uuidv4 } from "uuid";

type Props = {
  title: string;
  buttonText?: string[];
  isActive?: boolean;
  handleTabClick?: (text: string) => void;
};

const CourseOneBannerWithLabel = ({
  title,
  buttonText,
  isActive,
  handleTabClick,
}: Props) => {
  return (
    <section className="section-gap-top padding-b-60 border border-b border-neutral-40">
      <div className="container">
        <h2 className="h2 mx-auto max-w-[560px] text-center font-semibold">
          {title}
        </h2>
        <div className="mt-10">
          <SearchBarPrimary />
        </div>
        {/* <div className="m:gap-4 mt-5 flex flex-wrap items-center justify-center gap-3 md:mt-8">
          {buttonText?.map((text) => (
            <button
              key={uuidv4()}
              onClick={() => handleTabClick && handleTabClick(text)}
              className="theme-transition-3 rounded-32px border border-neutral-40 px-6 py-3 text-sText hover:scale-105 hover:bg-primaryColor"
            >
              {text}
            </button>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default CourseOneBannerWithLabel;
