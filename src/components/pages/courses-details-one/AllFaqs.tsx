"use client";
import { useState } from "react";
import { faqData } from "../../../../public/data/faqData";
import SingleFaq from "./SingleFaq";

const AllFaqs = () => {
  const [dropDown, setDropDown] = useState("");
  return (
    <div className="flex flex-col justify-between gap-6">
      {faqData?.map(({ id, question, answer }) => (
        <SingleFaq
          key={id}
          id={id}
          question={question}
          answer={answer}
          dropDown={dropDown}
          setDropDown={setDropDown}
        />
      ))}
    </div>
  );
};

export default AllFaqs;
