import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { data } from "./TopProductsCard";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const PieChartComponent = ({ size }: { size: "big" | "normal" }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          innerRadius={size === "big" ? 60 : 40}
          outerRadius={size === "big" ? 80 : 56}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
              stroke="none"
            />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieChartComponent;
