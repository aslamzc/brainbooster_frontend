import SignUpForm from "@/components/pages/signup/SignUpForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign UP | BrainBooster",
  description: "",
};

const SignUp = () => {
  return (
    <>
      <SignUpForm />
    </>
  );
};

export default SignUp;
