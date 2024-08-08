import CardEventHomeTwo from "@/components/Card/CardEventHomeTwo";
import ButtonPagination from "@/components/button/ButtonPagination";
import { eventData } from "../../../../public/data/eventData";

const EventCards = () => {
  return (
    <div className="container padding-b-80 -mt-40 bg-transparent">
      <div className="grid items-center justify-center gap-6 md:grid-cols-2 md:justify-between lg:grid-cols-3">
        {eventData?.map(({ id, ...props }) => (
          <CardEventHomeTwo key={id} {...props} />
        ))}
      </div>
      <div className="padding-t-40 mx-auto w-fit">
        <ButtonPagination />
      </div>
    </div>
  );
};

export default EventCards;
