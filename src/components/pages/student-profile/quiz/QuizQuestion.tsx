"use client";
import CheckBoxSecondaryQuiz from "@/components/button/CheckBoxSecondaryQuiz";
import BorderHorizontalN40 from "@/components/customBorder/BorderHorizontalN40";
import H4 from "@/components/sharedComponents/H4";
import TextM from "@/components/sharedComponents/TextM";
import translateText from "@/utils/googleTranslate";
import { useEffect, useState } from "react";

type Props = {
  question: string;
  answers: { id: number; answer: string }[];
  handleCheckbox: (answerNo: string) => void;
  questionLanguage: string;
};

const QuizQuestion = ({ question, answers, handleCheckbox, questionLanguage }: Props) => {

  const [translatedQuestion, setTranslatedQuestion] = useState(question);
  const [translatedAnswer, setTranslatedAnswer] = useState(answers);

  useEffect(() => {
    translateQuestion();
    translateAnswers();
  }, [questionLanguage]);

  const translateQuestion = async () => {
    const translatedQuestionText = await translateText(question, questionLanguage);
    setTranslatedQuestion(translatedQuestionText[0].translatedText);
  }

  const translateAnswers = async () => {
    const answersToTranslate = answers.map(answer => answer.answer);
    const translatedAnswers = await translateText(answersToTranslate, questionLanguage);
    const updatedAnswers = answers.map((answer, index) => ({
      ...answer,
      answer: translatedAnswers[index].translatedText,
    }));
    setTranslatedAnswer(updatedAnswers);
  };


  return (
    <div className="flex flex-col gap-4 rounded-8px border border-neutral-30 bg-neutral-20 p-6 sm:gap-6">
      <H4>{translatedQuestion}</H4>
      <BorderHorizontalN40 />
      <div className="grid gap-x-60px gap-y-4 md:grid-cols-2">
        {translatedAnswer.map(({ id, answer }, index) => (
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
