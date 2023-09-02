"use client";

import DashboardNav from "./DashboardNav";
import Stats from "./stats/Stats";
import Graph from "./graph/Graph";

const DashboardComponent = () => {
  return (
    <main className="basis-5/6 flex flex-col mt-4 ml-2 md:ml-8 px-2 md:px-8 pb-8 text-black">
      <DashboardNav />
      <Stats />
      <Graph />
      <div className="h-96 w-full bg-white mt-8">HI</div>
    </main>
  );
};

export default DashboardComponent;
