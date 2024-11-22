import { IconUserCircle } from "@tabler/icons-react";
import Link from "next/link";
import H4 from "../sharedComponents/H4";
import TextM from "../sharedComponents/TextM";
import TextS from "../sharedComponents/TextS";

//types
type QuizeType = {
  id: number,
  title: string,
  description: string,
  createdAt: string,
  userName: string
}

const CardQuizGrid = ({ title, description, userName }: QuizeType) => {
  return (
    <div className="flex max-w-[400px] flex-col items-center gap-6 self-stretch">
      <div>
        <div className="flex flex-col gap-3 ">
          <div className="flex justify-between max-sm:flex-col max-sm:gap-3 sm:items-center">
            <div className="flex items-center gap-1 max-sm:justify-between">
              <IconUserCircle size={18} /> <TextS>By {userName}</TextS>
            </div>
          </div>
          <H4>
            <Link href="/">{title}</Link>
          </H4>
          <TextM>{description}</TextM>
        </div>
      </div>
    </div>
  );
};

export default CardQuizGrid;
