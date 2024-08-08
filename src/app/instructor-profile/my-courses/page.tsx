import InstructorMyCourses from "@/components/pages/instructor-profile/my-courses/InstructorMyCourses";
import { instructorMyCoursesData } from "../../../../public/data/instructorMyCoursesData";

const MyCourses = () => {
  return <InstructorMyCourses tableContent={instructorMyCoursesData} />;
};

export default MyCourses;
