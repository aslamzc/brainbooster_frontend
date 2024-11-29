"use client";
import BorderHorizontalN40 from "@/components/customBorder/BorderHorizontalN40";
import H3 from "@/components/sharedComponents/H3";
import TextM from "@/components/sharedComponents/TextM";
import { IconCheck, IconX, IconWorld } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ButtonPrimarySmall from "../edit-profile/ButtonPrimarySmall";
import QuizQuestion from "./QuizQuestion";
import DropdownQuestion from "@/components/dropdown/DropdownQuestion";
import DropdownAnswer from "@/components/dropdown/DropdownAnswer";
import translateText from "@/utils/googleTranslate";
import { useLanguage } from "@/utils/i18n/LanguageContext";

const language = [
  { label: "English", language: "en" },
  { label: "Sinhala", language: "si" },
  { label: "Tamil", language: "ta" }
];

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

type UserAnswerType = {
  questionId: number,
  answerId: number,
  question: string,
  isCorrect: boolean,
  answer: string,
  correctAnswer: string

}

const QuizBody = ({ id, title, description, createdAt, userName, questions }: QuizDetailsType) => {
  const [userAnswers, setUserAnswers] = useState<Array<UserAnswerType>>([]);
  const [showAnswer, setShowAnswer] = useState(false);
  const [questionLanguage, setQuestionLanguage] = useState("en");
  const [answerLanguage, setAnswerLanguage] = useState("en");
  const [titleTr, setTitleTr] = useState(title);

  const { language: siteLanguage } = useLanguage();

  useEffect(() => {
    translateTitle();
  }, [siteLanguage]);

  useEffect(() => {
    translateUserAnswers();
  }, [questionLanguage, answerLanguage]);

  const translateTitle = async () => {
    const translatedTitle = await translateText(title, siteLanguage);
    setTitleTr(translatedTitle[0].translatedText);
  }

  const handleCheckbox = (questionId: number, answerId: string) => {

    const existingAnswer = userAnswers.find((item) => item.questionId === questionId);
    const answerDetails = getAnswerDetails(questionId, Number(answerId));

    if (existingAnswer) {
      existingAnswer.answerId = Number(answerId);
      existingAnswer.question = answerDetails?.question ?? "";
      existingAnswer.isCorrect = answerDetails?.isCorrect ?? false;
      existingAnswer.answer = answerDetails?.userAnswer ?? "";
      existingAnswer.correctAnswer = answerDetails?.correctAnswer ?? "";

    } else {

      setUserAnswers([
        ...userAnswers,
        {
          questionId,
          answerId: Number(answerId),
          question: answerDetails?.question ?? "",
          isCorrect: answerDetails?.isCorrect ?? false,
          answer: answerDetails?.userAnswer ?? "",
          correctAnswer: answerDetails?.correctAnswer ?? "",
        },
      ]);
    }
  };

  const getAnswerDetails = (questionId: number, answerId: number) => {
    const question = questions.find((item) => item.id === questionId);
    if (question) {
      return {
        question: question.question,
        userAnswer: question.answers.find((item) => item.id === answerId)?.answer,
        correctAnswer: question.answers.find((item) => item.isCorrect)?.answer,
        isCorrect: question.answers.find((item) => item.id === answerId)?.isCorrect
      };
    }
    return null;
  };

  const handleShowAnswer = async (e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
    await translateUserAnswers();
    setShowAnswer(!showAnswer);
  };

  const translateUserAnswers = async () => {
    if (userAnswers.length !== 0) {
      const questionsToTranslate = userAnswers.map((item) => item.question);
      const correctAnswersToTranslate = userAnswers.map((item) => item.correctAnswer);
      const userAnswersToTranslate = userAnswers.map((item) => item.answer);

      const translatedQuestions = await translateText(questionsToTranslate, questionLanguage);
      const translatedCorrectAnswers = await translateText(correctAnswersToTranslate, answerLanguage);
      const translatedUserAnswers = await translateText(userAnswersToTranslate, answerLanguage);

      const updatedUserAnswers = userAnswers.map((item, index) => (
        {
          ...item,
          question: translatedQuestions[index].translatedText,
          correctAnswer: translatedCorrectAnswers[index].translatedText,
          answer: translatedUserAnswers[index].translatedText,
        }
      ));
      setUserAnswers(updatedUserAnswers);
    }
  };

  return (
    <div className="padding-all-32 gap-32px flex flex-col rounded-16px bg-white">
      {" "}
      <div className="flex items-center gap-6 max-lg:flex-col xl:gap-10">
        <div className="flex flex-col gap-4">
          <H3>{titleTr}</H3>
          <div className="flex flex-row gap-4">
            <div className="padding-s-32 padding-e-32 flex items-center justify-center gap-2 rounded-60px border-neutral-20 bg-neutral-20 py-4">
              <TextM>Question</TextM>
              <IconWorld />
              <DropdownQuestion options={language} setQuestionLanguage={setQuestionLanguage} />
            </div>
            <div className="padding-s-32 padding-e-32 flex items-center justify-center gap-2 rounded-60px border-neutral-20 bg-neutral-20 py-4">
              <TextM>Answer</TextM>
              <IconWorld />
              <DropdownAnswer options={language} setAnswerLanguage={setAnswerLanguage} />
            </div>
          </div>
        </div>
      </div>
      <BorderHorizontalN40 />
      {!showAnswer ? (
        <>
          <div className="flex flex-col gap-6">
            {questions.map(({ question, answers, id }, index) => (
              <QuizQuestion
                key={index}
                handleCheckbox={(answerId) => handleCheckbox(id, answerId)}
                question={question}
                answers={answers}
                questionLanguage={questionLanguage}
                answerLanguage={answerLanguage}
              />
            ))}
          </div>
          <ButtonPrimarySmall
            buttonText="View Result"
            onClick={(e) => handleShowAnswer(e)}
          />
        </>
      ) : (
        <>
          <div className="flex flex-col gap-5 rounded-8px border border-neutral-30 bg-neutral-20 p-6">
            {
              userAnswers.map((item) => (
                <div
                  key={uuidv4()}
                  className="flex flex-col gap-3 text-xl font-medium text-neutral-500"
                >
                  <p>{item.question}</p>
                  {item.isCorrect
                    ?
                    <div className="flex flex-row">
                      <p>Answer : {item.answer}</p>
                      <IconCheck size={32} className="text-secondaryColorTwo" />
                    </div>
                    :
                    <>
                      <div className="flex flex-row">
                        <p>Answer : {item.answer}</p>
                        <IconX size={32} className="text-[#FF0505]" />
                      </div>
                      <div className="flex flex-row">
                        <p>Correct Answer : {item.correctAnswer}</p>
                        <IconCheck size={32} className="text-secondaryColorTwo" />
                      </div>
                    </>
                  }
                </div>
              ))
            }
          </div>
          <ButtonPrimarySmall
            buttonText="Back To Quiz"
            onClick={(e) => handleShowAnswer(e)}
          />
        </>
      )}
    </div >
  );
};

export default QuizBody;
