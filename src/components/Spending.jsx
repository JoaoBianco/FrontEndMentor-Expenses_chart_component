import React from "react";
import Graph from "./Graph";

import data from "../data/data.json";

const Spending = () => {
  function calcTotal(values) {
    let totalValue = 0;
    values.map((e) => (totalValue += e.amount));
    return totalValue;
  }

  return (
    <div className="spending container rounded">
      <h2>Spending - Last 7 days</h2>
      <div className="spending__graphs">
        {data.map((spending) => (
          <Graph
            key={spending.amount}
            data={spending}
            totalValue={calcTotal(data)}
          />
        ))}
      </div>
      <hr />
      <div className="spending__total">
        <div className="spending__value">
          <h2>Total this month</h2>
          <p>$</p>
        </div>
        <div className="spending__last">
          <p>+2.4%</p>
          <p>from last month</p>
        </div>
      </div>
    </div>
  );
};

export default Spending;
