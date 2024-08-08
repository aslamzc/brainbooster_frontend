import CheckBoxWhite from "@/components/button/CheckBoxWhite";

type Props = {
  id: string;
  title: string;
  number: number;
};
const CategoriesList = ({ id, title, number }: Props) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <CheckBoxWhite id={id} />{" "}
        <span className="theme-transition-3 block">{title}</span>
      </div>{" "}
      <span className="block font-medium">{number}</span>
    </div>
  );
};

export default CategoriesList;
