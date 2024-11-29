import TextL from "@/components/sharedComponents/TextL";
import {
  IconCalendarDue,
  IconEye,
  IconMessageDots,
  IconUserCircle,
} from "@tabler/icons-react";
import { t } from "i18next";

type Props = {
  message: string;
  by: string;
  view?: number;
  date: string;
};

const BlogInfo = ({ by, date, view, message }: Props) => {
  return (
    <div className="flex  max-sm:flex-col max-sm:gap-3 sm:items-center sm:gap-6">
      <div className="flex items-center gap-2 max-sm:justify-between">
        <IconUserCircle size={28} /> <TextL>{t("text_11") + " " + by}</TextL>
      </div>
      <div className="hidden h-1 w-1 rounded-full bg-neutral-700 sm:block"></div>
      <div className="flex items-center gap-2 max-sm:justify-between">
        <IconCalendarDue size={28} /> <TextL>{date}</TextL>
      </div>
    </div>
  );
};

export default BlogInfo;
