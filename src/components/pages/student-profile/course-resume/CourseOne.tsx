import courseTwo from "@/../public/images/student-profile/course-two.png";
import course from "@/../public/images/student-profile/course.png";
import ButtonPrimary from "@/components/button/ButtonPrimary";
import BorderHorizontalN40 from "@/components/customBorder/BorderHorizontalN40";
import H3 from "@/components/sharedComponents/H3";
import TextL from "@/components/sharedComponents/TextL";
import { IconClock, IconUsers, IconVersions } from "@tabler/icons-react";
import Image from "next/image";
import CoursesCurriculumDropdown from "./CoursesCurriculumDropdown";
const CourseOne = () => {
  return (
    <>
      <div className="padding-all-32 rounded-16px bg-white">
        <div className="flex items-center gap-6 max-lg:flex-col xl:gap-10">
          <div className="overflow-hidden rounded-16px">
            <Image
              src={course}
              width={265}
              height={226}
              alt="course thumbnail"
              className="theme-transition-3 rounded-16px hover:scale-105"
            />
          </div>
          <div className="gap-32px flex flex-col">
            <H3>Health Sciences & Medicine</H3>
            <div className="gap-32px flex items-center max-lg:flex-wrap">
              <div className="flex items-center gap-2">
                <IconVersions size={32} /> <TextL>82 lectures</TextL>
              </div>
              <div className="flex items-center gap-2">
                <IconClock size={32} /> <TextL>16h 56m</TextL>
              </div>
              <div className="flex items-center gap-2">
                <IconUsers size={32} /> <TextL>Beginner</TextL>
              </div>
            </div>
            <ButtonPrimary button={false} buttonText="Resume Courses" />
          </div>
        </div>
        <div className="py-8">
          <BorderHorizontalN40 />
        </div>
        <div>
          <div>
            <H3>Course Curriculum</H3>
          </div>
          <div className="mt-8">
            <CoursesCurriculumDropdown title="Introduction of Digital Marketing" />
            <div className="pt-8">
              <CoursesCurriculumDropdown title="Public Health and Epidemiology" />
            </div>
          </div>
        </div>
      </div>
      <div className="padding-all-32 rounded-16px bg-white">
        <div className="flex items-center gap-6 max-lg:flex-col xl:gap-10">
          <div className="overflow-hidden rounded-16px">
            <Image
              src={courseTwo}
              width={265}
              height={226}
              alt="course thumbnail"
              className="theme-transition-3 rounded-16px hover:scale-105"
            />
          </div>
          <div className="gap-32px flex flex-col">
            <H3>Introduction to Artificial Intelligence</H3>
            <div className="gap-32px flex items-center max-lg:flex-wrap">
              <div className="flex items-center gap-2">
                <IconVersions size={32} /> <TextL>72 lectures</TextL>
              </div>
              <div className="flex items-center gap-2">
                <IconClock size={32} /> <TextL>28h 16m</TextL>
              </div>
              <div className="flex items-center gap-2">
                <IconUsers size={32} /> <TextL>Beginner</TextL>
              </div>
            </div>
            <ButtonPrimary button={false} buttonText="Resume Courses" />
          </div>
        </div>
        <div className="py-8">
          <BorderHorizontalN40 />
        </div>
        <div>
          <div>
            <H3>Course Curriculum</H3>
          </div>
          <div className="mt-8">
            <CoursesCurriculumDropdown title="Introduction to AI" />
            <div className="pt-8">
              <CoursesCurriculumDropdown title="Machine Learning Basics" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseOne;
