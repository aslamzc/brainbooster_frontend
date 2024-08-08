const ButtonLinkAccountPrimary = ({
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
      className="py theme-transition-3 w-fit rounded-32px bg-primaryColor px-4 py-2 text-base font-semibold capitalize text-neutral-700 shadow-five hover:bg-bgColorTwo hover:text-white hover:shadow-five-theme"
    >
      {buttonText}
    </button>
  );
};

export default ButtonLinkAccountPrimary;
