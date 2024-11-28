import type { Metadata } from "next";
import CreateQuiz from "@/components/pages/dashboard/quiz/CreateQuiz";
import { PageContainer } from '@toolpad/core/PageContainer';

export const metadata: Metadata = {
  title: "Create Quiz | BrainBooster",
  description: "Quiz Create",
};

const Page = () => {
  return (
    <>
      <PageContainer>
        <CreateQuiz />
      </PageContainer>
    </>
  );
};

export default Page;
