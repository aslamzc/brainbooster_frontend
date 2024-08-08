import TextS from "@/components/sharedComponents/TextS";

type Props = {
  bgClassName: string;
  courseName: string;
};

const CourseName = ({ bgClassName, courseName }: Props) => {
  return (
    <div className="flex items-center gap-2">
      <span className={`h-1 w-1 rounded-full ${bgClassName}`}></span>
      <TextS>{courseName}</TextS>
    </div>
  );
};

export default CourseName;
