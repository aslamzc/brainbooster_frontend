import TextM from "@/components/sharedComponents/TextM";
import { IconCaretRight, IconTrash } from "@tabler/icons-react";

const SingleModule = ({ time, title }: { time: string; title: string }) => {
  return (
    <div className="bg-neutral-20 flex items-center justify-between gap-6 rounded-8px px-3 py-4">
      <div className="flex items-center gap-4">
        <span className="rounded-8px bg-bgColorOne px-3 py-1 text-sText text-primaryColor">
          {time}
        </span>
        <TextM>{title}</TextM>
      </div>
      <div className="flex items-center gap-3">
        <button>
          <IconCaretRight size={20} />
        </button>{" "}
        <button>
          <IconTrash size={20} />
        </button>
      </div>
    </div>
  );
};

export default SingleModule;
