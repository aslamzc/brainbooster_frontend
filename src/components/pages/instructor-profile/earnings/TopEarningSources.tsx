"use client";
import BorderHorizontalN40 from "@/components/customBorder/BorderHorizontalN40";
import Dropdown from "@/components/dropdown/Dropdown";
import H4 from "@/components/sharedComponents/H4";
import TextL from "@/components/sharedComponents/TextL";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import CourseName from "./CourseName";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const TopEarningSources = () => {
  const category = [{ label: "Weekly" }, { label: "Monthly" }];
  const chartData: ApexOptions = {
    series: [44, 55, 41, 17, 15],

    chart: {
      type: "donut",
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            value: {
              color: "#404A60",
              fontSize: "16px",
              offsetY: 2,
            },
            total: {
              show: true,
              label: "Earning",
              fontSize: "24px",
              color: "#404A60",
              formatter: () => "Sources",
            },
          },
        },
        expandOnClick: true,
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            with: 200,
          },
        },
      },
    ],
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: true,
    },
  };

  return (
    <div className="padding-all-32 rounded-16px border border-neutral-30 bg-white ">
      <div className="flex items-center justify-between gap-4 max-sm:flex-col sm:gap-6">
        <H4>Top Five Earning Sources</H4>{" "}
        <div className="flex items-center gap-2">
          <p className="whitespace-nowrap text-mText text-neutral-500">
            Sort By :
          </p>{" "}
          <div className="rounded-16px border border-neutral-40 px-4 py-2">
            <Dropdown options={category} />
          </div>
        </div>
      </div>
      <div className="py-6">
        <BorderHorizontalN40 />
      </div>
      <div className="flex items-center gap-6 md:gap-40px max-md:flex-col">
        <div className="w-[300px]" id="chart">
          <ReactApexChart
            height={300}
            width={"100%"}
            series={chartData.series}
            options={chartData}
            type="donut"
          />
        </div>
        <div className="flex flex-col gap-3">
          <TextL className="font-medium">Course Name</TextL>
          <CourseName
            bgClassName="bg-[#5D69F4]"
            courseName="The Complete Digital Marketing Course - 12 Courses in 1"
          />
          <CourseName
            bgClassName="bg-[#2FA75F]"
            courseName="Google Ads Training: Become a PPC Expert"
          />
          <CourseName
            bgClassName="bg-[#FFC700]"
            courseName="Microsoft Excel - Excel from Beginner to Advanced"
          />
          <CourseName
            bgClassName="bg-[#FF6161]"
            courseName="Create a Design System in Figma"
          />
          <CourseName
            bgClassName="bg-[#775DD0]"
            courseName="Deep Learning with React-Native"
          />
        </div>
      </div>
    </div>
  );
};

export default TopEarningSources;
