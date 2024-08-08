import image from "@/../public/images/error.png";
import ButtonPrimary from "@/components/button/ButtonPrimary";
import Image from "next/image";
const NotFoundPage = () => {
  return (
    <div className="section-gap-top section-gap-bottom bg-bgColorOne">
      <div className="container grid-cols-12 items-center md:grid ">
        <div className="col-start-3 col-end-11 flex flex-col items-center text-white">
          <Image src={image} width={856} height={841} alt="Not found Image" />
          <h4 className="d4 padding-t-60 text-center font-semibold">
            Oops! Page Not Found
          </h4>
          <p className="lText pt-6 text-center text-neutral-30">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="padding-t-40">
            <ButtonPrimary button buttonText="Back to Home" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
