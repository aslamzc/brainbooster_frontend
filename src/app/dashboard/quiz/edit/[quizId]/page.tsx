import type { Metadata } from "next";
import EditQuiz from "@/components/pages/dashboard/quiz/EditQuiz";

export const metadata: Metadata = {
  title: "Edit Quiz | BrainBooster",
  description: "Quiz Edit",
};

const Page = () => {
  return (
    <>
      <EditQuiz />
    </>
  );
};

export default Page;
