"use client";
import image from "@/../public/images/signup.png";
import { IconEye, IconEyeOff } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ButtonPrimarySmall from "../student-profile/edit-profile/ButtonPrimarySmall";

const SignUpForm = () => {
  const [passwordShow, setPasswordShow] = useState(false);
  const [conformPasswordShow, setConformPasswordShow] = useState(false);
  return (
    <div className="section-gap-top section-gap-bottom">
      <div className="container grid items-center justify-between gap-20 max-xxl:grid-flow-row max-xxl:justify-center xxl:grid-cols-2 xxl:gap-40">
        <div className="mx-auto w-full max-xl:order-2">
          <div className="padding-all-32 rounded-16px border-neutral-30 bg-neutral-20">
            <h3 className="h3 font-semibold">Let’s Get Started!</h3>
            <p className="pt-6 text-mText text-neutral-500">
              Please Enter your Email Address to Start your Online Application
            </p>
            <form className="padding-t-40 ">
              <div className="flex flex-col justify-between gap-6">
                <div className="grid items-center gap-6 sm:grid-cols-2">
                  <div className="flex flex-col gap-4">
                    <label
                      className="lText block font-medium text-neutral-500"
                      htmlFor="fName"
                    >
                      First Name
                    </label>
                    <input
                      className="w-full rounded-32px border border-neutral-30 bg-white px-6 py-3 focus:outline-none"
                      id="fName"
                      type="text"
                      placeholder="Jone"
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <label
                      className="lText block font-medium text-neutral-500"
                      htmlFor="lName"
                    >
                      Last Name
                    </label>
                    <input
                      className="w-full rounded-32px border border-neutral-30 bg-white px-6 py-3 focus:outline-none"
                      id="lName"
                      type="text"
                      placeholder="Fisher"
                    />
                  </div>
                </div>
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
                    type="text"
                    placeholder="Your email ID here"
                  />
                </div>
                <div className="grid items-center gap-6 sm:grid-cols-2">
                  <div className="flex flex-col gap-4">
                    <label
                      className="lText block font-medium text-neutral-500"
                      htmlFor="fName"
                    >
                      Password
                    </label>
                    <div className="flex w-full items-center justify-between rounded-32px border border-neutral-30 bg-white px-6 py-3 focus:outline-none">
                      <input
                        className="w-full  bg-white focus:outline-none"
                        type={passwordShow ? "text" : "password"}
                        id="password"
                        placeholder="Enter A Password"
                      />

                      <span onClick={() => setPasswordShow(!passwordShow)}>
                        {passwordShow ? (
                          <IconEye className="cursor-pointer" />
                        ) : (
                          <IconEyeOff className="cursor-pointer" />
                        )}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <label
                      className="lText block font-medium text-neutral-500"
                      htmlFor="lName"
                    >
                      Conform Password
                    </label>
                    <div className="flex w-full items-center justify-between rounded-32px border border-neutral-30 bg-white px-6 py-3 focus:outline-none">
                      <input
                        className="w-full  bg-white focus:outline-none"
                        type={conformPasswordShow ? "text" : "password"}
                        id="conform-password"
                        placeholder="Enter Password Again"
                      />

                      <span
                        onClick={() =>
                          setConformPasswordShow(!conformPasswordShow)
                        }
                      >
                        {conformPasswordShow ? <IconEye /> : <IconEyeOff />}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <label
                    className="lText block font-medium text-neutral-500"
                    htmlFor="referralCode"
                  >
                    Someone invited you over?
                  </label>
                  <input
                    className="w-full rounded-32px border border-neutral-30 bg-white px-6 py-3 focus:outline-none"
                    id="referralCode"
                    type="text"
                    placeholder="Enter the referral code"
                  />
                </div>
              </div>
              <p className="padding-t-32 text-mText text-neutral-500">
                By clicking submit, you agree to
                <Link
                  href="/privacy-policy"
                  className="font-semibold text-neutral-700"
                >
                  Terms of Use, Privacy Policy, E-sign & Communication
                  Authorization.
                </Link>
              </p>
              <div className="padding-t-40">
                <ButtonPrimarySmall buttonText="Sing Up" />
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

export default SignUpForm;
