import bannerImage from "@/../public/images/courses/coursesDetailsone/banner.png";
import BreadCrumbs from "@/components/sharedComponents/BreadCrumbs";
import VectorCoursesDetailOneBanner from "@/components/vector/VectorCoursesDetailOneBanner";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="mt-6 max-[1700px]:px-6">
      <div className="relative mx-auto max-w-[1600px] rounded-32px">
        <Image
          src={bannerImage}
          width={1600}
          height={500}
          alt="Courses Details banner image"
          className="rounded-[34px] object-cover max-sm:h-[250px]"
        />
        <VectorCoursesDetailOneBanner>
          {
            <BreadCrumbs
              page="Courses"
              pageLink="/courses/courses-one"
              subPage="Details 1"
            />
          }{" "}
        </VectorCoursesDetailOneBanner>
      </div>
    </section>
  );
};

export default Banner;
