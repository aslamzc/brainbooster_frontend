import { coursesOverviewData } from "../../../../public/data/coursesOverviewData";
import CoursesOverview from "./CoursesOverview";

const TabOverView = () => {
  return (
    <div className="flex flex-col justify-between gap-8">
      {/* courses details */}
      {coursesOverviewData?.map(({ id, ...props }, index) => (
        <CoursesOverview key={id} {...props} index={index} />
      ))}
    </div>
  );
};

export default TabOverView;
