import { SHADOW_STYLE } from "../../Dashboard";
import Heading from "./Heading";
import LabelItem from "./LabelItem";
import PieChartComponent from "./PieChart";

export const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const TopProductsCard = () => {
  return (
    <div
      className={
        "basis-1/2 h-72 w-full bg-white mt-8 rounded-xl p-4 xl:p-8 flex flex-col " +
        SHADOW_STYLE
      }
    >
      <Heading />
      <div className="flex flex-row w-full h-full ">
        <div className="hidden xl:flex basis-1/2 w-1/2">
          <PieChartComponent size="big" />
        </div>
        <div className="flex sm:hidden md:flex xl:hidden basis-1/2 w-1/2">
          <PieChartComponent size="normal" />
        </div>
        <div className="hidden sm:flex md:hidden basis-1/2 w-1/2">
          <PieChartComponent size="big" />
        </div>
        <div className=" basis-1/2 flex flex-col gap-2 pl-8 pt-4 xl:pl-12 ">
          <LabelItem label="Group A" share={33} />
          <LabelItem label="Group B" share={25} />
          <LabelItem label="Group C" share={25} />
          <LabelItem label="Group D" share={17} />
        </div>
      </div>
    </div>
  );
};

export default TopProductsCard;
