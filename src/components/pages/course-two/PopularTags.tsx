import ButtonCourses from "@/components/button/ButtonCourses";
import BorderHorizontalN40 from "@/components/customBorder/BorderHorizontalN40";
import { v4 as uuidv4 } from "uuid";

type Props = {
  tag: { label: string; link: string }[];
};

const PopularTags = ({ tag }: Props) => {
  return (
    <>
      <p className="xlText font-medium">Popular Tags</p>
      <BorderHorizontalN40 />

      <div className="m:gap-4 flex flex-wrap items-center justify-start gap-3 ">
        {tag?.map(({ ...props }) => (
          <ButtonCourses key={uuidv4()} {...props} />
        ))}
      </div>
    </>
  );
};

export default PopularTags;
