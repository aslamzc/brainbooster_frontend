import type { Metadata } from "next";
import MyQuiz from "@/components/pages/dashboard/my-quiz/my-quiz";

export const metadata: Metadata = {
  title: "My Quiz | BrainBooster",
  description: "My Quiz",
};

const Page = () => {
  return (
    <>
      <MyQuiz></MyQuiz>
    </>
  );
};

export default Page;
