const ButtonOutlineWithoutIcon = ({ buttonText }: { buttonText: string }) => {
  return (
    <div>
      <button className="h6 flex items-center justify-center gap-2 rounded-32px border border-neutral-700 px-4 py-2 text-base font-semibold text-neutral-700 lg:px-6 lg:py-3">
        <span>{buttonText}</span>
      </button>
    </div>
  );
};

export default ButtonOutlineWithoutIcon;
