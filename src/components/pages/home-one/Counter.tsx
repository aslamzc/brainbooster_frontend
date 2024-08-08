import ReactCounterUp from "../../sharedComponents/Counter";
const Counter = () => {
  return (
    <div className="section-gap-top">
      <div className="container">
        <div className="grid grid-cols-2 items-center justify-center md:grid-cols-4">
          <div className="border-b border-r border-t border-neutral-40 py-10 xl:py-60px">
            <p className="text-center text-h1 font-semibold uppercase md:text-d4 lg:text-d3 xl:text-d2">
              <ReactCounterUp end={15} />k
            </p>
            <p className="pt-6 text-center text-sText font-semibold sm:text-mText lg:text-lText">
              Successfully Trained
            </p>
          </div>
          <div className="border-b border-t border-neutral-40 py-10 md:border-r xl:py-60px">
            <p className="text-center text-h1 font-semibold uppercase md:text-d4 lg:text-d3 xl:text-d2">
              <ReactCounterUp end={60} />k
            </p>
            <p className="pt-6 text-center text-sText font-semibold sm:text-mText lg:text-lText">
              Courses Completed
            </p>
          </div>
          <div className="border-b border-r border-t border-neutral-40 py-10 xl:py-60px">
            <p className="text-center text-h1 font-semibold uppercase md:text-d4 lg:text-d3 xl:text-d2">
              <ReactCounterUp end={90} />+
            </p>
            <p className="pt-6 text-center text-sText font-semibold sm:text-mText lg:text-lText">
              Satisfaction Rate
            </p>
          </div>
          <div className="border-b border-t  border-neutral-40 py-10 xl:py-60px">
            <p className="text-center text-h1 font-semibold uppercase md:text-d4 lg:text-d3 xl:text-d2">
              <ReactCounterUp end={300} />k
            </p>
            <p className="pt-6 text-center text-sText font-semibold sm:text-mText lg:text-lText">
              Students Community
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
