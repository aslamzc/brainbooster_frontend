import ButtonIconBgOne from "@/components/button/ButtonIconBgOne";
import ButtonPrimaryFullWidth from "@/components/button/ButtonPrimaryFullWidth";
import BorderHorizontal from "@/components/customBorder/BorderHorizontal";
import {
  IconArrowsExchange,
  IconShare,
  IconShoppingCart,
} from "@tabler/icons-react";
import React from "react";
import { allInfoData } from "../../../../public/data/allinfo";
import CourseDetailsVideo from "./CourseDetailsVideo";

const CoursesDetailsRight = () => {
  // const [isOpen, setOpen] = useState(false);

  return (
    <div className="sticky top-32 rounded-32px border border-neutral-30 bg-neutral-20 px-2 pb-8 pt-2">
      {/* author image */}
      <CourseDetailsVideo />
      <div className="mt-8 flex flex-col justify-between gap-5 px-6">
        {allInfoData?.map(({ id, icon, title, text }) => (
          <React.Fragment key={id}>
            <BorderHorizontal />
            <div key={id} className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                {icon}
                <span className="lText">{title}</span>
              </div>
              <p className="lText font-medium">{text}</p>
            </div>
          </React.Fragment>
        ))}
        <BorderHorizontal />
      </div>
      <div className="mt-8 w-full px-6">
        <ButtonPrimaryFullWidth
          button
          buttonText="Enroll Course"
          link="/signup"
        />
        <div className="mt-6 flex items-center justify-center gap-6">
          <ButtonIconBgOne link="/cart">
            <IconShoppingCart size={20} />
          </ButtonIconBgOne>
          <ButtonIconBgOne link="/courses-comparison">
            <IconArrowsExchange size={20} />
          </ButtonIconBgOne>
          <ButtonIconBgOne link="#">
            <IconShare size={20} />
          </ButtonIconBgOne>
        </div>
      </div>
    </div>
  );
};

export default CoursesDetailsRight;
