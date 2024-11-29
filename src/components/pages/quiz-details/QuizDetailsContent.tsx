"use client";
import BlogInfo from "../blog-classic/BlogInfo";
import QuizBody from "@/components/pages/student-profile/quiz/QuizBody";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "@/utils/axios";
import Loading from "@/app/loading";
import { useLanguage } from "@/utils/i18n/LanguageContext";
import translateText from "@/utils/googleTranslate";

//types
type QuizDetailsType = {
  id: number,
  title: string,
  description: string,
  createdAt: string,
  userName: string,
  questions: Array<QuestionType>,
}

type QuestionType = {
  id: number,
  question: string,
  answers: Array<AnswerType>,
}

type AnswerType = {
  id: number,
  answer: string,
  isCorrect: boolean
}

const QuizDetailsContent = () => {

  const [quizDetails, setQuizDetails] = useState<QuizDetailsType>();
  const { quizId } = useParams();
  const { push } = useRouter();
  const { language } = useLanguage();

  useEffect(() => {
    getInitialData();
  }, []);

  useEffect(() => {
    getInitialData();
  }, [language]);

  const getInitialData = async () => {
    try {
      const { data } = await axios.get(`/quiz/${quizId}`);
      if (data?.userName && data?.createdAt) {
        const trArr = await translateText([data?.userName, data?.createdAt], language);
        data.userName = trArr[0].translatedText;
        data.createdAt = trArr[1].translatedText;
      }
      setQuizDetails(data);
    } catch (error) {
      console.error(error);
      push('/not-found')
    }
  }

  return (
    <>
      {quizDetails
        ?
        <div className="padding-t-60 padding-b-80">
          < div className="container grid grid-cols-1 gap-6 xl:grid-cols-12" >
            <div className="flex flex-col gap-6 max-xl:order-2 xl:col-start-1 xl:col-end-13">
              <div className="padding-all-32 gap-32px flex flex-col rounded-16px bg-white">
                <div className="flex flex-col gap-6 ">
                  <BlogInfo
                    by={quizDetails?.userName || "Guest User"}
                    view={2}
                    message={"25"}
                    date={quizDetails?.createdAt || ""}
                  />
                  {quizDetails && <QuizBody {...quizDetails} />}
                </div>
              </div>
            </div>
          </div>
        </div>
        :
        <Loading />
      }
    </>
  );
};

export default QuizDetailsContent;
