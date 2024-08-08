import ButtonRounded from "../button/ButtonRounded";

const SearchBarNatural30Send = () => {
  return (
    <div className="bg-neutral-20 flex items-center justify-between  rounded-60px py-2 pe-2 ps-4 lg:ps-6 ">
      <input
        type="text"
        placeholder="Type a message..."
        className="me-3 w-full bg-transparent placeholder:text-neutral-300 focus:outline-none"
      />
      <ButtonRounded iconName="Send" />
    </div>
  );
};

export default SearchBarNatural30Send;
