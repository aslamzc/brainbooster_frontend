import image from "@/../public/images/error.png";
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
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
