import React from "react";

const Graph = ({ data, totalValue }) => {
  function roundValue(value) {
    return Math.ceil((Math.ceil(value) / totalValue) * 200);
  }

  return (
    <div className="graph">
      <div
        style={{ height: `${roundValue(data.amount)}%` }}
        className="graph--amount"
      ></div>
      <div className="graph--day">{data.day}</div>
    </div>
  );
};

export default Graph;
