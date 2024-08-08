import CardMentor from "@/components/Card/CardMentor";
import ButtonPagination from "@/components/button/ButtonPagination";
import BorderHorizontalSolidN40 from "@/components/customBorder/BorderHorizontalSolidN40";
import SearchBarPrimary from "@/components/sharedComponents/SearchbarPrimary";
import { aboutTopInstructorData } from "../../../../public/data/aboutTopInstructorData";

const InstructorList = () => {
  return (
    <div className="container section-gap-top section-gap-bottom flex flex-col gap-10 md:gap-60px">
      <div className="grid-cols-12 items-center justify-between gap-6 md:grid">
        <div className="col-start-1 col-end-7">
          <h4 className="d4 font-semibold">Our Dedicated Mentorship Teams</h4>
        </div>

        <div className="col-start-7 col-end-13 flex flex-col gap-6 max-md:mt-10 lg:col-start-8 xl:col-start-9">
          <SearchBarPrimary placeholder="Search instructor" />
          <p className="lText md:text-right">
            Our commitment to your educational journey goes beyond just
            providing courses...
          </p>
        </div>
      </div>
      <BorderHorizontalSolidN40 />
      <div className="grid grid-cols-1 items-center justify-between gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {aboutTopInstructorData?.map(({ id, ...props }) => (
          <CardMentor key={id} {...props} />
        ))}
      </div>
      <div className=" mx-auto w-fit">
        <ButtonPagination />
      </div>
    </div>
  );
};

export default InstructorList;
