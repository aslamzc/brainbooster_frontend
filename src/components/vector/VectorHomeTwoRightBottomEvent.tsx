import Link from "next/link";

const VectorHomeTwoRightBottomEvent = () => {
  return (
    <div className="absolute bottom-4 right-4">
      <div className="absolute bottom-0 right-0 pb-1 ps-6 pt-1 xxl:ps-2">
        <Link
          href="/event/event-details"
          className="h4 theme-transition-3 block rounded-16px bg-primaryColor px-6 py-2 font-semibold  hover:bg-bgColorOne hover:text-white hover:shadow-five-theme "
        >
          Join
        </Link>
      </div>
    </div>
  );
};

export default VectorHomeTwoRightBottomEvent;
