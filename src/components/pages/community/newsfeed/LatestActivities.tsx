import ButtonUnderLine from "@/components/button/ButtonUnderLine";
import BorderHorizontalN40 from "@/components/customBorder/BorderHorizontalN40";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { newsFeedLatestData } from "../../../../../public/data/newfeedLatestData";

const LatestActivities = () => {
  return (
    <div className="padding-all-32 flex flex-col gap-6 rounded-16px bg-white">
      <p className="h4 font-semibold">Latest Activities</p>
      <BorderHorizontalN40 />
      {newsFeedLatestData.map(({ id, image, name, joinedTime }, index) => (
        <Fragment key={id}>
          <div className="flex items-center gap-6">
            <div className="shrink-0">
              <Image
                src={image}
                width={80}
                height={80}
                alt="Latest activities "
                className="rounded-full"
              />
            </div>
            <div>
              <Link href={`/community`} className="text-mText">
                <span className="xlText font-medium">{name},</span> Joined the
                Community with Edufast
              </Link>
              <p className="mt-3 text-sText text-neutral-500">11 minutes ago</p>
            </div>
          </div>

          <BorderHorizontalN40 />
        </Fragment>
      ))}
      <div>
        <ButtonUnderLine buttonText="See All" link="/community" />
      </div>
    </div>
  );
};

export default LatestActivities;
