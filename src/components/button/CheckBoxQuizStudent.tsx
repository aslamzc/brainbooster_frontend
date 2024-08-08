"use client";

import { useState } from "react";

const CheckBoxQuizStudent = ({ id, name }: { id: string; name: string }) => {
  const [correctAnswer, setCorrectAnswer] = useState("");
  return (
    <div className="quiz-check">
      <input type="radio" name={name} id={id} value={id} />
      <label htmlFor={id}></label>
    </div>
  );
};

export default CheckBoxQuizStudent;
