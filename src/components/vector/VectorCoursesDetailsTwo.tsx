import vector from "@/../public/images/courses/coursesDetailsTwo/bannerVector.png";
import Image from "next/image";
const VectorCoursesDetailsTwo = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="absolute left-0 top-0">
      <Image
        src={vector}
        width={303}
        height={75}
        alt="Vector image"
        className="relative"
      />
      <div className=" lText absolute left-0  top-0 pe-4 pt-1 font-semibold text-neutral-500">
        {children}
      </div>
    </div>
  );
};

export default VectorCoursesDetailsTwo;
