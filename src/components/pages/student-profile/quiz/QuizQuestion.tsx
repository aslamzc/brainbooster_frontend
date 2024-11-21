"use client";
import CheckBoxSecondaryQuiz from "@/components/button/CheckBoxSecondaryQuiz";
import BorderHorizontalN40 from "@/components/customBorder/BorderHorizontalN40";
import H4 from "@/components/sharedComponents/H4";
import TextM from "@/components/sharedComponents/TextM";

type Props = {
  question: string;
  answers: { id: number; answer: string }[];
  handleCheckbox: (answerNo: string) => void;

};

const QuizQuestion = ({
  question,
  answers,
  handleCheckbox
}: Props) => {
  return (
    <div className="flex flex-col gap-4 rounded-8px border border-neutral-30 bg-neutral-20 p-6 sm:gap-6">
      <H4>{question}</H4>
      <BorderHorizontalN40 />
      <div className="grid gap-x-60px gap-y-4 md:grid-cols-2">
        {answers.map(({ id, answer }, index) => (
          <div key={id} className="flex items-center gap-2">
            <div className="relative block shrink-0">
              <CheckBoxSecondaryQuiz
                answerId={id}
                name={question}
                handleCheckbox={handleCheckbox}
              />
            </div>
            <TextM>{answer}</TextM>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizQuestion;
