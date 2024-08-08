import FadeLeft from "@/motionEffect/FadeLeft";
import FadeRight from "@/motionEffect/FadeRight";
import ButtonUnderLine from "../button/ButtonUnderLine";
import D4 from "./D4";

const SectionHeading = ({
  title,
  description,
  link,
  buttonText,
}: {
  title: string;
  description: string;
  link: string;
  buttonText: string;
}) => {
  return (
    <div className="grid-cols-12 overflow-hidden max-xxl:gap-5 md:grid">
      <FadeLeft className="col-start-1 col-end-7">
        <D4>{title}</D4>
      </FadeLeft>
      <div className="col-start-7 col-end-13 max-w-[416px] max-md:mt-5 xl:col-start-8 xxl:col-start-9">
        <FadeRight>
          <p className="lText ">{description}</p>
        </FadeRight>
        <div className="pt-6">
          <FadeRight>
            <ButtonUnderLine buttonText={buttonText} link={link} />
          </FadeRight>
        </div>
      </div>
    </div>
  );
};

export default SectionHeading;
