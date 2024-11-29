import type { Metadata } from "next";
import { Typography } from '@mui/material';
import { PageContainer } from '@toolpad/core/PageContainer';

export const metadata: Metadata = {
  title: "Dashboard | BrainBooster",
  description: "Dashboard",
};

const Page = () => {
  return (
    <>
      <PageContainer>
        <Typography variant="h6">Welcome M N M Aslam</Typography>
      </PageContainer>
    </>
  );
};

export default Page;
