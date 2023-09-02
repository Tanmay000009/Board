import Image from "next/image";
import { SHADOW_STYLE } from "../Dashboard";

const StatsCards = ({ active }: { active: boolean }) => {
  return (
    <div
      className={
        "flex-grow flex flex-col gap-2 bg-white rounded-xl py-4 px-4 md:px-8 cursor-pointer hover:scale-105 transition duration-150  hover:opacity-80 active:scale-90 active:opacity-100 " +
        SHADOW_STYLE
      }
    >
      <div className="bg-[#7ECC93] rounded-full p-1 md:p-2 h-10 w-10 grid place-items-center">
        <Image
          src={"/icons/revenue.svg"}
          alt={"Revenue icon"}
          width={24}
          height={24}
          className="hidden md:flex"
        />
        <Image
          src={"/icons/revenue.svg"}
          alt={"Revenue icon"}
          width={20}
          height={20}
          className="flex md:hidden"
        />
      </div>
      <div className="hidden xl:flex flex-col">
        <h3 className="text-xs ">Total Revenues</h3>
        <div className="flex flex-row justify-between">
          <h4 className="text-xl font-openSans font-bold">$ 2,299,222</h4>
          <div className="flex flex-row gap-1">
            {active ? (
              <Image
                alt="Down Icon"
                src={"/icons/up.svg"}
                width={16}
                height={16}
                className="transform rotate-180 translate-y-4"
              />
            ) : null}
            <div className="bg-[#E9F9EB] px-2 py-1 rounded-3xl text-sm font-figTree font-semibold text-[#4AD15F]">
              + 2.5 %
            </div>
          </div>
        </div>
      </div>
      <div className="flex xl:hidden flex-col">
        <h3 className="text-xs ">Total Revenue</h3>
        <div className="flex flex-row justify-between">
          <h4 className="text-base sm:text-lg md:text-xl font-openSans font-bold">
            $ 2,299,222
          </h4>
          {active ? (
            <>
              <Image
                alt="Down Icon"
                src={"/icons/up.svg"}
                width={16}
                height={16}
                className="hidden md:flex transform rotate-180 translate-y-4"
              />
              <Image
                alt="Down Icon"
                src={"/icons/up.svg"}
                width={12}
                height={12}
                className="flex md:hidden transform rotate-180 translate-y-4"
              />
            </>
          ) : null}
          <div className="bg-[#E9F9EB] px-2 py-1 rounded-3xl text-[0.5rem] sm:text-xs md:text-sm font-figTree font-semibold text-[#4AD15F]">
            + 2.5 %
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCards;
