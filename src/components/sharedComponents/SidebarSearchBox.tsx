import BorderHorizontalN40 from "../customBorder/BorderHorizontalN40";
import H4 from "./H4";
import SearchBarPrimary from "./SearchbarPrimary";

const SidebarSearchBox = ({
  placeholder,
  className,
}: {
  placeholder: string;
  className?: string;
}) => {
  return (
    <div className="padding-all-32 flex flex-col gap-6 rounded-16px bg-white">
      <H4>Search</H4>
      <BorderHorizontalN40 />
      <SearchBarPrimary className={className} placeholder={placeholder} />
    </div>
  );
};

export default SidebarSearchBox;
