import Image, { StaticImageData } from "next/image";
import VectorCoursesDetailOneBanner from "../vector/VectorCoursesDetailOneBanner";
import BreadCrumbs from "./BreadCrumbs";

type Props = {
  page?: string;
  subPage?: string;
  pageLink?: string;
  bannerImage: StaticImageData;
};

const Banner1600WithBreadCrumbs = ({
  page,
  subPage,
  pageLink,
  bannerImage,
}: Props) => {
  return (
    <section className="mx-4 pt-6 md:max-[1700px]:px-6">
      <div className="relative mx-auto max-w-[1600px] rounded-32px">
        <Image
          src={bannerImage}
          width={1600}
          height={500}
          alt="Courses Details banner image"
          className="rounded-[34px] object-cover max-sm:h-[250px]"
        />
        {page && subPage && pageLink && (
          <VectorCoursesDetailOneBanner>
            {<BreadCrumbs page={page} subPage={subPage} pageLink={pageLink} />}
          </VectorCoursesDetailOneBanner>
        )}
      </div>
    </section>
  );
};

export default Banner1600WithBreadCrumbs;
