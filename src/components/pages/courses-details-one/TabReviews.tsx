import ButtonPrimary from "@/components/button/ButtonPrimary";
import BorderHorizontal from "@/components/customBorder/BorderHorizontal";
import Dropdown from "@/components/dropdown/Dropdown";
import { IconStarFilled, IconStarHalfFilled } from "@tabler/icons-react";
import TabProgressBar from "./TabProgressBar";
import TabReviewComment from "./TabReviewComment";
import TabReviewFirstComment from "./TabReviewFirstComment";

const TabReviews = ({ bg = "gray" }: { bg?: "white" | "gray" }) => {
  const category = [{ label: "New" }, { label: "Best" }, { label: "Popular" }];
  return (
    <div
      className={`flex flex-col justify-between gap-6 rounded-16px border border-neutral-30  p-3 sm:gap-8 sm:p-5 md:p-10 ${
        bg === "gray" ? "bg-neutral-20" : "bg-white"
      }`}
    >
      <h4 className="h4 font-semibold">Average Reviews</h4>
      <BorderHorizontal />
      <div className="flex gap-6 max-md:flex-col">
        <div className="flex flex-col items-center justify-between gap-2 rounded-16px bg-secondaryColor px-11 py-6">
          <div className="flex items-end">
            <p className="h2 font-semibold">4.9</p>
            <p className="leadText">/5</p>
          </div>
          <div className="flex items-center justify-between gap-1">
            <IconStarFilled size={16} />
            <IconStarFilled size={16} />
            <IconStarFilled size={16} />
            <IconStarFilled size={16} />
            <IconStarHalfFilled size={16} />
          </div>
          <p className="text-mText">26 Rating</p>
        </div>
        <div className="flex w-full flex-col gap-2">
          <TabProgressBar starNo={5} width={90} />
          <TabProgressBar starNo={4} width={80} />
          <TabProgressBar starNo={3} width={70} />
          <TabProgressBar starNo={2} width={50} />
          <TabProgressBar starNo={1} width={40} />
        </div>
      </div>
      <BorderHorizontal />
      <div className="flex items-center justify-between gap-6 max-sm:flex-col">
        <p className="h5 font-semibold">All Reviews</p>
        <div className="flex items-center gap-2">
          <p className="text-mText text-neutral-500">Sort By :</p>{" "}
          <div className="rounded-16px border border-neutral-40 px-4 py-2">
            <Dropdown options={category} />
          </div>
        </div>
      </div>
      <TabReviewFirstComment bg={bg} />
      <TabReviewComment bg={bg} />
      <TabReviewComment bg={bg} />
      <div>
        <ButtonPrimary button buttonText="See all Reviews" />
      </div>
    </div>
  );
};

export default TabReviews;
