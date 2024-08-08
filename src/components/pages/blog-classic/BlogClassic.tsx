import CardBlogClassic from "@/components/Card/CardBlogClassic";
import ButtonPagination from "@/components/button/ButtonPagination";
import ButtonUnderLine from "@/components/button/ButtonUnderLine";
import BorderHorizontalN40 from "@/components/customBorder/BorderHorizontalN40";
import H4 from "@/components/sharedComponents/H4";
import SidebarSearchBox from "@/components/sharedComponents/SidebarSearchBox";
import {
  IconBrandLaravel,
  IconBrandPhp,
  IconBrandReact,
  IconBrandVue,
  IconFileCode,
} from "@tabler/icons-react";
import { blogClassicData } from "../../../../public/data/blogClassicData";
import { coursesName } from "../../../../public/data/coursesName";
import PopularTags from "../course-two/PopularTags";
import CategoryButton from "./CategoryButton";

const BlogClassicContent = () => {
  return (
    <div className="padding-t-80 padding-b-80">
      <div className="container grid grid-cols-1 gap-6 xl:grid-cols-12">
        <div className="max-xl:order-2 xl:col-start-1 xl:col-end-9">
          <div className="gap-40px flex flex-col">
            {blogClassicData?.map(({ id, ...props }) => (
              <>
                <CardBlogClassic key={id} {...props} />
                <BorderHorizontalN40 />
              </>
            ))}
          </div>
          <div className="mx-auto mt-10 w-fit">
            <ButtonPagination />
          </div>
        </div>
        <div className=" max-xl:padding-t-40 max-xl:order-1 xl:col-start-9 xl:col-end-13">
          <div className="sticky top-32 flex flex-col gap-6">
            <SidebarSearchBox placeholder="Search..." />
            <div className="padding-all-32 flex flex-col gap-6 rounded-16px bg-white">
              <H4>Category</H4>
              <BorderHorizontalN40 />
              <div className="flex flex-col items-center gap-4">
                <CategoryButton
                  link="/courses/courses-details-one"
                  icon={<IconFileCode />}
                  text="HTML & CSS"
                />
                <CategoryButton
                  link="/courses/courses-details-one"
                  icon={<IconFileCode />}
                  text="NodeJS Courses"
                />
                <CategoryButton
                  link="/courses/courses-details-one"
                  icon={<IconBrandReact />}
                  text="React Courses"
                />
                <CategoryButton
                  link="/courses/courses-details-one"
                  icon={<IconBrandPhp />}
                  text="PHP"
                />
                <CategoryButton
                  link="/courses/courses-details-one"
                  icon={<IconBrandLaravel />}
                  text="Laravel Courses"
                />
                <CategoryButton
                  link="/courses/courses-details-one"
                  icon={<IconBrandVue />}
                  text="Vuejs Courses"
                />
              </div>
              <BorderHorizontalN40 />
              <ButtonUnderLine buttonText="See All" />
            </div>
            <div className="padding-all-32 flex flex-col gap-6 rounded-16px bg-white">
              <PopularTags tag={coursesName} />
              <BorderHorizontalN40 />
              <ButtonUnderLine buttonText="See All" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogClassicContent;
