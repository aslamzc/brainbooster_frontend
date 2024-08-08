import TextL from "@/components/sharedComponents/TextL";
import StudentProfileProgressBar from "./StudentProfileProgressBar";

const StudentProfileProgressbarWithText = ({
  text,
  width,
}: {
  text: string;
  width: number;
}) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <TextL>{text}</TextL> <TextL>{width}%</TextL>
      </div>
      <StudentProfileProgressBar width={90} />
    </div>
  );
};

export default StudentProfileProgressbarWithText;
