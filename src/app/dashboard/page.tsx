import type { Metadata } from "next";
import { PageContainer } from '@toolpad/core/PageContainer';
import Dashboard from "./Dashboard";

export const metadata: Metadata = {
  title: "Dashboard | BrainBooster",
  description: "Dashboard",
};

const Page = () => {
  return (
    <>
      <PageContainer>
        <Dashboard />
      </PageContainer>
    </>
  );
};

export default Page;
