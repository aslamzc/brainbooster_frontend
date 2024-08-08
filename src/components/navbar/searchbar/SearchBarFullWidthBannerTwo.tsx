import ButtonRounded from "@/components/button/ButtonRounded";

const SearchBarFullWidthBannerTwo = () => {
  return (
    <div className=" border-neutral-40 bg-neutral-20 flex items-center justify-between rounded-60px border py-2  pe-2 ps-5 lg:ps-8 ">
      <input
        type="text"
        placeholder="Find your course"
        className="me-3 w-full bg-inherit placeholder:text-neutral-300 focus:outline-none"
      />
      <ButtonRounded iconName="Search" />
    </div>
  );
};

export default SearchBarFullWidthBannerTwo;
