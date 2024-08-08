const ButtonLabel = ({
  label,
  onClick,
}: {
  label: string;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className="theme-transition-3 rounded-32px border border-neutral-40 px-6 py-3 text-sText hover:scale-105 hover:bg-primaryColor"
    >
      {label}
    </button>
  );
};

export default ButtonLabel;
