"use client";
import BorderHorizontalN40 from "@/components/customBorder/BorderHorizontalN40";
import Dropdown from "@/components/dropdown/Dropdown";
import H4 from "@/components/sharedComponents/H4";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
const AverageSelling = () => {
  //   const [selected, setSelected] = useState(options[0]);
  //   const { theme } = useTheme();
  const category = [{ label: "Weekly" }, { label: "Monthly" }];

  const chartData: ApexOptions = {
    series: [
      {
        data: [
          [1327359600000, 150],
          [1327446000000, 167],
          [1327532400000, 151.18],
          [1327618800000, 131.05],
          [1327878000000, 231.0],
          [1327964400000, 130.95],
          [1328050800000, 231.24],
          [1328137200000, 170.29],
          [1328223600000, 90.85],
          [1328482800000, 186],
          [1328569200000, 158],
          [1328655600000, 185],
          [1328742000000, 132.65],
          [1328828400000, 152.21],
          [1329087600000, 232.35],
          [1329174000000, 175.44],
          [1329260400000, 90.46],
          [1329346800000, 132.86],
          [1329433200000, 72.75],
          [1329778800000, 55.54],
          [1329865200000, 102.33],
          [1329951600000, 132.97],
          [1330038000000, 183.41],
          [1330297200000, 153.27],
        ],
      },
    ],
    chart: {
      height: 350,
      type: "area",
      toolbar: {
        show: false,
      },
    },
    stroke: {
      width: 5,
    },
    xaxis: {
      type: "datetime",
      categories: [
        "1/11/2000",
        "2/11/2000",
        "3/11/2000",
        "4/11/2000",
        "5/11/2000",
        "6/11/2000",
        "7/11/2000",
        "8/11/2000",
        "9/11/2000",
        "10/11/2000",
        "11/11/2000",
        "12/11/2000",
        "1/11/2001",
        "2/11/2001",
        "3/11/2001",
        "4/11/2001",
        "5/11/2001",
        "6/11/2001",
      ],
      tickAmount: 7,
      labels: {
        style: {
          colors: "#404A60",
        },
        formatter: function (value, timestamp, opts) {
          return opts.dateFormatter(new Date(timestamp!), "dd MMM");
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        color: "#404A60",
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#FDD835"],
    yaxis: {
      min: 40,
      max: 240,

      tickAmount: 5,
      floating: false,
      labels: {
        style: {
          colors: "#404A60",
        },
        formatter: function (value) {
          return Math.ceil(value / 40) * 40 + "";
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
        <H4>Average Selling</H4>{" "}
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
        type="area"
      />
    </div>
  );
};
export default AverageSelling;
