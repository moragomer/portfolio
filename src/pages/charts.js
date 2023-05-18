import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
import { chartData } from "../components/data";
const data = chartData;

export const Charts = () => {
  return (
    <LineChart width={600} height={300} data={data}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
    </LineChart>
  );
};
