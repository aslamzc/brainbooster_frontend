import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

const ButtonSlider = () => {
  return (
    <div className="flex items-center gap-4">
      <button className="customerSliderPrev theme-transition-3 flex items-center justify-center rounded-full border border-neutral-500 bg-transparent p-3 font-semibold text-neutral-500 hover:bg-primaryColor hover:shadow-four ">
        <IconChevronLeft size={28} className="max-sm:h-6 max-sm:w-6" />
      </button>
      <button className="customerSliderNext theme-transition-3 flex items-center justify-center rounded-full border border-neutral-500 bg-transparent p-3 font-semibold text-neutral-500 hover:bg-primaryColor hover:shadow-fourRight ">
        <IconChevronRight size={28} className="max-sm:h-6 max-sm:w-6" />
      </button>
    </div>
  );
};

export default ButtonSlider;
