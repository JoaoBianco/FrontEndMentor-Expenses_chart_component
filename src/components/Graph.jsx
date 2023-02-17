import React from "react";

const Graph = ({ data, totalValue, biggestValue }) => {
  console.log(biggestValue);
  function roundValue(value) {
    return Math.ceil((Math.ceil(value) / totalValue) * 200);
  }

  return (
    <div className="graph">
      <div
        style={{ height: `${roundValue(data.amount)}%` }}
        className={`graph--amount ${
          biggestValue === data.amount ? "graph--accent" : ""
        } `}
      >
        <div className="tooltipGraph">${data.amount}</div>
      </div>
      <div className="color-500">{data.day}</div>
    </div>
  );
};

export default Graph;
