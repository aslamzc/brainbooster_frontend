import ButtonCourses from "@/components/button/ButtonCourses";
import SearchBarPrimary from "@/components/sharedComponents/SearchbarPrimary";
import { v4 as uuidv4 } from "uuid";
import { coursesName } from "../../../../public/data/coursesName";

type Props = {
  title: string;
};

const CourseOneBanner = ({ title }: Props) => {
  return (
    <section className="section-gap-top padding-b-60 border border-b border-neutral-40">
      <div className="container">
        <div className="grid-cols-12 items-center justify-between gap-6 lg:grid">
          <div className="col-start-1 col-end-8 xxl:col-end-6">
            <h2 className="d2 font-semibold">{title}</h2>
          </div>
          <div className="col-start-8 col-end-13 max-lg:mt-10 xxl:col-start-9">
            <div>
              <SearchBarPrimary />
            </div>
            <div className="m:gap-4 mt-5 flex flex-wrap items-center justify-start gap-3 md:mt-8">
              {coursesName?.map(({ ...props }) => (
                <ButtonCourses key={uuidv4()} {...props} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseOneBanner;
