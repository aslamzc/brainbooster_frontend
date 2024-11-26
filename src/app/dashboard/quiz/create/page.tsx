import type { Metadata } from "next";
import CreateQuiz from "@/components/pages/dashboard/quiz/CreateQuiz";

export const metadata: Metadata = {
  title: "Create Quiz | BrainBooster",
  description: "Quiz Create",
};

const Page = () => {
  return (
    <>
      <CreateQuiz />
    </>
  );
};

export default Page;
