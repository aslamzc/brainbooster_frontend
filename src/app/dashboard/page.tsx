import type { Metadata } from "next";
import { Typography } from '@mui/material';

export const metadata: Metadata = {
  title: "Dashboard | BrainBooster",
  description: "Dashboard",
};

const Page = () => {
  return (
    <>
      <Typography variant="h6">Welcome</Typography>
    </>
  );
};

export default Page;
