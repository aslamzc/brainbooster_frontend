import TabReviews from "../courses-details-one/TabReviews";
import WriteAReview from "../courses-details-one/WriteAReview";

const ReviewTab = () => {
  return (
    <div>
      <TabReviews bg="white" />
      <div className="mt-10">
        <WriteAReview bg="white" />
      </div>
    </div>
  );
};

export default ReviewTab;
