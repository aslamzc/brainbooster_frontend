import SearchBarPrimary from "@/components/sharedComponents/SearchbarPrimary";
import { v4 as uuidv4 } from "uuid";

type Props = {
  title: string;
};

const CourseOneBannerWithLabel = ({
  title
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
      </div>
    </section>
  );
};

export default CourseOneBannerWithLabel;
