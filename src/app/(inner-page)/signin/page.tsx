import SignInForm from "@/components/pages/signin/SignInForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In | BrainBooster",
  description: "",
};

const SignIn = () => {
  return (
    <>
      <SignInForm />
    </>
  );
};

export default SignIn;
