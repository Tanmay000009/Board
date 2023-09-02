"use client";

import DashboardNav from "./DashboardNav";
import Stats from "./stats/Stats";
import Graph from "./graph/Graph";
import TopProductsCard from "./cards/TopProductsCard";

const DashboardComponent = () => {
  return (
    <main className="basis-5/6 flex flex-col mt-4 ml-2 lg:ml-8 px-2 lg:px-8 pb-8 text-black">
      <DashboardNav />
      <Stats />
      <Graph />
      <div className="flex flex-col md:flex-row justify-between md:justify-normal md:gap-10 w-full">
        <TopProductsCard />
        <TopProductsCard />
      </div>
    </main>
  );
};

export default DashboardComponent;
