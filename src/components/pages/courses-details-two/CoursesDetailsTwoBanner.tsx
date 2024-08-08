import bannerImage from "@/../public/images/courses/coursesDetailsTwo/banner.png";
import BreadCrumbs from "@/components/sharedComponents/BreadCrumbs";
import VectorCoursesDetailsTwo from "@/components/vector/VectorCoursesDetailsTwo";
import Image from "next/image";

const CoursesDetailsTwoBanner = () => {
  return (
    <div className="container">
      <div className="relative">
        <VectorCoursesDetailsTwo>
          <div className="ps-2 pt-1">
            <BreadCrumbs
              page="Details"
              pageLink="/courses/courses-details-two"
              subPage="Details 2"
            />
          </div>
        </VectorCoursesDetailsTwo>
        <Image
          src={bannerImage}
          width={856}
          height={500}
          alt="Banner Image"
          className="rounded-32px"
        />
      </div>
    </div>
  );
};

export default CoursesDetailsTwoBanner;
