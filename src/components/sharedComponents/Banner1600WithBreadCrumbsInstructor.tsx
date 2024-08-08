import Image, { StaticImageData } from "next/image";
import VectorCoursesDetailOneBannerInstructor from "../vector/VectorCoursesDetailOneBannerInstructor";
import BreadCrumbs from "./BreadCrumbs";

type Props = {
  page?: string;
  subPage?: string;
  pageLink?: string;
  bannerImage: StaticImageData;
};

const Banner1600WithBreadCrumbsInstructor = ({
  page,
  subPage,
  pageLink,
  bannerImage,
}: Props) => {
  return (
    <section className="mx-4 mt-6 md:max-[1700px]:px-6">
      <div className="relative mx-auto max-w-[1600px] rounded-32px">
        <Image
          src={bannerImage}
          width={1600}
          height={500}
          alt="Courses Details banner image"
          className="rounded-[34px] object-cover max-sm:h-[250px]"
        />
        {page && subPage && pageLink && (
          <VectorCoursesDetailOneBannerInstructor>
            {<BreadCrumbs page={page} subPage={subPage} pageLink={pageLink} />}
          </VectorCoursesDetailOneBannerInstructor>
        )}
      </div>
    </section>
  );
};

export default Banner1600WithBreadCrumbsInstructor;
