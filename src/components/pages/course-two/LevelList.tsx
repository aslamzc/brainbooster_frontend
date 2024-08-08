import CheckBoxWhite from "@/components/button/CheckBoxWhite";

type Props = {
  id: string;
  title: string;
};
const LevelList = ({ id, title }: Props) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <CheckBoxWhite id={id} /> <span className="block">{title}</span>
      </div>{" "}
    </div>
  );
};

export default LevelList;
