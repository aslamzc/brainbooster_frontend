"use client";

const CheckBoxQuiz = ({ id, name }: { id: string; name: string }) => {
  return (
    <div className="quiz-check">
      <input type="radio" name={name} id={id} value={id} />
      <label htmlFor={id}></label>
    </div>
  );
};

export default CheckBoxQuiz;
