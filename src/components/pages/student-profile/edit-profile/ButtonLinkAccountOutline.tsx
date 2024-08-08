const ButtonLinkAccountOutline = ({
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
      className="border-natural-700 theme-transition-3 rounded-32px border px-3 py-2 text-base font-semibold capitalize text-neutral-700 hover:border-primaryColor hover:border-transparent hover:bg-primaryColor hover:shadow-five"
    >
      {buttonText}
    </button>
  );
};

export default ButtonLinkAccountOutline;
