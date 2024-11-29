import EmailVerify from "@/components/pages/emailVerify/EmailVerify";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quiz | BrainBooster",
  description: "Educational quiz platform",
};

const Page = () => {
  return (
    <>
      <EmailVerify />
    </>
  );
};

export default Page;
