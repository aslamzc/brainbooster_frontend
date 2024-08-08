import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

const ButtonPagination = () => {
  return (
    <div className="flex items-center gap-1 sm:gap-3">
      <button className="bg-neutral-30  theme-transition-3 rounded-full p-2 text-mText hover:bg-primaryColor">
        <IconChevronLeft />
      </button>
      <button className="bg-neutral-30 theme-transition-3 shrink-0 rounded-full px-4 py-2 text-mText font-semibold hover:bg-primaryColor">
        1
      </button>
      <button className="hover:bg-neutral-30 theme-transition-3 shrink-0 rounded-full bg-primaryColor px-4 py-2 text-mText font-semibold">
        2
      </button>
      <button className="bg-neutral-30 theme-transition-3 shrink-0 rounded-full px-4 py-2 text-mText font-semibold hover:bg-primaryColor">
        3
      </button>
      <button className="bg-neutral-30 theme-transition-3 shrink-0 rounded-full px-4 py-2 text-mText font-semibold hover:bg-primaryColor">
        ...
      </button>
      <button className="bg-neutral-30  theme-transition-3 rounded-full p-2 text-mText hover:bg-primaryColor">
        <IconChevronRight />
      </button>
    </div>
  );
};

export default ButtonPagination;
