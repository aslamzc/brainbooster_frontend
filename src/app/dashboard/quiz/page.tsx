import QuizList from "@/components/pages/dashboard/quiz/QuizList";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quiz List | BrainBooster",
  description: "Quiz List",
};

const Page = () => {
  return (
    <>
      <QuizList />
    </>
  );
};

export default Page;
