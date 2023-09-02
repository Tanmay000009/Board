import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import GraphHeading from "./Heading";

// Define the data array before using it in the Graph component
const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
  },
  {
    name: "Page D",
    uv: 3000,
    pv: 6600,
  },
  {
    name: "Page E",
    uv: 1000,
    pv: 9000,
  },
];

const Graph = () => {
  return (
    <div className="p-4 px-8 h-96 flex-grow bg-white flex flex-col gap-8 rounded-xl">
      <GraphHeading />
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} maxBarSize={40}>
          <CartesianGrid vertical={false} stroke="#EAEAEA" />
          <XAxis dataKey="name" axisLine={false} stroke="#858585" />
          <YAxis axisLine={false} tickLine={false} stroke="#858585" />
          <Tooltip />
          <Bar dataKey="pv" fill="#8884d8" radius={[5, 5, 5, 5]} />
          <Bar dataKey="uv" fill="#82ca9d" radius={[5, 5, 5, 5]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Graph;
