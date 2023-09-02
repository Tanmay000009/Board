import DashboardNav from "./DashboardNav";
import StatsCards from "./cards/StatsCards";

const DashboardComponent = () => {
  return (
    <main className="basis-5/6 flex flex-col mt-4 ml-2 md:ml-8 px-2 md:px-8 py-12 text-black">
      <DashboardNav />
      <div className="my-8 hidden xl:flex flex-row gap-4">
        <StatsCards active={true} />
        <StatsCards active={false} />
        <StatsCards active={false} />
        <StatsCards active={false} />
      </div>
      <div className="my-8 flex flex-col  xl:hidden gap-4">
        <div className="flex flex-row justify-between items-center gap-4 md:gap-8">
          <StatsCards active={true} />
          <StatsCards active={false} />
        </div>
        <div className="flex flex-row justify-between items-center gap-4 md:gap-8">
          <StatsCards active={false} />
          <StatsCards active={false} />
        </div>
      </div>
    </main>
  );
};

export default DashboardComponent;
