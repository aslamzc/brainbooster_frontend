import { IconSearch } from "@tabler/icons-react";

const SearchBarTransparent = ({
  placeholder = "Search",
  className,
}: {
  placeholder?: string;
  className?: string;
}) => {
  return (
    <div
      className={` border-neutral-40 flex w-full items-center justify-between gap-3 rounded-32px border bg-white px-6 py-3 ${className}`}
    >
      <input
        type="text"
        className="w-full bg-inherit placeholder:text-mText placeholder:text-neutral-300"
        placeholder={placeholder}
      />{" "}
      <IconSearch />
    </div>
  );
};

export default SearchBarTransparent;
