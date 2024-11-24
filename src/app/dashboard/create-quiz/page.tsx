import type { Metadata } from "next";
import MyQuiz from "@/components/pages/dashboard/my-quiz/my-quiz";

export const metadata: Metadata = {
  title: "Create Quiz | BrainBooster",
  description: "Quiz Create",
};

const Page = () => {
  return (
    <>
      <MyQuiz/>
    </>
  );
};

export default Page;
