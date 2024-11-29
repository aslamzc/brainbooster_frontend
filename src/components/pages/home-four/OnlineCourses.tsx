'use client';

import SectionHeading from "@/components/sharedComponents/SectionHeading";
import StaggerEffectTwo from "@/motionEffect/StaggerEffectTwo";
import { homeFourOnlineCourseCardData } from "../../../../public/data/homeFourOnlineCourseCardData";
import OnlineCoursesCard from "./OnlineCoursesCard";
import { useTranslation } from 'react-i18next';

const OnlineCourses = () => {
  const { t } = useTranslation();
  return (
    <div className="section-gap-top section-gap-bottom overflow-hidden">
      <div className="container">
        {/* section heading */}
        <SectionHeading
          title={t('text_1')}
          description="Welcome to BrainBooster App! Ready to test your knowledge and have some fun?"
          link="/quiz"
          buttonText="See All Quizzes"
        />
        <div className="padding-t-60 grid grid-cols-1 items-center gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {homeFourOnlineCourseCardData.map(({ id, ...props }, index) => (
            <StaggerEffectTwo key={id} id={index}>
              <OnlineCoursesCard key={id} {...props} />
            </StaggerEffectTwo>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OnlineCourses;
