import ButtonUnderLine from "@/components/button/ButtonUnderLine";
import BorderHorizontalN40 from "@/components/customBorder/BorderHorizontalN40";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { newsFeedSuggestionData } from "../../../../../public/data/newsFeedSuggestionData";

const Suggestion = () => {
  return (
    <div className="padding-all-32 flex flex-col gap-6 rounded-16px bg-white">
      <p className="h4 font-semibold">Suggestion For You</p>
      <BorderHorizontalN40 />
      {newsFeedSuggestionData.map(({ id, image, name, email }, index) => (
        <Fragment key={id}>
          <div className="flex items-center gap-6">
            <div>
              <Image
                src={image}
                width={80}
                height={80}
                alt="Latest activities "
                className="rounded-full"
              />
            </div>
            <div>
              <Link
                href={`/instructors/instructor`}
                className="xlText font-medium"
              >
                {name},
              </Link>
              <p className="mt-2 text-sText text-neutral-500">{email}</p>
            </div>
          </div>

          <BorderHorizontalN40 />
        </Fragment>
      ))}
      <div>
        <ButtonUnderLine buttonText="See All" link="/instructors" />
      </div>
    </div>
  );
};

export default Suggestion;
