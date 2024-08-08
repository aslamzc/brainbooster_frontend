// ButtonTab.tsx

interface ButtonTabProps {
  buttonText: string;
  isActive: boolean;
  onClick: () => void;
}

const ButtonTab: React.FC<ButtonTabProps> = ({
  buttonText,
  isActive,
  onClick,
}) => {
  return (
    <button
      className={`lText theme-transition-3 rounded-16px px-5 py-4 text-center font-semibold capitalize text-neutral-500 hover:bg-neutral-20 lg:text-h5 xxl:min-w-[162px] ${
        isActive ? "bg-neutral-20" : ""
      }`}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};

export default ButtonTab;
