import { useEffect, useState } from "react";
import CardQuizGrid from "@/components/Card/CardQuizGrid";
import ButtonPagination from "@/components/button/ButtonPagination";
import { blogGridData } from "../../../../public/data/blogGridData";
import axios from "@/utils/axios";
import translateText from "@/utils/googleTranslate";
import { useLanguage } from "@/utils/i18n/LanguageContext";
import Loading from "@/app/loading";
import { set } from "react-hook-form";

//types
type QuizeType = {
  id: number,
  title: string,
  description: string,
  createdAt: string,
  userName: string
}

const QuizGridAllCards = () => {

  const { language } = useLanguage();

  const [quizzes, setQuizzes] = useState<Array<QuizeType>>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    getInitialData();
  }, []);

  useEffect(() => {
    getInitialData();
  }, [language]);

  const getInitialData = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get('/quizzes');
      const userName = data.map((item: any) => item.userName);
      const title = data.map((item: any) => item.title);
      const description = data.map((item: any) => item.description);

      const nameTr = await translateText(userName, language);
      const titleTr = await translateText(title, language);
      const decriptionTr = await translateText(description, language);

      data.map((item: any, key: number) => {
        item.userName = nameTr[key].translatedText
        item.title = titleTr[key].translatedText
        item.description = decriptionTr[key].translatedText
      });

      setQuizzes(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <section className="padding-t-60">
      <div className="container">
        {loading && <Loading />}
        {!loading &&
          <div className="grid items-center justify-center gap-12 md:grid-cols-2 xl:grid-cols-3">
            {quizzes?.map((quiz) => (
              <CardQuizGrid key={quiz.id} {...quiz} />
            ))}
          </div>
        }
        {/* <div className="mx-auto mt-10 w-fit">
          <ButtonPagination />
        </div> */}
      </div>
    </section>
  );
};

export default QuizGridAllCards;
