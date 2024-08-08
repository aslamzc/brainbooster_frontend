import ButtonRounded from "@/components/button/ButtonRounded";

const SearchBarBgTwo = ({
  placeholder = "Search",
}: {
  placeholder?: string;
}) => {
  return (
    <div className="flex items-center justify-between rounded-60px bg-bgColorTwo py-2 pe-2 ps-5 lg:ps-8">
      <input
        type="text"
        placeholder={placeholder}
        className="placeholder:text-neutral-40 me-3 w-full bg-transparent focus:outline-none"
      />
      <ButtonRounded iconName="Search" />
    </div>
  );
};

export default SearchBarBgTwo;
