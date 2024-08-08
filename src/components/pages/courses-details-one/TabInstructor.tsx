import BorderHorizontal from "@/components/customBorder/BorderHorizontal";
import CoursesDetailInstructor from "./CoursesDetailInstructor";
import WriteAReview from "./WriteAReview";

const TabInstructor = () => {
  return (
    <div className="flex flex-col justify-between gap-8">
      <div>
        <h2 className="h2 font-semibold">Instructor Profiles</h2>
        <p className="mt-4 text-mText">
          Mention any professional organizations or associations that the
          instructors are part of, especially if it relates to the subject
          matter of the course. If applicable, list any previous courses or
          educational programs the instructors have been involved in, especially
          if they have a track record of successful teaching.
        </p>
      </div>
      <BorderHorizontal />
      <div>
        <CoursesDetailInstructor />
      </div>
      <div className="mt-8">
        <WriteAReview />
      </div>
    </div>
  );
};

export default TabInstructor;
