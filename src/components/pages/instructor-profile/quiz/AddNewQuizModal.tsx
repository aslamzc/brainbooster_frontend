"use client";
import BorderHorizontalN40 from "@/components/customBorder/BorderHorizontalN40";
import H4 from "@/components/sharedComponents/H4";
import { IconX } from "@tabler/icons-react";
import { useState } from "react";
import ButtonOutlineSmall from "../../student-profile/edit-profile/ButtonOutlineSmall";
import ButtonPrimarySmall from "../../student-profile/edit-profile/ButtonPrimarySmall";

type quizQuestionType = {
  id: number;
  question: string;
  answers: {
    answerNo: string;
    answer: string;
  }[];
}[];

type Props = {
  open: boolean;
  onClick: (
    event: React.MouseEvent<HTMLButtonElement | HTMLDivElement>,
  ) => void;
  quizQuestion: quizQuestionType;
  handleQuizData: (data: quizQuestionType) => void;
};

const AddNewQuizModal = ({
  open,
  onClick,
  quizQuestion,
  handleQuizData,
}: Props) => {
  const [formData, setFormData] = useState({
    id: 434,
    question: "",
    answers: [
      { answerNo: "a", answer: "" },
      { answerNo: "b", answer: "" },
      { answerNo: "c", answer: "" },
      { answerNo: "d", answer: "" },
    ],
  });

  const id = formData.question.split(" ").join("");

  const handleQuestionChange = (value: string) => {
    setFormData({ ...formData, question: value });
  };

  const handleAnswerChange = (answerNo: string, value: string) => {
    const updatedAnswers = formData.answers.map((answer) =>
      answer.answerNo === answerNo ? { ...answer, answer: value } : answer,
    );
    setFormData({ ...formData, answers: updatedAnswers });
  };

  const handleUpdateQuiz = (
    e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>,
  ) => {
    e.preventDefault();

    const randomDecimal = Math.random() * 1000000;

    const randomInteger = Math.round(randomDecimal);

    setFormData({ ...formData, id: randomInteger });
    // Update the quizData array with the new data
    const updatedQuizData = [...quizQuestion, formData];
    onClick(e);
    handleQuizData(updatedQuizData);
  };

  return (
    <div>
      <div
        onClick={onClick}
        className={`theme-transition-8 fixed left-0 top-0 z-[200]  h-screen w-screen bg-[#071431] bg-opacity-[0.7] ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
      ></div>

      <div
        className={`${
          open
            ? "translate-y-16 lg:translate-y-20 xxl:translate-y-100px"
            : "-translate-y-full"
        } 
      padding-all-32 theme-transition-6 fixed left-1/2 top-0
        z-[500] h-fit max-w-[792px] -translate-x-1/2 rounded-16px border  border-neutral-30 bg-white
      max-sm:min-w-[300px] md:min-w-[500px]
      `}
      >
        <div>
          <div className="flex items-center justify-between gap-4 sm:gap-6">
            <H4>Edit Question</H4>
            <button
              className="rounded-full bg-bgColorOne p-2 text-primaryColor"
              onClick={onClick}
            >
              <IconX size={20} />
            </button>
          </div>
          <div className="py-6">
            <BorderHorizontalN40 />
          </div>
          <div className="top-0 overflow-y-auto rounded-8px border border-neutral-30 bg-neutral-20 p-4 max-lg:h-[450px] md:p-6">
            <form className="flex flex-col gap-4 md:gap-6 ">
              <div className="flex flex-col gap-3 md:gap-4">
                <label className="lText block font-medium" htmlFor={`${id}`}>
                  Question
                </label>
                <input
                  value={formData.question}
                  onChange={(e) => handleQuestionChange(e.target.value)}
                  className="w-full rounded-32px border border-neutral-40 bg-neutral-10 px-6 py-3 focus:outline-none"
                  id={`${id}`}
                  type="text"
                  placeholder="Write a question
                
            "
                />
              </div>
              <div>
                <BorderHorizontalN40 />
              </div>
              <div className="grid gap-6 md:grid-cols-2 xxl:gap-60px">
                <div className="flex flex-col gap-4">
                  <label
                    className="lText block font-medium"
                    htmlFor={`${id}add-questionA`}
                  >
                    Option : A
                  </label>
                  <input
                    className="w-full rounded-32px border border-neutral-40 bg-neutral-10 px-6 py-3 focus:outline-none"
                    id={`${id}add-questionA`}
                    type="text"
                    placeholder="Write a option"
                    value={formData.answers[0].answer}
                    onChange={(e) => handleAnswerChange("a", e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <label
                    className="lText block font-medium"
                    htmlFor={`${id}add-questionB`}
                  >
                    Option : B
                  </label>
                  <input
                    className="w-full rounded-32px border border-neutral-40 bg-neutral-10 px-6 py-3 focus:outline-none"
                    id={`${id}add-questionB`}
                    type="text"
                    placeholder="Write a option"
                    value={formData.answers[1].answer}
                    onChange={(e) => handleAnswerChange("b", e.target.value)}
                  />
                </div>
              </div>
              <div className="grid gap-6 md:grid-cols-2 xxl:gap-60px">
                <div className="flex flex-col gap-4">
                  <label
                    className="lText block font-medium"
                    htmlFor={`${id}add-questionC`}
                  >
                    Option : C
                  </label>
                  <input
                    className="w-full rounded-32px border border-neutral-40 bg-neutral-10 px-6 py-3 focus:outline-none"
                    id={`${id}add-questionC`}
                    type="text"
                    placeholder="Write a option"
                    value={formData.answers[2].answer}
                    onChange={(e) => handleAnswerChange("c", e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <label
                    className="lText block font-medium"
                    htmlFor={`${id}add-questionD`}
                  >
                    Option : D
                  </label>
                  <input
                    className="w-full rounded-32px border border-neutral-40 bg-neutral-10 px-6 py-3 focus:outline-none"
                    id={`${id}add-questionD`}
                    type="text"
                    placeholder="Write a option"
                    value={formData.answers[3].answer}
                    onChange={(e) => handleAnswerChange("d", e.target.value)}
                  />
                </div>
              </div>
              <div className="flex items-center gap-4 max-md:flex-col  md:gap-6">
                <ButtonPrimarySmall
                  buttonText="Add Quiz"
                  onClick={handleUpdateQuiz}
                />
                <ButtonOutlineSmall buttonText="Close" onClick={onClick} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewQuizModal;
