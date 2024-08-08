"use client";
import CardPricePlanHomeTwo from "@/components/Card/CardPricePlanHomeTwo";
import ButtonSwitch from "@/components/button/ButtonSwitch";
import FadeDownToTop from "@/motionEffect/FadeDownToTop";
import FadeLeft from "@/motionEffect/FadeLeft";
import { IconHome, IconPigMoney, IconTags } from "@tabler/icons-react";
import { useState } from "react";

const PricePlan = () => {
  const [yearly, setYearly] = useState(false);

  const courseDescriptionDataOne = [
    "Access to select courses",
    "Limited community support",
    "Monthly progress reports",
    "Certificate of completion",
  ];

  const courseDescriptionDataTwo = [
    "Access to all courses",
    "Priority support",
    "Weekly progress reports",
    "Certificate of completion",
  ];

  const courseDescriptionDataThree = [
    "All courses and resources",
    "Priority support & response",
    "Weekly reports & feedback",
    "Certificate of completion",
  ];
  return (
    <section className="bg-bgColorOne text-white">
      <div className="container section-gap-top section-gap-bottom">
        <div className="grid-cols-12 items-center justify-between md:grid">
          <FadeLeft className="d4 col-start-1 col-end-6 font-semibold max-md:text-center">
            <h4>Select a Plan That Suits You</h4>
          </FadeLeft>
          <div className="col-start-7 col-end-13 flex items-center justify-center gap-4 max-md:mt-5 md:justify-end lg:col-start-8 xxl:col-start-9">
            <div className="flex items-center gap-4">
              <p className=" xlText font-medium"> Monthly</p>
              <div onClick={() => setYearly(!yearly)}>
                <ButtonSwitch />
              </div>
            </div>
            <p className="xlText font-medium">
              Yearly <span className="text-primaryColor">(Save 30%)</span>
            </p>
          </div>
        </div>
        <FadeDownToTop>
          <div className="padding-t-60 grid items-center justify-center gap-6 md:grid-cols-2 md:justify-between  lg:grid-cols-3">
            <CardPricePlanHomeTwo
              courseDescriptionData={courseDescriptionDataOne}
              price={yearly ? 70 : 99}
              type="Basic Plan"
              icon={
                <IconHome
                  size={60}
                  stroke={1}
                  className="max-sm:h-10 max-sm:w-10"
                />
              }
            />
            <CardPricePlanHomeTwo
              courseDescriptionData={courseDescriptionDataTwo}
              price={yearly ? 110 : 129}
              type="Standard Plan"
              icon={
                <IconTags
                  size={60}
                  stroke={1}
                  className="max-sm:h-10 max-sm:w-10"
                />
              }
            />
            <CardPricePlanHomeTwo
              courseDescriptionData={courseDescriptionDataThree}
              price={yearly ? 150 : 199}
              type="Premium"
              icon={
                <IconPigMoney
                  size={60}
                  stroke={1}
                  className="max-sm:h-10 max-sm:w-10"
                />
              }
            />
          </div>
        </FadeDownToTop>
      </div>
    </section>
  );
};

export default PricePlan;
