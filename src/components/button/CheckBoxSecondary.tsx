type Props = {
  label: string;
};
const CheckBoxSecondary = ({ label }: Props) => {
  const id = label.split(" ").join("");

  return (
    <div className="inline-flex items-center">
      <label
        className="relative flex cursor-pointer items-center rounded-full px-3"
        htmlFor={`${id}`}
      >
        <input
          name={label}
          type="checkbox"
          className="peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-neutral-30 bg-white p-0 text-secondaryColorTwo transition-all checked:border-gray-900 "
          id={`${id}`}
        />
        <span className="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 bg-white text-gray-900 opacity-0 transition-opacity peer-checked:opacity-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-full w-full  rounded-full bg-secondaryColorTwo  text-white"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
      </label>
      <label
        className="mt-px cursor-pointer select-none text-mText text-neutral-500"
        htmlFor={`${id}`}
      >
        {label}
      </label>
    </div>
  );
};

export default CheckBoxSecondary;
