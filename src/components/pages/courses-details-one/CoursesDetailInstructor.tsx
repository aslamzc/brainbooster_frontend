import instructor from "@/../public/images/courses/coursesDetailsone/instructor.png";
import BorderHorizontalN40 from "@/components/customBorder/BorderHorizontalN40";
import SocialIconDarkBorder from "@/components/icons/SocialIconDarkBorder";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandPinterest,
  IconBrandTwitter,
  IconStarFilled,
  IconUsers,
  IconVersions,
} from "@tabler/icons-react";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

const CoursesDetailInstructor = () => {
  return (
    <div className="gap-4 rounded-16px border border-neutral-30 bg-neutral-20 p-4 sm:gap-6 sm:p-6 md:flex lg:gap-12 lg:p-10">
      <div>
        <Image
          src={instructor}
          width={160}
          height={160}
          alt="Instructor image"
          className="rounded-full "
        />
      </div>
      <div className="flex flex-col justify-between gap-4 lg:gap-6">
        <h3 className="h3 font-semibold">Ronald Richards</h3>
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-1 sm:gap-2">
            <IconVersions />
            <span className="text-mText">5 Courses</span>
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            <IconUsers />
            <span className="text-mText">1.5k</span>
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            <div className="text-secondaryColor">
              <IconStarFilled />
            </div>
            <span className="text-mText">4.9</span>
          </div>
        </div>
        <BorderHorizontalN40 />
        <ul className="list-disc ps-5 text-sText">
          <li>
            Offer brief biographies or profiles of each instructor. These may
            include details about their careers, achievements, and interests.
          </li>
          <li>
            Provide insights into their teaching philosophy and approach to the
            subject matter.
          </li>
          <li>
            Share any unique experiences or projects they have been involved in
            that are relevant to the course content.
          </li>
        </ul>
        <BorderHorizontalN40 />
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
          <SocialIconDarkBorder
            icon={<IconBrandFacebook />}
            link="/"
            key={uuidv4()}
          />
          <SocialIconDarkBorder
            icon={<IconBrandTwitter />}
            link="/"
            key={uuidv4()}
          />
          <SocialIconDarkBorder
            icon={<IconBrandInstagram />}
            link="/"
            key={uuidv4()}
          />
          <SocialIconDarkBorder
            icon={<IconBrandPinterest />}
            link="/"
            key={uuidv4()}
          />
        </div>
      </div>
    </div>
  );
};

export default CoursesDetailInstructor;
