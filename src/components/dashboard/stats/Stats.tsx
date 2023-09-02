import StatsCards from "./StatsCards";

const Stats = () => {
  return (
    <>
      <div className="my-8 hidden xl:flex flex-row gap-4">
        <StatsCards active={true} />
        <StatsCards active={false} />
        <StatsCards active={false} />
        <StatsCards active={false} />
      </div>
      <div className="my-8 flex flex-row  xl:hidden gap-4">
        <div className="flex flex-col basis-1/2 justify-between items-center gap-4 md:gap-8">
          <StatsCards active={true} />
          <StatsCards active={false} />
        </div>
        <div className="flex flex-col basis-1/2  justify-between items-center gap-4 md:gap-8">
          <StatsCards active={false} />
          <StatsCards active={false} />
        </div>
      </div>
    </>
  );
};

export default Stats;
