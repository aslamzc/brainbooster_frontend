import ButtonRounded from "@/components/button/ButtonRounded";

const SearchBarDark = ({
  placeholder = "Search",
}: {
  placeholder?: string;
}) => {
  return (
    <div className="max-md:w-100px] text-neutral-40 flex items-center justify-between rounded-60px bg-bgColorTwo py-2 pe-2 ps-5 md:w-[300px] lg:ps-8 xl:w-[400px] xxl:w-[497px]">
      <input
        type="text"
        placeholder={placeholder}
        className="placeholder:text-neutral-40 me-3 w-full bg-transparent focus:outline-none max-md:hidden"
      />
      <ButtonRounded iconName="Search" />
    </div>
  );
};

export default SearchBarDark;
