"use client";
import CheckBoxQuiz from "@/components/button/CheckBoxQuiz";
import BorderHorizontalN40 from "@/components/customBorder/BorderHorizontalN40";
import H4 from "@/components/sharedComponents/H4";
import TextM from "@/components/sharedComponents/TextM";
import { IconEdit, IconMinus, IconPlus, IconTrash } from "@tabler/icons-react";
import React, { useState } from "react";
import AnimateHeight from "react-animate-height";
import { v4 as uuidv4 } from "uuid";
import EditQuizModal from "./EditQuizModal";

type quizQuestionType = {
  id: number;
  question: string;
  answers: {
    answerNo: string;
    answer: string;
  }[];
}[];

type Props = {
  id: number;
  questionIndex: number;
  question: string;
  answers: { answerNo: string; answer: string }[];
  quizQuestion: quizQuestionType;
  handleQuizData: (data: quizQuestionType) => void;
};

const InstructorQuizQuestion = ({
  id,
  question,
  answers,
  questionIndex,
  quizQuestion,
  handleQuizData,
}: Props) => {
  const [dropDown, setDropDown] = useState(false);
  const [open, setOpen] = useState(false);

  const handleModal = (
    e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>,
  ) => {
    e.preventDefault();
    setOpen(!open);
    disableScroll();
  };

  const handelDelete = (id: number) => {
    const filterDataAfterDelete = quizQuestion.filter((quiz) => quiz.id !== id);
    handleQuizData(filterDataAfterDelete);
  };

  const disableScroll = () => {
    if (!open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };
  const handleDropDown = (id: number) => {
    setDropDown(!dropDown);
  };

  return (
    <div className="rounded-8px border border-neutral-30 bg-neutral-20 p-4 sm:p-6">
      <div
        className="flex items-center justify-between gap-6"
        onClick={() => handleDropDown(id)}
      >
        <H4>{question}</H4>{" "}
        <div
          className={`theme-transition-4 rounded-full border border-neutral-30 bg-bgColorOne p-2 text-primaryColor ${
            dropDown ? "rotate-180" : ""
          }`}
        >
          {dropDown ? <IconMinus /> : <IconPlus />}
        </div>
      </div>
      <AnimateHeight
        duration={500}
        height={dropDown ? "auto" : 0}
        aria-label={`"example-panel"-${question}`}
      >
        <div className="py-6">
          <BorderHorizontalN40 />
        </div>
        <div className="grid gap-x-60px gap-y-4 md:grid-cols-2">
          {answers.map(({ answerNo, answer }, index) => (
            <div key={uuidv4()} className="flex items-center gap-2">
              <div className="relative block shrink-0 pe-3">
                <CheckBoxQuiz
                  name={question}
                  id={answerNo + questionIndex + index}
                />
              </div>{" "}
              <TextM>{answer}</TextM>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-4 pt-6 text-neutral-600">
          <button
            className=" flex items-center gap-1 rounded-8px bg-primaryColor px-4 py-2"
            onClick={handleModal}
          >
            <IconEdit size={16} />{" "}
            <span className="text-sText font-medium">Edit</span>
          </button>
          <button
            className=" flex items-center gap-1 rounded-8px bg-secondaryColor px-4 py-2"
            onClick={() => handelDelete(id)}
          >
            <IconTrash size={16} />{" "}
            <span className="text-sText font-medium">Delete</span>
          </button>
        </div>
      </AnimateHeight>
      {/* modal start */}
      <EditQuizModal
        onClick={handleModal}
        id={id}
        quizQuestion={quizQuestion}
        handleQuizData={handleQuizData}
        open={open}
      />
      {/* modal end */}
    </div>
  );
};

export default InstructorQuizQuestion;
