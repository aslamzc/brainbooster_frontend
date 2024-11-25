import QuizList from "@/components/pages/dashboard/quiz/QuizList";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Quiz | BrainBooster",
  description: "My Quiz",
};

const Page = () => {
  return (
    <>
      <QuizList/>
    </>
  );
};

export default Page;
