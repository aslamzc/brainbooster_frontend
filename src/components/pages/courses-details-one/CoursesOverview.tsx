type Props = {
  title: string;
  list: string[];
  text: string;
  index: number;
};

const CoursesOverview = ({ title, list, text, index }: Props) => {
  const condition = index === 0;
  const condition1 = index === 1;
  const condition2 = index === 2;
  const condition3 = index === 3;
  const condition4 = index >= 4;

  return (
    <div>
      <h2
        className={` font-semibold ${condition && "h2"} ${condition1 && "h3"} ${
          condition2 && "h4"
        } ${condition3 && "h5"} ${condition4 && "h6"}`}
      >
        {title}
      </h2>
      <ul className="mt-4 text-mText">
        {list.map((item, index) => (
          <li key={index} className="list-inside list-disc text-mText">
            {item}
          </li>
        ))}
      </ul>
      <p className="mt-6 text-mText">{text}</p>
    </div>
  );
};

export default CoursesOverview;
