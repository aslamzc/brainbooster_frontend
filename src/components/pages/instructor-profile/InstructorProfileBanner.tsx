import bannerImage from "@/../public/images/instructor-profile/banner-image.png";
import profileImage from "@/../public/images/instructor-profile/instructor-profile.png";
import BorderHorizontalN40 from "@/components/customBorder/BorderHorizontalN40";
import BorderVerticalN40 from "@/components/customBorder/BorderVerticalN40";
import H3 from "@/components/sharedComponents/H3";
import H4 from "@/components/sharedComponents/H4";
import TextM from "@/components/sharedComponents/TextM";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandPinterest,
  IconBrandTwitter,
  IconDiscountCheckFilled,
  IconStarFilled,
  IconUsers,
  IconVersions,
} from "@tabler/icons-react";
import Image from "next/image";
import StudentProfileSocialIcon from "../student-profile/dashboard/StudentProfileSocialIcon";
import DashBoardBannerInfo from "./dashboard/DashBoardBannerInfo";

const InstructorProfileBanner = () => {
  return (
    <div className="container mt-6">
      <div>
        <Image
          src={bannerImage}
          width={1296}
          height={500}
          alt="Student Profile banner"
          className="rounded-tl-16px rounded-tr-16px "
        />
      </div>
      <div className="padding-b-40 padding-s-40 padding-e-40 flex flex-col gap-4 rounded-bl-16px rounded-br-16px bg-white">
        {/* profile image start */}
        <div className="relative z-10 -mt-20 w-fit rounded-full border border-neutral-40 bg-white p-3 md:-mt-36">
          <Image
            src={profileImage}
            width={160}
            height={160}
            alt="Profile Image"
            className="rounded-full max-md:w-100px"
          />
        </div>
        <div className="flex justify-between max-xl:gap-32px max-xl:flex-col">
          <div className=" flex flex-col ">
            <div className="flex items-center gap-4">
              <H3>Dr Floyd Miles</H3>
              <IconDiscountCheckFilled
                size={32}
                className="text-secondaryColorTwo"
              />
            </div>
            <TextM className="pt-4">UI/UX Designer</TextM>
          </div>
          <div className="hidden xl:block">
            <BorderVerticalN40 />
          </div>
          <div className="block xl:hidden">
            <BorderHorizontalN40 />
          </div>
          {/* profile image end */}
          <div className="flex gap-4 max-sm:flex-wrap sm:gap-6 xl:justify-between">
            <DashBoardBannerInfo
              icon={<IconVersions />}
              title={"35"}
              text="Total Courses"
            />
            <div className="max-xl:hidden">
              <BorderVerticalN40 />
            </div>
            <DashBoardBannerInfo
              icon={<IconUsers />}
              title={"25K+"}
              text="Enrolled Students"
            />
            <div className="max-xl:hidden">
              <BorderVerticalN40 />
            </div>
            <DashBoardBannerInfo
              icon={<IconStarFilled className="text-secondaryColor" />}
              title={"4.5/5.0"}
              text="Total Reviews"
            />
          </div>
          <div className="hidden xl:block">
            <BorderVerticalN40 />
          </div>
          <div className="block xl:hidden">
            <BorderHorizontalN40 />
          </div>
          {/* social icon start */}

          <div className="my-auto flex w-fit flex-col gap-4 ">
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

          {/* social icon end */}
        </div>
      </div>
    </div>
  );
};

export default InstructorProfileBanner;
