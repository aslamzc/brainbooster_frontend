"use client";
import ButtonCoursesDetailsOne from "@/components/button/ButtonCoursesDetailsOne";
import { useState } from "react";
import { faqButtonName } from "../../../../public/data/faqButtonName";
import { faqDataForFaqs } from "../../../../public/data/faqDataForFaqs";
import SingleFaq from "../courses-details-one/SingleFaq";

const FaqBanner = () => {
  const [tabButtonText, setTabButtonText] = useState("Online Education");
  const [dropDown, setDropDown] = useState("dsd");
  return (
    <div className="container section-gap-top section-gap-bottom ">
      <div className="mx-auto max-w-[749px]">
        <div className="mx-auto flex max-w-[749px] flex-col gap-6 text-center">
          <h4 className="d4 font-semibold">
            Get Every General Answers From Here
          </h4>
          <p className="text-mText">
            Welcome to Edufast! Discover the art and science of creating
            engaging user interfaces and seamless user experiences
          </p>
        </div>
        <div className="padding-t-40">
          <div className="flex items-center justify-between rounded-16px bg-neutral-20 p-3 max-md:flex-wrap max-md:gap-2">
            {faqButtonName.map(({ id, ...props }) => (
              <ButtonCoursesDetailsOne
                key={id}
                {...props}
                setTabButtonText={setTabButtonText}
                tabButtonText={tabButtonText}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="padding-t-60 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
        <div className=" flex flex-col justify-between gap-4">
          {tabButtonText === "Online Education" && (
            <>
              {faqDataForFaqs
                .slice(0, 5)
                ?.map(({ id, question, answer }) => (
                  <SingleFaq
                    key={id}
                    id={id}
                    question={question}
                    answer={answer}
                    dropDown={dropDown}
                    setDropDown={setDropDown}
                  />
                ))}
            </>
          )}
          {tabButtonText === "Payment Method" && (
            <>
              {faqDataForFaqs
                .slice(5, 10)
                ?.map(({ id, question, answer }) => (
                  <SingleFaq
                    key={id}
                    id={id}
                    question={question}
                    answer={answer}
                    dropDown={dropDown}
                    setDropDown={setDropDown}
                  />
                ))}
            </>
          )}
          {tabButtonText === "Pricing Plan" && (
            <>
              {faqDataForFaqs
                .slice(0, 5)
                ?.map(({ id, question, answer }) => (
                  <SingleFaq
                    key={id}
                    id={id}
                    question={question}
                    answer={answer}
                    dropDown={dropDown}
                    setDropDown={setDropDown}
                  />
                ))}
            </>
          )}
        </div>
        <div className=" flex flex-col justify-between gap-4">
          {tabButtonText === "Online Education" && (
            <>
              {faqDataForFaqs
                .slice(5, 10)
                ?.map(({ id, question, answer }) => (
                  <SingleFaq
                    key={id}
                    id={id}
                    question={question}
                    answer={answer}
                    dropDown={dropDown}
                    setDropDown={setDropDown}
                  />
                ))}
            </>
          )}
          {tabButtonText === "Payment Method" && (
            <>
              {faqDataForFaqs
                .slice(0, 5)
                ?.map(({ id, question, answer }) => (
                  <SingleFaq
                    key={id}
                    id={id}
                    question={question}
                    answer={answer}
                    dropDown={dropDown}
                    setDropDown={setDropDown}
                  />
                ))}
            </>
          )}
          {tabButtonText === "Pricing Plan" && (
            <>
              {faqDataForFaqs
                .slice(5, 10)
                ?.map(({ id, question, answer }) => (
                  <SingleFaq
                    key={id}
                    id={id}
                    question={question}
                    answer={answer}
                    dropDown={dropDown}
                    setDropDown={setDropDown}
                  />
                ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FaqBanner;
