"use client";
import ButtonUnderLine from "@/components/button/ButtonUnderLine";
import BorderHorizontalN40 from "@/components/customBorder/BorderHorizontalN40";
import { IconPlus, IconX } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";
import { newsFeedSuggestionData } from "../../../../../public/data/newsFeedSuggestionData";

const SuggestionCommunity = () => {
  const [cardData, setCardData] = useState(newsFeedSuggestionData);

  const handleRemovePost = (id: string) => {
    const dataAfterRemove = cardData.filter((data) => data.id !== id);
    setCardData(dataAfterRemove);
  };

  return (
    <div className="padding-all-32 flex flex-col gap-6 rounded-16px bg-white">
      <p className="h4 font-semibold">Suggestion For You</p>
      <BorderHorizontalN40 />
      {cardData.map(({ id, image, name, email }, index) => (
        <Fragment key={id}>
          <div className="ic flex justify-between">
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
            <div className="flex items-center gap-4">
              <button className="rounded-full bg-primaryColor p-2">
                <IconPlus size={20} />
              </button>
              <button
                className="rounded-full bg-neutral-20 p-2 text-[#F05D5D]"
                onClick={() => handleRemovePost(id)}
              >
                <IconX size={20} />
              </button>
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

export default SuggestionCommunity;
