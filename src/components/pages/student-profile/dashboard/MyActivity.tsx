"use client";
import BorderHorizontalN40 from "@/components/customBorder/BorderHorizontalN40";
import Dropdown from "@/components/dropdown/Dropdown";
import H4 from "@/components/sharedComponents/H4";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
const MyActivity = () => {
  //   const [selected, setSelected] = useState(options[0]);
  //   const { theme } = useTheme();
  const category = [{ label: "Weekly" }, { label: "Monthly" }];

  const chartData: ApexOptions = {
    series: [
      {
        name: "Transactions",
        data: [2, 75, 55, 22, 79, 19, 22],
      },
    ],
    chart: {
      height: 350,
      type: "line",
      toolbar: {
        show: false,
      },
    },
    forecastDataPoints: {
      count: 2,
    },
    stroke: {
      width: 5,
      curve: "smooth",
    },
    xaxis: {
      type: "category",
      categories: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
      tickAmount: 10,
      labels: {
        style: {
          colors: "#404A60",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        color: "#404A60",
      },
    },

    colors: ["#FDD835"],
    yaxis: {
      min: 0,
      max: 100,
      labels: {
        style: {
          colors: "#404A60",
        },
        formatter: function (value) {
          return value + "%";
        },
      },
    },
    grid: {
      borderColor: "#EBECEF",
    },
  };
  return (
    <div className="padding-all-32 rounded-16px bg-white ">
      <div className="flex items-center justify-between gap-4 max-sm:flex-col sm:gap-6">
        <H4>My Activity</H4>{" "}
        <div className="flex items-center gap-2">
          <p className="whitespace-nowrap text-mText text-neutral-500">
            Sort By :
          </p>{" "}
          <div className="border-neutral-40 rounded-16px border px-4 py-2">
            <Dropdown options={category} />
          </div>
        </div>
      </div>
      <div className="py-6">
        <BorderHorizontalN40 />
      </div>

      <ReactApexChart
        height={330}
        width={"100%"}
        series={chartData.series}
        options={chartData}
        type="line"
      />
    </div>
  );
};
export default MyActivity;
