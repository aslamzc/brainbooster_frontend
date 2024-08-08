import ButtonBlack from "@/components/button/ButtonBlack";
import Fade from "@/motionEffect/Fade";
import FadeLeft from "@/motionEffect/FadeLeft";
import FadeRight from "@/motionEffect/FadeRight";
type Props = {
  title: string;
  text: string;
  buttonText: string;
  link: string;
};

const StartTechPrimaryBannerRight = ({
  title,
  text,
  buttonText,
  link,
}: Props) => {
  return (
    <div className="padding-t-80 padding-b-80 col-start-7 col-end-13">
      <FadeLeft>
        <h3 className="d4 font-semibold">{title}</h3>
      </FadeLeft>
      <FadeRight>
        <p className="lText mt-6 text-neutral-500">{text}</p>
      </FadeRight>
      <Fade>
        <div className="mt-10">
          <ButtonBlack buttonText={buttonText} link={link} />
        </div>
      </Fade>
    </div>
  );
};

export default StartTechPrimaryBannerRight;
