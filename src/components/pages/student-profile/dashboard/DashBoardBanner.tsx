import bannerImage from "@/../public/images/student-profile/banner.png";
import profileImage from "@/../public/images/student-profile/prifile-image.png";
import BorderVerticalN40 from "@/components/customBorder/BorderVerticalN40";
import H3 from "@/components/sharedComponents/H3";
import H4 from "@/components/sharedComponents/H4";
import TextM from "@/components/sharedComponents/TextM";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandPinterest,
  IconBrandTwitter,
  IconCircleCheck,
  IconDiscountCheckFilled,
  IconMouse2,
  IconVersions,
} from "@tabler/icons-react";
import Image from "next/image";
import DashBoardBannerInfoStudent from "./DashBoardBannerInfoStudent";
import StudentProfileSocialIcon from "./StudentProfileSocialIcon";

const DashBoardBanner = () => {
  return (
    <div className="container mt-6">
      <div>
        <Image
          src={bannerImage}
          width={1296}
          height={500}
          alt="Student Profile banner"
          className="rounded-tl-16px rounded-tr-16px"
        />
      </div>
      <div className="flex-col items-center justify-between rounded-bl-16px rounded-br-16px bg-white px-6 pb-10 pt-[52px] max-md:flex max-md:gap-6 md:grid md:grid-cols-2 md:px-10 lg:grid-cols-3">
        <div className="gap-6 max-xl:flex max-md:order-2">
          <div className="flex justify-between gap-4 max-xl:flex-col xl:gap-6">
            <DashBoardBannerInfoStudent
              icon={<IconMouse2 />}
              title={"976"}
              text="Earns Points"
            />
            <div className="max-xl:hidden">
              <BorderVerticalN40 />
            </div>
            <DashBoardBannerInfoStudent
              icon={<IconVersions />}
              title={"25"}
              text="Completed Courses"
            />
            <div className="max-xl:hidden">
              <BorderVerticalN40 />
            </div>
            <DashBoardBannerInfoStudent
              icon={<IconCircleCheck />}
              title={"520"}
              text="Completed lessons"
            />
            <div className="max-xl:hidden">
              <BorderVerticalN40 />
            </div>
          </div>
          <div className="hidden md:max-xl:block">
            <BorderVerticalN40 />
          </div>
        </div>

        {/* profile image start */}
        <div className=" order-1 -mt-28 flex flex-col items-center text-center md:-mt-40">
          <div className="rounded-full border border-neutral-40 bg-white p-3">
            <Image
              src={profileImage}
              width={160}
              height={160}
              alt="Profile Image"
              className="rounded-full max-md:w-100px"
            />
          </div>
          <div className="padding-t-32 flex items-center gap-4">
            <H3>Kathryn Murphy</H3>
            <IconDiscountCheckFilled
              size={32}
              className="text-secondaryColorTwo"
            />
          </div>
          <TextM className="pt-4">UI/UX Designer</TextM>
        </div>
        {/* profile image end */}
        {/* social icon start */}
        <div className="order-3 flex gap-60px md:max-lg:padding-t-32">
          <div className="max-lg:hidden">
            <BorderVerticalN40 />
          </div>
          <div className="my-auto flex w-fit flex-col gap-4 max-md:text-center">
            <H4>Social Media</H4>
            <div className="flex items-center gap-4">
              <StudentProfileSocialIcon icon={<IconBrandFacebook />} link="#" />
              <StudentProfileSocialIcon icon={<IconBrandTwitter />} link="#" />
              <StudentProfileSocialIcon
                icon={<IconBrandInstagram />}
                link="#"
              />
              <StudentProfileSocialIcon
                icon={<IconBrandPinterest />}
                link="#"
              />
            </div>
          </div>
        </div>
        {/* social icon end */}
      </div>
    </div>
  );
};

export default DashBoardBanner;
