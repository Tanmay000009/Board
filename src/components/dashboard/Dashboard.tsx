"use client";

import DashboardNav from "./DashboardNav";
import Stats from "./stats/Stats";
import Graph from "./graph/Graph";
import TopProductsCard from "./cards/TopProducts/TopProductsCard";
import ProfileCard from "./cards/Profile/ProfileCard";

export const SHADOW_STYLE =
  " shadow-[rgba(98,_98,_98,_0.15)_0px_0px_0px_2px,_rgba(98,_98,_98,_0.15)_0px_4px_6px_-1px,_rgba(98,_98,_98,_0.15)_0px_1px_0px_inset]";

const DashboardComponent = () => {
  return (
    <main className="basis-5/6 flex flex-col mt-4 ml-2 lg:ml-8 px-2 lg:px-8 pb-8 text-black">
      <DashboardNav />
      <Stats />
      <Graph />
      <div className="flex flex-col md:flex-row justify-between md:justify-normal gap-8 lg:gap-10 w-full">
        <TopProductsCard />
        <ProfileCard />
      </div>
    </main>
  );
};

export default DashboardComponent;
