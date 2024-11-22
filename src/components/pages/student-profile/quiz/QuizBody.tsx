"use client";
import course from "@/../public/images/student-profile/course.png";
import BorderHorizontalN40 from "@/components/customBorder/BorderHorizontalN40";
import H3 from "@/components/sharedComponents/H3";
import TextM from "@/components/sharedComponents/TextM";
import { IconCheck, IconX, IconWorld } from "@tabler/icons-react";
import Image from "next/image";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { quizData } from "../../../../../public/data/quiaData";
import ButtonPrimarySmall from "../edit-profile/ButtonPrimarySmall";
import QuizQuestion from "./QuizQuestion";
import DropdownNavbar from "@/components/dropdown/DropdownNavbar";
import DropdownQuestion from "@/components/dropdown/DropdownQuestion";
import DropdownAnswer from "@/components/dropdown/DropdownAnswer";

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

    console.log(userAnswers);

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

  const handleShowAnswer = (
    e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>,
  ) => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="padding-all-32 gap-32px flex flex-col rounded-16px bg-white">
      {" "}
      <div className="flex items-center gap-6 max-lg:flex-col xl:gap-10">
        <div className="flex flex-col gap-4">
          <H3>{title}</H3>
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
      {/* quiz question */}
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
