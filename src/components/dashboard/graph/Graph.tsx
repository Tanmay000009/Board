"use client";

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
import { SHADOW_STYLE } from "../Dashboard";
import { toast } from "react-toastify";
import { auth } from "../../../app/utils/firebase";

const dummy_data = [
  {
    name: "11:00:00",
    IBM: 20.09,
    MSFT: 44,
  },
  {
    name: "12:00:00",
    IBM: 21,
    MSFT: 39,
  },
  {
    name: "13:00:00",
    IBM: 22,
    MSFT: 41,
  },
  {
    name: "14:00:00",
    IBM: 20.09,
    MSFT: 44,
  },
  {
    name: "15:00:00",
    IBM: 18,
    MSFT: 45,
  },
];

const Graph = () => {
  const [loading, setLoading] = useState(true);
  const [dummyData, setDummyData] = useState<boolean>(false);

  return (
    <div
      className={
        "p-4 px-8 h-96 flex-grow bg-white flex flex-col gap-8 rounded-xl " +
        SHADOW_STYLE
      }
    >
      <GraphHeading />
      {loading ? (
        <div className="flex flex-col justify-center items-center h-full">
          <div className="h-16 w-16 animate-spin-slow rounded-full border-4 border-dashed border-[#3C83F9] "></div>
          <h2 className="font-mont text-center text-white text-xl font-semibold">
            Loading...
          </h2>
          <p className="font-mont font-normal w-2/3 text-center text-white">
            This may take a few seconds, please dont close this page.
          </p>
        </div>
      ) : (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={dummy_data} maxBarSize={40}>
            <CartesianGrid vertical={false} stroke="#EAEAEA" />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              stroke="#858585"
            />
            <YAxis axisLine={false} tickLine={false} stroke="#858585" />
            <Tooltip />
            <Bar dataKey="IBM" fill="#8884d8" radius={[5, 5, 5, 5]} />
            <Bar dataKey="MSFT" fill="#82ca9d" radius={[5, 5, 5, 5]} />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default Graph;
