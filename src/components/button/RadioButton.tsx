const RadioButton = ({ label, name }: { label: string; name: string }) => {
  return (
    <div className="inline-flex items-center gap-2">
      <label
        className="relative flex cursor-pointer items-center rounded-full"
        htmlFor={label}
      >
        <input
          name={name}
          type="radio"
          className="peer relative h-4 w-4 cursor-pointer appearance-none rounded-full border border-secondaryColorTwo text-secondaryColorTwo transition-all before:absolute checked:border-secondaryColorTwo checked:before:bg-secondaryColorTwo"
          id={label}
        />
        <span className="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-secondaryColorTwo opacity-0 transition-opacity peer-checked:opacity-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-2 w-2"
            viewBox="0 0 16 16"
            fill="currentColor"
          >
            <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
          </svg>
        </span>
      </label>
      <label
        className=" cursor-pointer select-none font-light text-gray-700"
        htmlFor={label}
      >
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
