"use client";
import course from "@/../public/images/student-profile/course.png";
import BorderHorizontalN40 from "@/components/customBorder/BorderHorizontalN40";
import H3 from "@/components/sharedComponents/H3";
import TextM from "@/components/sharedComponents/TextM";
import Image from "next/image";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ButtonOutlineSmall from "../../student-profile/edit-profile/ButtonOutlineSmall";
import ButtonPrimarySmall from "../../student-profile/edit-profile/ButtonPrimarySmall";
import AddNewQuizModal from "./AddNewQuizModal";
import InstructorQuizQuestion from "./InstructorQuizQuestion";

const InstructorQuiz = () => {
  const quizData = [
    {
      id: 1230201,
      question: "Q1. What is the primary focus of the field of epidemiology?",
      answers: [
        { answerNo: "a", answer: "Diagnosis of diseases" },
        { answerNo: "b", answer: "Treatment planning" },
        { answerNo: "c", answer: "Disease prevention and patterns" },
        { answerNo: "d", answer: "Surgical procedures" },
      ],
    },
    {
      id: 1230202,
      question: "Q2. What is the purpose of a placebo in clinical trials?",
      answers: [
        { answerNo: "a", answer: "To test the efficacy of a new drug" },
        {
          answerNo: "b",
          answer: "To deceive participants about the treatment",
        },
        { answerNo: "c", answer: "To induce side effects intentionally" },
        { answerNo: "d", answer: "To act as an active control in experiments" },
      ],
    },
    {
      id: 1230203,
      question:
        "Q3. What is the main objective of vaccination in public health?",
      answers: [
        { answerNo: "a", answer: "To cure infectious diseases" },
        { answerNo: "b", answer: "To prevent the spread of diseases" },
        { answerNo: "c", answer: "To boost overall immunity" },
        { answerNo: "d", answer: "To treat existing infections" },
      ],
    },
    {
      id: 1230204,
      question: "Q4. What does the acronym DNA stand for in genetics?",
      answers: [
        { answerNo: "a", answer: "Deoxyribonucleic Acid" },
        { answerNo: "b", answer: "Ribonucleic Acid" },
        { answerNo: "c", answer: "Deoxyribose Nucleotide Assembly" },
        { answerNo: "d", answer: "Ribose Nucleic Acid" },
      ],
    },
    {
      id: 1230205,
      question: "Q5. What is the primary role of insulin in the human body?",
      answers: [
        { answerNo: "a", answer: "Regulating blood sugar levels" },
        { answerNo: "b", answer: "Enhancing muscle strength" },
        { answerNo: "c", answer: "Controlling heart rate" },
        { answerNo: "d", answer: "Assisting in digestion" },
      ],
    },
  ];
  const [open, setOpen] = useState(false);
  const [quizQuestion, setQuizQuestion] = useState(quizData);

  type QuizData = {
    id: number;
    question: string;
    answers: {
      answerNo: string;
      answer: string;
    }[];
  }[];

  const handleQuizData = (data: QuizData) => {
    setQuizQuestion(data);
  };
  const handleModal = (
    e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>,
  ) => {
    e.preventDefault();
    setOpen(!open);
    disableScroll();
  };

  const disableScroll = () => {
    if (!open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };
  return (
    <div className="padding-all-32 gap-32px flex flex-col rounded-16px bg-white">
      {" "}
      <div className="flex items-center gap-6 max-lg:flex-col xl:gap-10">
        <div className="overflow-hidden rounded-16px">
          <Image
            src={course}
            width={171}
            height={120}
            alt="course thumbnail"
            className="theme-transition-3 rounded-16px hover:scale-105"
          />
        </div>
        <div className="flex flex-col gap-4">
          <H3>The Complete Health Sciences & Medicine Courses </H3>
          <div className="flex items-center justify-between gap-4 max-[400px]:flex-col sm:gap-6">
            <TextM>120 Courses In 01</TextM>{" "}
            <ButtonOutlineSmall
              buttonText="Add New Quiz"
              onClick={handleModal}
            />
          </div>
        </div>
      </div>
      {/* quiz question */}
      <BorderHorizontalN40 />
      <div className="flex flex-col gap-6">
        {quizQuestion.map(({ question, answers, id }, index) => (
          <InstructorQuizQuestion
            key={uuidv4()}
            id={id}
            question={question}
            answers={answers}
            questionIndex={index}
            quizQuestion={quizQuestion}
            handleQuizData={handleQuizData}
          />
        ))}
      </div>
      <div className="padding-t-40-mt-6">
        <ButtonPrimarySmall buttonText="Submit" />
      </div>
      <AddNewQuizModal
        onClick={handleModal}
        open={open}
        quizQuestion={quizQuestion}
        handleQuizData={handleQuizData}
      />
    </div>
  );
};

export default InstructorQuiz;
