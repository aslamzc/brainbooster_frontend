"use client";
import image from "@/../public/images/signup.png";
import { IconEye, IconEyeOff } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ButtonPrimarySmall from "../student-profile/edit-profile/ButtonPrimarySmall";
import { form, loginFormType } from "./LoginSchema";
import axios from "@/utils/axios";
import Cookies from "js-cookie";
import { useTranslation } from 'react-i18next';
import translateText from "@/utils/googleTranslate";
import { useLanguage } from "@/utils/i18n/LanguageContext";

type ResponseType = {
  accessToken: string,
  user : {
    name: string,
  }
}
const SignInForm = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();

  const [passwordShow, setPasswordShow] = useState(false);

  const { register, handleSubmit, formState: { errors }, setError } = form();

  useEffect(() => {
    updateValidationMessages();
  }, [language]);

  const updateValidationMessages = async () => {
    if (errors?.root?.server.message) {
      const message = await translateText(errors.root.server.message, language);
      setError("root.server", { type: "custom", message: message[0].translatedText });
    }
  }

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
      localStorage.setItem('userName', res.user.name);
      window.location.href = "/dashboard";
    } catch (error: any) {
      const message = await translateText(error.error, language);
      setError("root.server", { type: "custom", message: message[0].translatedText });
    }
  }

  return (
    <div className="section-gap-top section-gap-bottom">
      <div className="container grid items-center justify-between gap-20 max-xxl:grid-flow-row max-xxl:justify-center xxl:grid-cols-2 xxl:gap-40">
        <div className="mx-auto w-full max-xl:order-2">
          <div className="padding-all-32 rounded-16px border-neutral-30 bg-neutral-20">
            <h3 className="h3 font-semibold">{t("text_15")}</h3>
            <p className="pt-6 text-mText text-neutral-500">
              {t("text_16")}
            </p>
            <form className="padding-t-40" onSubmit={handleSubmit(onSubmit)}>
              <div className=" flex flex-col justify-between gap-6">
                <div className="flex flex-col gap-4">
                  <label className="lText block font-medium text-neutral-500" htmlFor="email">
                    {t("text_17")}
                  </label>
                  <input
                    className={`w-full rounded-32px border ${errors.email?.message ? "border-red-500" : "border-neutral-30"} bg-white px-6 py-3 focus:outline-none`}
                    id="email"
                    placeholder={t("text_27")}
                    {...register("email")}
                  />
                  {errors.email?.message && (
                    <p className="pt-2 text-sm text-red-500">{t(errors.email.message)}</p>
                  )}
                </div>{" "}
                <div className="flex flex-col gap-4">
                  <label className="lText block font-medium text-neutral-500" htmlFor="name">
                    {t("text_18")}
                  </label>
                  <div
                    className={`flex w-full items-center justify-between rounded-32px border ${errors.password?.message ? "border-red-500" : "border-neutral-30"
                      } bg-white px-6 py-3 focus:outline-none`}
                  >
                    <input
                      className="w-full  bg-white focus:outline-none"
                      id="password"
                      type={passwordShow ? "text" : "password"}
                      placeholder={t("text_19")}
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
                    <p className="pt-2 text-sm text-red-500">{t(errors.password.message)}</p>
                  )}
                  {errors?.root?.server?.message && (
                    <p className="pt-2 text-sm text-red-500">{errors?.root.server.message}</p>
                  )}
                </div>
                <Link href="http://localhost:8000/admin/password-reset/request" className=" text-right text-sText"                >
                  {t("text_22")}
                </Link>
              </div>

              <p className="pt-4 text-mText text-neutral-500">
                {t("text_20")}
                <Link href="/signup" className="font-semibold text-neutral-700">
                  {t("text_21")}
                </Link>
              </p>
              <div className="padding-t-40">
                <ButtonPrimarySmall buttonText={t("text_23")} />
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
