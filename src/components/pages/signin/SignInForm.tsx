"use client";
import image from "@/../public/images/signup.png";
import { IconEye, IconEyeOff } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ButtonPrimarySmall from "../student-profile/edit-profile/ButtonPrimarySmall";
import { form, loginFormType } from "./LoginSchema";
import axios from "@/utils/axios";
import Cookies from "js-cookie";

type ResponseType = {
  accessToken: string
}
const SignInForm = () => {

  const [passwordShow, setPasswordShow] = useState(false);

  const { register, handleSubmit, formState: { errors } } = form();

  const onSubmit = async (data: loginFormType) => {
    try {
      const res: ResponseType = await axios.post('/login', data);
      localStorage.setItem('accessToken', res.accessToken);

      const expirationTime = new Date(
        new Date().getTime() + 1 * 60 * 60 * 1000
      )

      Cookies.set("accessToken", res.accessToken, {
        expires: expirationTime,
        path: "/",
      });
      window.location.href = "/dashboard";
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="section-gap-top section-gap-bottom">
      <div className="container grid items-center justify-between gap-20 max-xxl:grid-flow-row max-xxl:justify-center xxl:grid-cols-2 xxl:gap-40">
        <div className="mx-auto w-full max-xl:order-2">
          <div className="padding-all-32 rounded-16px border-neutral-30 bg-neutral-20">
            <h3 className="h3 font-semibold">Welcome Back!</h3>
            <p className="pt-6 text-mText text-neutral-500">
              Sign in to your account and join us
            </p>
            <form className="padding-t-40" onSubmit={handleSubmit(onSubmit)}>
              <div className=" flex flex-col justify-between gap-6">
                <div className="flex flex-col gap-4">
                  <label
                    className="lText block font-medium text-neutral-500"
                    htmlFor="email"
                  >
                    Enter Your Email ID
                  </label>
                  <input
                    className="w-full rounded-32px border border-neutral-30 bg-white px-6 py-3 focus:outline-none"
                    id="email"
                    placeholder="Your email ID here"
                    {...register("email")}
                  />
                  <p>{errors.email?.message}</p>
                </div>{" "}
                <div className="flex flex-col gap-4">
                  <label
                    className="lText block font-medium text-neutral-500"
                    htmlFor="name"
                  >
                    Enter Your Password
                  </label>
                  <div className="flex w-full items-center justify-between rounded-32px border border-neutral-30 bg-white px-6 py-3 focus:outline-none">
                    <input
                      className="w-full  bg-white focus:outline-none"
                      id="password"
                      type={passwordShow ? "text" : "password"}
                      placeholder="Enter Your Password..."
                      {...register("password")}
                    />
                    <span onClick={() => setPasswordShow(!passwordShow)}>
                      {passwordShow ? (
                        <IconEye className="cursor-pointer" />
                      ) : (
                        <IconEyeOff className="cursor-pointer" />
                      )}
                    </span>
                  </div>
                  <p>{errors.password?.message}</p>

                </div>
                <Link
                  href="/forget-password"
                  className=" text-right text-sText"
                >
                  Forget password
                </Link>
              </div>

              <p className="pt-4 text-mText text-neutral-500">
                Don’t have an account?{" "}
                <Link href="/signup" className="font-semibold text-neutral-700">
                  Signup
                </Link>
              </p>
              <div className="padding-t-40">
                <ButtonPrimarySmall buttonText="Sign In" />
              </div>
            </form>
          </div>
        </div>
        <div className="mx-auto w-fit max-xl:order-1">
          <Image
            src={image}
            width={830}
            height={662}
            alt="Sing Image"
            className="max-xxl:w-[400px]"
          />
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
