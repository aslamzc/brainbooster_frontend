import SignUpForm from "@/components/pages/signup/SignUpForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign UP - Education & Online Course With Community",
  description: "Education & Online Course With Community",
};

const SignUp = () => {
  return (
    <>
      <SignUpForm />
    </>
  );
};

export default SignUp;
