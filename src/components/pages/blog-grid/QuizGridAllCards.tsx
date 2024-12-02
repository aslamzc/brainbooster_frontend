"use client";
import { useEffect, useState } from "react";
import CardQuizGrid from "@/components/Card/CardQuizGrid";
import axios from "@/utils/axios";
import translateText from "@/utils/googleTranslate";
import { useLanguage } from "@/utils/i18n/LanguageContext";
import Loading from "@/app/loading2";
import CourseOneBannerWithLabel from "../course-one/CourseOneBannerWithLabel";
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

  const [quizzes, setQuizzes] = useState<Array<QuizeType>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    getInitialData();
  }, []);

  useEffect(() => {
    search();
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
      setLoading(false);
    }
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }

  const search = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get('/quiz/search/' + searchTerm);
      if (data.length !== 0) {
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
      }
      setQuizzes(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  return (
    <>
      <CourseOneBannerWithLabel title={t('text_7')} handleSearch={handleSearch} search={search} />
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
        </div>
      </section>
    </>
  );
};

export default QuizGridAllCards;
