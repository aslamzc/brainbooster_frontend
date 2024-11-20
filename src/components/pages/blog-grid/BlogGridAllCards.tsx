import { useEffect, useState } from "react";
import CardBlogGrid from "@/components/Card/CardBlogGrid";
import ButtonPagination from "@/components/button/ButtonPagination";
import { blogGridData } from "../../../../public/data/blogGridData";
import axios from "@/utils/axios";
import translateText from "@/utils/googleTranslate";

//types
type QuizeType = {
  id: number,
  title: string,
  description: string,
  created_at: string,
  name: string
}

const BlogGridAllCards = () => {

  const [quizzes, setQuizzes] = useState<Array<QuizeType>>([]);

  useEffect(() => {
    getInitialData();
  }, []);

  const getInitialData = async () => {
    try {
      const { data } = await axios.get('/quizzes');

      const userName = data.map((item: any) => item.userName);
      const title = data.map((item: any) => item.title);
      const description = data.map((item: any) => item.description);

      const nameTr = await translateText(userName, "si");
      const titleTr = await translateText(title, "si");
      const decriptionTr = await translateText(description, "si");

      data.map((item: any, key: number) => {
        item.userName = nameTr[key].translatedText
        item.title = titleTr[key].translatedText
        item.description = decriptionTr[key].translatedText
      });

      setQuizzes(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <section className=" padding-t-60">
      <div className="container">
        <div className="grid items-center justify-center gap-12 md:grid-cols-2 xl:grid-cols-3">
          {quizzes?.map((quiz) => (
            <CardBlogGrid key={quiz.id} {...quiz} />
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
