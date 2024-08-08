import vector from "@/../public/images/courses/coursesDetailsone/vector-top-right.png";
import Image from "next/image";
const VectorCoursesDetailOneBanner = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="absolute right-0 top-0">
      <Image
        src={vector}
        width={303}
        height={75}
        alt="Vector image"
        className="relative"
      />
      <div className=" lText absolute right-0  top-0 pe-4 pt-1 font-semibold text-neutral-500">
        {children}
      </div>
    </div>
  );
};

export default VectorCoursesDetailOneBanner;
