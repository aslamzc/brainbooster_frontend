"use client";

type Props = {
  answerId: number;
  name: string;
  handleCheckbox: (answerNo: string) => void;
};
const CheckBoxSecondaryQuiz = ({
  answerId,
  name,
  handleCheckbox,
}: Props) => {
  return (
    <button className="flex items-center">
      <label className="relative flex cursor-pointer items-center rounded-full px-0">
        <input
          type="radio"
          name={`${name}`}
          value={answerId}
          onChange={(e) => {
            handleCheckbox(e.target.value);
          }}
          className="peer relative h-6 w-6 cursor-pointer appearance-none rounded-full border-2 border-neutral-500 bg-white p-0 text-secondaryColorTwo transition-all checked:border-gray-900 "
        />
        <span className="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 bg-white text-gray-900 opacity-0 transition-opacity peer-checked:opacity-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6  rounded-full bg-neutral-500  text-white"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
      </label>
    </button>
  );
};

export default CheckBoxSecondaryQuiz;
