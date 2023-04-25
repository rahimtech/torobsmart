import React from "react";
import { Line } from "react-chartjs-2";
function Linechart({ chartData }) {
  return (
    <div>
      <Line data={chartData} />
    </div>
  );
}
export default Linechart;
