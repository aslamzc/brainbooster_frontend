import ButtonRounded from "../button/ButtonRounded";

const SearchBarNatural30 = () => {
  return (
    <div className="bg-neutral-20 flex items-center justify-between  rounded-60px py-2 pe-2 ps-4 lg:ps-6 ">
      <input
        type="text"
        placeholder="Search"
        className="me-3 w-full bg-transparent placeholder:text-neutral-300 focus:outline-none"
      />
      <ButtonRounded iconName="Search" />
    </div>
  );
};

export default SearchBarNatural30;
