"use client";
import image from "@/../public/images/signup.png";
import { IconEye, IconEyeOff } from "@tabler/icons-react";
import Image from "next/image";
import { useState } from "react";
import ButtonPrimarySmall from "../student-profile/edit-profile/ButtonPrimarySmall";
import { useTranslation } from 'react-i18next';
import { form, RegisterFormType } from "./RegisterSchema";
import axios from "@/utils/axios";
import { useRouter } from "next/navigation";

const SignUpForm = () => {
  const [passwordShow, setPasswordShow] = useState(false);
  const [conformPasswordShow, setConformPasswordShow] = useState(false);
  const { t } = useTranslation();
  const { push } = useRouter();
  const { register, handleSubmit, formState: { errors }, setError } = form();

  const onSubmit = async (data: RegisterFormType) => {
    try {
      await axios.post('/register', data);
      push('/signin');
    } catch (error: any) {
      console.log(error);
      if (error?.errors) {
        Object.keys(error.errors).map((key: any) => {
          setError(key, { type: "server", message: error.errors[key] });
        });
      }
    }
  }

  return (
    <div className="section-gap-top section-gap-bottom">
      <div className="container grid items-center justify-between gap-20 max-xxl:grid-flow-row max-xxl:justify-center xxl:grid-cols-2 xxl:gap-40">
        <div className="mx-auto w-full max-xl:order-2">
          <div className="padding-all-32 rounded-16px border-neutral-30 bg-neutral-20">
            <h3 className="h3 font-semibold">{t("text_24")}</h3>
            <form className="padding-t-40 " onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col justify-between gap-6">
                <div className="flex flex-col gap-4">
                  <label
                    className="lText block font-medium text-neutral-500"
                    htmlFor="fName"
                  >
                    {t("text_25")}
                  </label>
                  <input
                    className={`w-full rounded-32px border border-neutral-30 bg-white px-6 py-3 focus:outline-none 
                      ${errors.name?.message ? "border-red-500" : "border-neutral-30"}`}
                    id="fName"
                    type="text"
                    placeholder={t("text_32")}
                    {...register("name")}
                  />
                  {errors.name?.message && (
                    <p className="pt-2 text-sm text-red-500">{errors.name.message}</p>
                  )}
                </div>
                <div className="flex flex-col gap-4">
                  <label
                    className="lText block font-medium text-neutral-500"
                    htmlFor="email"
                  >
                    {t("text_26")}
                  </label>
                  <input
                    className={`w-full rounded-32px border border-neutral-30 bg-white px-6 py-3 focus:outline-none ${errors.email?.message ? "border-red-500" : "border-neutral-30"}`}
                    id="email"
                    type="text"
                    placeholder={t("text_27")}
                    {...register("email")}
                  />
                  {errors.email?.message && (
                    <p className="pt-2 text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>
                <div className="grid items-center gap-6 sm:grid-cols-2">
                  <div className="flex flex-col gap-4">
                    <label
                      className="lText block font-medium text-neutral-500"
                      htmlFor="fName"
                    >
                      {t("text_28")}
                    </label>
                    <div className={`flex w-full items-center justify-between rounded-32px border border-neutral-30 bg-white px-6 py-3 focus:outline-none
                      ${errors.password?.message ? "border-red-500" : "border-neutral-30"}`}>
                      <input
                        className="w-full  bg-white focus:outline-none"
                        type={passwordShow ? "text" : "password"}
                        id="password"
                        placeholder={t("text_30")}
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
                    {errors.password?.message && (
                      <p className="pt-2 text-sm text-red-500">{errors.password.message}</p>
                    )}
                  </div>
                  <div className="flex flex-col gap-4">
                    <label
                      className="lText block font-medium text-neutral-500"
                      htmlFor="lName"
                    >
                      {t("text_29")}
                    </label>
                    <div className={`flex w-full items-center justify-between rounded-32px border border-neutral-30 bg-white px-6 py-3 focus:outline-none
                      ${errors.password_confirmation?.message ? "border-red-500" : "border-neutral-30"}`}>
                      <input
                        className="w-full  bg-white focus:outline-none"
                        type={conformPasswordShow ? "text" : "password"}
                        id="conform-password"
                        placeholder={t("text_31")}
                        {...register("password_confirmation")}
                      />
                      <span
                        onClick={() =>
                          setConformPasswordShow(!conformPasswordShow)
                        }
                      >
                        {conformPasswordShow ? <IconEye /> : <IconEyeOff />}
                      </span>
                    </div>
                    {errors.password_confirmation?.message && (
                      <p className="pt-2 text-sm text-red-500">{errors.password_confirmation.message}</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="padding-t-40">
                <ButtonPrimarySmall buttonText={t("text_21")} />
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
