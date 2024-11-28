import type { Metadata } from "next";
import EditQuiz from "@/components/pages/dashboard/quiz/EditQuiz";
import { Breadcrumb, PageContainer } from '@toolpad/core/PageContainer';

export const metadata: Metadata = {
  title: "Edit Quiz | BrainBooster",
  description: "Quiz Edit",
};

const Page = () => {
  const breadcrumbs: Breadcrumb[] = [
    { title: "Dashboard", path: "/dashboard" },
    { title: "Quiz", path: "/dashboard/quiz" },
    { title: "Quiz Edit", path: "dashboard/quiz/edit" },
  ]
  return (
    <>
      <PageContainer title="Edit Quiz" breadcrumbs={breadcrumbs}>
        <EditQuiz />
      </PageContainer>
    </>
  );
};

export default Page;
