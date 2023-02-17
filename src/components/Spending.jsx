import React, { useEffect, useState } from "react";
import Graph from "./Graph";

import data from "../data/data.json";

const Spending = () => {
  const [biggestValue, setBiggestValue] = useState(0);

  function calcTotal(values) {
    let totalValue = 0;
    values.map((e) => (totalValue += e.amount));
    return totalValue;
  }

  function findBiggest(values) {
    setBiggestValue(values.reduce((a, b) => Math.max(a, b)));
  }

  useEffect(() => {
    let valuesToFindBiggest = [];
    data.map((e) => valuesToFindBiggest.push(e.amount));
    findBiggest(valuesToFindBiggest);
  }, [data]);

  return (
    <div className="spending container rounded">
      <h2>Spending - Last 7 days</h2>
      <div className="spending__graphs">
        {data.map((spending) => (
          <Graph
            key={spending.amount}
            data={spending}
            totalValue={calcTotal(data)}
            biggestValue={biggestValue}
          />
        ))}
      </div>
      <div className="line rounded"></div>
      <div className="spending__total">
        <div className="spending__value">
          <h2 className="color-500">Total this month</h2>
          <p>${calcTotal(data)}</p>
        </div>
        <div className="spending__last">
          <p>+2.4%</p>
          <p className="color-500">from last month</p>
        </div>
      </div>
    </div>
  );
};

export default Spending;
