import ReactCounterUp from "@/components/sharedComponents/Counter";
import D2 from "@/components/sharedComponents/D2";
import D4 from "@/components/sharedComponents/D4";
import TextL from "@/components/sharedComponents/TextL";

const EducationalSuccess = () => {
  return (
    <div className="section-gap-top section-gap-bottom bg-bgColorOne">
      <div className="container text-white">
        <div className="mx-auto flex max-w-[636px] flex-col gap-6 text-center">
          <D4>Educational Success</D4>
          <TextL>
            Every number represents a success story, an achievement unlocked,
            and a learner empowered. Join us in celebrating{" "}
          </TextL>
        </div>
        <div className="padding-t-60 grid grid-cols-1 items-center justify-center  gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:justify-between">
          <div className="education-success-card padding-t-60 padding-b-60 padding-s-32 padding-e-32 theme-transition-3 flex flex-col gap-6 rounded-32px text-center hover:bg-primaryColor hover:text-neutral-700">
            <D2 className="text-outline ">
              {" "}
              <ReactCounterUp end={15} />
              K+
            </D2>
            <TextL>Successfully Trained</TextL>
          </div>
          <div className="education-success-card padding-t-60 padding-b-60 padding-s-32 padding-e-32 theme-transition-3 flex shrink-0 flex-col gap-6 rounded-32px text-center hover:bg-primaryColor hover:text-neutral-700">
            <D2 className="text-outline">
              <ReactCounterUp end={60} />K
            </D2>
            <TextL>Successfully Trained</TextL>
          </div>
          <div className="education-success-card padding-t-60 padding-b-60 padding-s-32 padding-e-32 theme-transition-3 flex shrink-0 flex-col gap-6 rounded-32px text-center hover:bg-primaryColor hover:text-neutral-700">
            <D2 className="text-outline">
              <ReactCounterUp end={99} />
              K+
            </D2>
            <TextL>Successfully Trained</TextL>
          </div>
          <div className="education-success-card padding-t-60 padding-b-60 padding-s-32 padding-e-32 theme-transition-3 flex shrink-0 flex-col gap-6 rounded-32px text-center hover:bg-primaryColor hover:text-neutral-700">
            <D2 className="text-outline">
              <ReactCounterUp end={300} />K
            </D2>
            <TextL>Successfully Trained</TextL>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationalSuccess;
