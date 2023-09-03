import StatsCards from "./StatsCards";

const Stats = () => {
  const revenueAmount = Math.floor(Math.random() * 10000000);
  const totalTransactions = Math.floor(Math.random() * 1000);
  const totalLikes = Math.floor(Math.random() * 100000);
  const totalUsers = Math.floor(Math.random() * 1000000);
  const revenuePercentage =
    Math.round((Math.random() * 100 + Number.EPSILON) * 100) / 100;

  const transactionPercentage =
    Math.round((Math.random() * -100 + Number.EPSILON) * 100) / 100;
  const likesPercentage =
    Math.round((Math.random() * 100 + Number.EPSILON) * 100) / 100;
  const usersPercentage =
    Math.round((Math.random() * 100 + Number.EPSILON) * 100) / 100;

  return (
    <>
      <div className="my-8 hidden xl:flex flex-row gap-4">
        <StatsCards
          active={true}
          type={"revenue"}
          value={revenueAmount}
          percantageChange={revenuePercentage}
        />
        <StatsCards
          active={false}
          type={"transactions"}
          value={totalTransactions}
          percantageChange={transactionPercentage}
        />
        <StatsCards
          active={false}
          type={"likes"}
          value={totalLikes}
          percantageChange={likesPercentage}
        />
        <StatsCards
          active={false}
          type={"users"}
          value={totalUsers}
          percantageChange={usersPercentage}
        />
      </div>
      <div className="my-8 flex flex-row  xl:hidden gap-4">
        <div className="flex flex-col basis-1/2 justify-between items-center gap-4 md:gap-8">
          <StatsCards
            active={true}
            type={"revenue"}
            value={revenueAmount}
            percantageChange={revenuePercentage}
          />
          <StatsCards
            active={false}
            type={"transactions"}
            value={totalTransactions}
            percantageChange={transactionPercentage}
          />
        </div>
        <div className="flex flex-col basis-1/2  justify-between items-center gap-4 md:gap-8">
          <StatsCards
            active={false}
            type={"likes"}
            value={totalLikes}
            percantageChange={likesPercentage}
          />
          <StatsCards
            active={false}
            type={"users"}
            value={totalUsers}
            percantageChange={usersPercentage}
          />
        </div>
      </div>
    </>
  );
};

export default Stats;
