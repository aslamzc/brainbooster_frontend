const ButtonOutlineSmall = ({
  buttonText,
  onClick,
}: {
  buttonText: string;
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement | HTMLDivElement>,
  ) => void;
}) => {
  return (
    <button
      onClick={onClick}
      className="theme-transition-3 rounded-32px border border-natural-700 px-6 py-3 text-base font-semibold capitalize text-neutral-700 hover:border-primaryColor hover:border-transparent hover:bg-primaryColor hover:shadow-five"
    >
      {buttonText}
    </button>
  );
};

export default ButtonOutlineSmall;
