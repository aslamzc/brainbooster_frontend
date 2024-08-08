import reviewImage1 from "@/../public/images/homeTwo/review-icon-1.png";
import reviewImage2 from "@/../public/images/homeTwo/review-icon-2.png";
import reviewImage3 from "@/../public/images/homeTwo/review-icon-3.png";
import reviewImage4 from "@/../public/images/homeTwo/review-icon-4.png";
import reviewImage5 from "@/../public/images/homeTwo/review-icon-5.png";
import Image from "next/image";

const Users = ({
  data,
  plusBg = "bg-primaryColor",
}: {
  data?: React.ReactNode;
  plusBg?: string;
}) => {
  return (
    <div className="flex items-center">
      <Image
        src={reviewImage1}
        width={48}
        height={48}
        alt="Reviewer Image"
        className=""
      />
      <Image
        src={reviewImage2}
        width={48}
        height={48}
        alt="Reviewer Image"
        className="-ml-[25px] rounded-full border border-white"
      />
      <Image
        src={reviewImage3}
        width={48}
        height={48}
        alt="Reviewer Image"
        className="-ml-[25px] rounded-full border border-white"
      />
      <Image
        src={reviewImage4}
        width={48}
        height={48}
        alt="Reviewer Image"
        className="-ml-[25px] rounded-full border border-white"
      />
      <Image
        src={reviewImage5}
        width={48}
        height={48}
        alt="Reviewer Image"
        className="-ml-[25px] rounded-full border border-white"
      />
      {data && (
        <div
          className={` -ml-[25px] flex
        h-12 w-12 items-center 
        justify-center rounded-full border border-white  px-3 py-1 text-center text-xsText font-semibold ${plusBg}`}
        >
          <span>{data}</span>
        </div>
      )}
    </div>
  );
};

export default Users;
