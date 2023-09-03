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

const Graph = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    setLoading(true);
    const data_IBM = await fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=60min&month=2009-02&outputsize=full&apikey=${process.env.NEXT_PUBLIC_ALPHA_KEY}`
    ).then((res) => res.json());

    const IBM_data = data_IBM["Time Series (60min)"];

    const data_MSFT = await fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=60min&month=2009-02&outputsize=full&apikey=${process.env.NEXT_PUBLIC_ALPHA_KEY}`
    ).then((res) => res.json());

    const MSFT_data = data_MSFT["Time Series (60min)"];

    const final_data = [];

    for (let i = 0; i < 5; i++) {
      final_data.push({
        name: Object.keys(IBM_data)[i].split(" ")[1],
        IBM: IBM_data[Object.keys(IBM_data)[i]]["1. open"],
        MSFT: MSFT_data[Object.keys(MSFT_data)[i]]["1. open"],
      });
    }

    setData(final_data);

    setLoading(false);
  };
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
          <BarChart data={data} maxBarSize={40}>
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
