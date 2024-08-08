import ButtonRounded from "@/components/button/ButtonRounded";

const SearchBarFullWidth = () => {
  return (
    <div className=" border-neutral-40 flex items-center justify-between rounded-60px py-2 pe-2 ps-5  md:border md:bg-white lg:ps-8 ">
      <input
        type="text"
        placeholder="Search"
        className="me-3 w-full placeholder:text-neutral-300 focus:outline-none max-md:hidden"
      />
      <ButtonRounded iconName="Search" />
    </div>
  );
};

export default SearchBarFullWidth;
