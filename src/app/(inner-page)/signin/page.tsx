import SignInForm from "@/components/pages/signin/SignInForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In - Education & Online Course With Community",
  description: "Education & Online Course With Community",
};

const SignIn = () => {
  return (
    <>
      <SignInForm />
    </>
  );
};

export default SignIn;
