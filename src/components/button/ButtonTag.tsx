const ButtonTag = ({ tagText }: { tagText: string }) => {
  return (
    <button className="border-neutral-40 theme-transition-3 rounded-32px border px-6 py-3 text-sText  hover:scale-105 hover:bg-primaryColor hover:bg-opacity-50">
      {tagText}
    </button>
  );
};

export default ButtonTag;
