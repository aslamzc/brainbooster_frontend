import ButtonPrimary from "@/components/button/ButtonPrimary";
import ButtonUnderLine from "@/components/button/ButtonUnderLine";
import BorderHorizontalN40 from "@/components/customBorder/BorderHorizontalN40";
import D4 from "@/components/sharedComponents/D4";
import H2 from "@/components/sharedComponents/H2";
import H3 from "@/components/sharedComponents/H3";
import H4 from "@/components/sharedComponents/H4";
import SidebarSearchBox from "@/components/sharedComponents/SidebarSearchBox";
import TextM from "@/components/sharedComponents/TextM";
import { coursesName } from "../../../../public/data/coursesName";
import { moreRelatedBlogData } from "../../../../public/data/moreRelatedBlogData";
import BlogInfo from "../blog-classic/BlogInfo";
import PopularTags from "../course-two/PopularTags";
import TabReviewComment from "../courses-details-one/TabReviewComment";
import MoreRelatedBlogs from "./MoreRelatedBlogs";
import WriteAComment from "./WriteAComment";

const BlogDetailsContent = () => {
  return (
    <div className="padding-t-80 padding-b-80">
      <div className="container grid grid-cols-1 gap-6 xl:grid-cols-12">
        <div className="flex flex-col gap-6 max-xl:order-2 xl:col-start-1 xl:col-end-9">
          <div className="padding-all-32 gap-32px flex flex-col rounded-16px bg-white">
            <div className="flex flex-col gap-6 ">
              <BlogInfo
                by="Admin"
                view={1.5}
                message={"25"}
                date="12 Sep, 2023"
              />
              <D4>Mastering the Art of Time Management in Online</D4>
              <TextM>
                Unlock the secrets to effective time management in the digital
                learning space. Learn practical tips to balance coursework,
                projects, and personal commitments. Time management is a
                critical skill for success in online learning. With the
                flexibility of virtual classrooms comes the responsibility of
                structuring your time effectively.{" "}
              </TextM>
              <TextM>
                In this blog post, we&apos;ll explore practical strategies and
                tips for mastering the art of time management in the online
                learning environment.
              </TextM>
            </div>
            <BorderHorizontalN40 />
            <div className="flex flex-col gap-4">
              <H2>Set Clear Goals and Priorities:</H2>
              <TextM>
                Define your academic and personal goals. Prioritize tasks based
                on their importance and deadlines. This clarity will guide your
                daily schedule.
              </TextM>
            </div>
            <BorderHorizontalN40 />
            <div className="flex flex-col gap-4">
              <H3>Create a Structured Study Schedule:</H3>
              <TextM>
                Develop a weekly study schedule that aligns with your goals.
                Allocate specific time slots for different subjects or tasks to
                maintain a sense of structure.
              </TextM>
            </div>
            <BorderHorizontalN40 />
            <div className="flex flex-col gap-4">
              <H4>Utilize Time Blocking Techniques:</H4>
              <TextM>
                Experiment with time blocking to maximize focus. Dedicate
                uninterrupted blocks of time to specific activities, whether
                it&apos;s reading, assignments, or collaborative projects.
              </TextM>
            </div>
            <BorderHorizontalN40 />
            <div className="flex flex-col gap-4">
              <h5 className="h5 font-semibold">Use Productivity Tools:</h5>
              <TextM>
                Leverage productivity tools and apps to stay organized. Calendar
                apps, to-do lists, and task management tools can be invaluable
                in keeping track of deadlines and assignments.
              </TextM>
            </div>
            <BorderHorizontalN40 />
            <div className="flex flex-col gap-4">
              <h5 className="h6 font-semibold">
                Seek Support and Collaboration:
              </h5>
              <TextM>
                Connect with fellow students for support and collaborative
                efforts. Sharing insights and working together can enhance the
                learning experience and time management skills.
              </TextM>
              <TextM>
                Mastering time management in online learning is an ongoing
                process. By implementing these strategies, you&apos;ll not only
                meet academic demands but also cultivate valuable skills for
                lifelong success.
              </TextM>
            </div>
          </div>
          {/* comment section start */}
          <div className="padding-all-32 gap-32px flex flex-col rounded-16px bg-white">
            <h2 className="h4 font-semibold">All Comments</h2>
            <BorderHorizontalN40 />
            <TabReviewComment bg="white" />
            <TabReviewComment bg="white" />
            <ButtonPrimary buttonText="See All Comments" button />
          </div>
          <WriteAComment />
          {/* comment section end */}
        </div>
        <div className="max-xl:padding-t-40 max-xl:order-1 xl:col-start-9 xl:col-end-13">
          <div className="sticky top-32 flex flex-col gap-6">
            <SidebarSearchBox placeholder="Search..." />
            <div className="padding-all-32 flex flex-col gap-6 rounded-16px bg-white">
              <H4>More Related Blogs</H4>
              <BorderHorizontalN40 />
              {moreRelatedBlogData.map(({ id, ...props }) => (
                <>
                  <MoreRelatedBlogs key={id} {...props} />
                  <BorderHorizontalN40 />
                </>
              ))}

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

export default BlogDetailsContent;
