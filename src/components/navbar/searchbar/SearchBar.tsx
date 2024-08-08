import ButtonRounded from "@/components/button/ButtonRounded";

const SearchBar = () => {
  return (
    <div className="border-neutral-40 flex items-center justify-between rounded-60px py-2 pe-2 ps-5  max-md:w-[100px] md:w-[300px] md:border md:bg-white lg:ps-8 xl:w-[400px] xxl:w-[497px]">
      <input
        type="text"
        placeholder="Search"
        className="me-3 w-full placeholder:text-neutral-300 focus:outline-none max-md:hidden"
      />
      <ButtonRounded iconName="Search" />
    </div>
  );
};

export default SearchBar;
