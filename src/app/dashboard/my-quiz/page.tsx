import type { Metadata } from "next";
import { Typography } from '@mui/material';

export const metadata: Metadata = {
  title: "My Quiz | BrainBooster",
  description: "My Quiz",
};

const Page = () => {
  return (
    <>
      <Typography variant="h6">Welcome</Typography>
    </>
  );
};

export default Page;
