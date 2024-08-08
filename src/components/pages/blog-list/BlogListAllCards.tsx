import CardBlogList from "@/components/Card/CardBlogList";
import ButtonPagination from "@/components/button/ButtonPagination";
import { blogGridData } from "../../../../public/data/blogGridData";

const BlogListAllCards = () => {
  return (
    <section className=" padding-t-60">
      <div className="container">
        <div className="grid items-center justify-center gap-12 xxl:grid-cols-2">
          {blogGridData?.map(({ id, ...props }) => (
            <CardBlogList key={id} {...props} />
          ))}
        </div>
        <div className="mx-auto mt-10 w-fit">
          <ButtonPagination />
        </div>
      </div>
    </section>
  );
};

export default BlogListAllCards;
