"use client";
import Image from "next/image";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Girls",
    count: 55,
    fill: "#FAE27C",
  },
  {
    name: "Boys",
    count: 45,
    fill: "#C3EBFA",
  },
  {
    name: "Total",
    count: 100,
    fill: "white",
  },
];

const CountChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* TITLE */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Students</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      {/* CHART*/}
      <div className="w-full h-[75%] relative">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="50%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image
          src="/maleFemale.png"
          alt=""
          width={50}
          height={50}
          className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      {/* BOTTOM */}
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="rounded-full w-5 h-5 bg-dhruboSky"></div>
          <h1 className="text-lg font-semibold">1,234</h1>
          <h2 className="text-xs text-gray-500">Boys ({data[1].count}%)</h2>
        </div>
        <div className="flex flex-col gap-1">
          <div className="rounded-full w-5 h-5 bg-dhruboYellow"></div>
          <h1 className="text-lg font-semibold ">1,234</h1>
          <h2 className="text-xs text-gray-500">Girls({data[0].count}%)</h2>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
