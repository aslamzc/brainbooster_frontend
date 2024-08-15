import CardBlogGrid from "@/components/Card/CardBlogGrid";
import ButtonPagination from "@/components/button/ButtonPagination";
import { blogGridData } from "../../../../public/data/blogGridData";

const BlogGridAllCards = () => {
  return (
    <section className=" padding-t-60">
      <div className="container">
        <div className="grid items-center justify-center gap-12 md:grid-cols-2 xl:grid-cols-3">
          {blogGridData?.map(({ id, ...props }) => (
            <CardBlogGrid key={id} {...props} />
          ))}
        </div>
        {/* <div className="mx-auto mt-10 w-fit">
          <ButtonPagination />
        </div> */}
      </div>
    </section>
  );
};

export default BlogGridAllCards;
