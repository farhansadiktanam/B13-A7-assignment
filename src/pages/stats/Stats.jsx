import { Legend, Pie, PieChart } from "recharts";

const Stats = () => {
  // #region Sample data
  const data = [
    { name: "Text", value: 400, fill: "#0088FE" },
    { name: "Call", value: 300, fill: "#00C49F" },
    { name: "Video", value: 300, fill: "#FFBB28" },
  ];
  return (
    <div className="min-h-[50vh] container  mx-auto my-10 ">
      <div className="space-y-5">
        <h2 className="text-4xl font-bold text-[#244D3F] ">
          Friendship Analytics
        </h2>
        <p className="text-[#244D3F] mb-5">By Interaction Type</p>
      </div>
      <PieChart
        style={{
          width: "100%",
          maxWidth: "500px",
          maxHeight: "80vh",
          aspectRatio: 1,
        }}
        responsive
      >
        <Pie
          data={data}
          innerRadius="80%"
          outerRadius="100%"
          // Corner radius is the rounded edge of each pie slice
          cornerRadius="50%"
          fill="#8884d8"
          // padding angle is the gap between each pie slice
          paddingAngle={5}
          dataKey="value"
          isAnimationActive={true}
        />
        <Legend />
      </PieChart>
    </div>
  );
};

export default Stats;
