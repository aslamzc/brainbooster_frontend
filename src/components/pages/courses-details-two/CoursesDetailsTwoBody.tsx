import BorderHorizontal from "@/components/customBorder/BorderHorizontal";
import BorderHorizontalN40 from "@/components/customBorder/BorderHorizontalN40";
import H4 from "@/components/sharedComponents/H4";
import AllFaqs from "../courses-details-one/AllFaqs";
import CoursesDetailInstructor from "../courses-details-one/CoursesDetailInstructor";
import CoursesDetailsRight from "../courses-details-one/CoursesDetailsRight";
import TabCurriculum from "../courses-details-one/TabCurriculum copy";
import TabOverView from "../courses-details-one/TabOverView";
import TabReviews from "../courses-details-one/TabReviews";
import WriteAReview from "../courses-details-one/WriteAReview";
import CoursesDetailsTwoBanner from "./CoursesDetailsTwoBanner";

const CoursesDetailsTwoBody = () => {
  return (
    <div className="padding-t-80 padding-b-80 bg-neutral-20">
      <div className="container">
        <div className=" grid-cols-12 justify-between gap-6 xl:grid">
          <div className="col-start-1 col-end-9 ">
            <CoursesDetailsTwoBanner />
            <div className="padding-t-60 flex flex-col justify-between gap-10">
              <div className="rounded-16px bg-white p-4  sm:p-8">
                <h4 className="d4 font-semibold">
                  Web Development (Front End)
                </h4>
                <p className="pt-6 text-mText">
                  This course is designed for beginners with little to no prior
                  experience in web development. It provides a comprehensive
                  introduction to the core concepts and technologies used in
                  building websites and web applications.
                </p>
                <div className="my-8">
                  <BorderHorizontal />
                </div>
                <TabOverView />
              </div>
              <div className="rounded-16px bg-white p-4  sm:p-8">
                <h2 className="h4 font-semibold">Curriculum</h2>
                <div className="my-6">
                  <BorderHorizontalN40 />
                </div>
                <TabCurriculum />
              </div>
              <div className="rounded-16px bg-white p-4  sm:p-8">
                <h2 className="h4 font-semibold">Instructor</h2>
                <div className="my-6">
                  <BorderHorizontalN40 />
                </div>
                <CoursesDetailInstructor />
              </div>
              <div className="flex flex-col gap-6 rounded-16px bg-white p-4  sm:p-8">
                <H4>FAQs</H4>
                <BorderHorizontalN40 />
                <AllFaqs />
              </div>

              <TabReviews bg="white" />
              <WriteAReview bg="white" />
            </div>
          </div>
          <div className="relative col-start-9 col-end-13 max-xl:mt-10 ">
            <CoursesDetailsRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesDetailsTwoBody;
