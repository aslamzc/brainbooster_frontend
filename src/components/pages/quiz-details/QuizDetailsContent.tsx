"use client";
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
import QuizBody from "@/components/pages/student-profile/quiz/QuizBody";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "@/utils/axios";

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

  useEffect(() => {
    getInitialData();
  }, []);

  const getInitialData = async () => {
    try {
      const { data } = await axios.get(`/quiz/${quizId}`);
      setQuizDetails(data);
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <div className="padding-t-60 padding-b-80">
      <div className="container grid grid-cols-1 gap-6 xl:grid-cols-12">
        <div className="flex flex-col gap-6 max-xl:order-2 xl:col-start-1 xl:col-end-9">
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
        <div className="max-xl:padding-t-40 max-xl:order-1 xl:col-start-9 xl:col-end-13">
          <div className="sticky top-32 flex flex-col gap-6">
            <SidebarSearchBox placeholder="Search..." />
            <div className="padding-all-32 flex flex-col gap-6 rounded-16px bg-white">
              <H4>More Related Quiz</H4>
              <BorderHorizontalN40 />
              {moreRelatedBlogData.map(({ id, ...props }) => (
                <div key={id}>
                  <MoreRelatedBlogs key={id} {...props} />
                  <BorderHorizontalN40 />
                </div>
              ))}
              <ButtonUnderLine buttonText="See All" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizDetailsContent;
