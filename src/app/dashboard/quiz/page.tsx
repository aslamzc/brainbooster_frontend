import QuizList from "@/components/pages/dashboard/quiz/QuizList";
import type { Metadata } from "next";
import { PageContainer } from '@toolpad/core/PageContainer';

export const metadata: Metadata = {
  title: "Quiz List | BrainBooster",
  description: "Quiz List",
};

const Page = () => {
  return (
    <>
      <PageContainer>
        <QuizList />
      </PageContainer>
    </>
  );
};

export default Page;
