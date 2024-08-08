// ButtonTab.tsx

interface ButtonTabProps {
  buttonText: string;
  isActive: boolean;
  onClick: () => void;
}

const ButtonTabOutline: React.FC<ButtonTabProps> = ({
  buttonText,
  isActive,
  onClick,
}) => {
  return (
    <button
      className={`h5 padding-s-32 padding-e-32 theme-transition-3 rounded-32px border border-neutral-500 py-3 font-semibold hover:bg-primaryColor hover:shadow-five ${
        isActive ? " bg-primaryColor" : ""
      }`}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};

export default ButtonTabOutline;
