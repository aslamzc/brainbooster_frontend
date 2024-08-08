import image1 from "@/../public/images/courses-comparison/Image-1.png";
import image2 from "@/../public/images/courses-comparison/Image.png";
import ButtonPrimaryFullWidth from "@/components/button/ButtonPrimaryFullWidth";
import BorderHorizontalN40 from "@/components/customBorder/BorderHorizontalN40";
import DropdownFullWidth from "@/components/dropdown/DropdownFullWidth";
import SearchBarTransparent from "@/components/sharedComponents/SearchBarWhite";
import Image from "next/image";
import Link from "next/link";
import { compareData } from "../../../../public/data/courseCompareData";
import ButtonOutlineSmall from "../student-profile/edit-profile/ButtonOutlineSmall";
import ButtonPrimarySmall from "../student-profile/edit-profile/ButtonPrimarySmall";
import StarRating from "./StarRating";

const CoursesComparisonBody = () => {
  const category = [
    { label: "Select More Courses" },
    { label: "CSE" },
    { label: "Web Development" },
    { label: "SEO" },
    { label: "UI/UX Design" },
  ];

  return (
    <div className="container padding-t-80 padding-b-80 flex flex-col gap-6">
      {/* compare  */}
      <div className="grid-cols-12 items-center justify-between gap-6 xxl:grid ">
        <div className="col-start-1 col-end-5 rounded-16px bg-white p-6">
          <h3 className="h3 font-semibold">Compare Courses</h3>
          <p className="lText mt-4 text-neutral-500">(2 Course selected)</p>
          <div className="padding-t-32">
            <div className=" rounded-32px border border-neutral-40 bg-white px-6 py-3">
              <DropdownFullWidth options={category} />
            </div>
          </div>
          <div className="mt-4">
            <SearchBarTransparent placeholder="Type Of Courses" />
          </div>

          <div className="padding-t-40 flex items-center  gap-6 max-sm:flex-col">
            <ButtonPrimarySmall buttonText="Add More" />{" "}
            <ButtonOutlineSmall buttonText="Clear All" />
          </div>
        </div>
        <div className="col-start-5 col-end-13 flex items-center gap-6 max-xxl:mt-6 max-md:flex-col">
          <div className="relative w-fit overflow-hidden rounded-16px bg-white ">
            <Image
              src={image1}
              width={416}
              height={358}
              alt="Image"
              className="rounded-16px hover:scale-105"
            />
            <div className="courses-comparison-bg absolute bottom-0 left-0 flex h-full w-full items-end rounded-16px">
              <Link
                href="/courses/courses-details-one"
                className="h3 padding-b-32 padding-s-32  font-semibold"
              >
                Web Development Professional
              </Link>
            </div>
          </div>
          <div className="relative w-fit overflow-hidden rounded-16px bg-white ">
            <Image
              src={image2}
              width={416}
              height={358}
              alt="Image"
              className="rounded-16px hover:scale-105"
            />
            <div className="courses-comparison-bg absolute bottom-0 left-0 flex h-full w-full items-end rounded-16px">
              <Link
                href="/courses/courses-details-one"
                className="h3 padding-b-32 padding-s-32  font-semibold"
              >
                CodeMaster Full Stack Bootcamp
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Additional information start */}
      <div className="padding-all-32 flex flex-col gap-6  rounded-16px bg-white">
        <h4 className="h4 font-semibold">Additional Information</h4>
        <BorderHorizontalN40 />
        <div className="course-comparison-table-scrollbar bg-white max-xl:overflow-x-scroll">
          <table className=" mx-auto w-[900px] table-fixed xxl:w-[1200px] ">
            <thead>
              <tr className="bg-neutral-20 text-left text-mText text-neutral-500">
                <th className="padding-s-32 padding-e-32 py-4">Criteria</th>
                <th className="padding-s-32 padding-e-32 py-4">
                  WebDevPro Course
                </th>
                <th className="padding-s-32 padding-e-32 py-4">
                  CodeMaster Bootcamp
                </th>
              </tr>
            </thead>
            <tbody>
              {compareData.map(
                ({ id, criteria, courseOne, courseTwo }, index) => (
                  <tr
                    key={id}
                    className={`text-neutral-500 ${
                      index % 2 === 1 && "bg-neutral-20"
                    }`}
                  >
                    <td className="padding-s-32 padding-e-32 py-4 font-semibold capitalize">
                      {criteria}
                    </td>
                    <td className="padding-s-32 padding-e-32 py-4">
                      {criteria === "feedbackAndReviews" ? (
                        <StarRating stringValue={courseOne} />
                      ) : (
                        courseOne
                      )}
                    </td>
                    <td className="padding-s-32 padding-e-32 py-4">
                      {criteria === "feedbackAndReviews" ? (
                        <StarRating stringValue={courseTwo} />
                      ) : (
                        courseTwo
                      )}
                    </td>
                  </tr>
                ),
              )}
              <tr className="bg-neutral-20">
                <td></td>
                <td className="padding-s-32 padding-e-32 py-4">
                  <ButtonPrimaryFullWidth
                    buttonText="Enroll Now"
                    button={false}
                    link="/courses/courses-details-one"
                  />
                </td>
                <td className="padding-s-32 padding-e-32 py-4">
                  <ButtonPrimaryFullWidth
                    buttonText="Enroll Now"
                    button={false}
                    link="/courses/courses-details-two"
                  />
                </td>
              </tr>
            </tbody>
          </table>{" "}
        </div>
      </div>
      {/* Additional information end */}
    </div>
  );
};

export default CoursesComparisonBody;
