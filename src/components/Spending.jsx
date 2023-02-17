import React from "react";

const Spending = () => {
  return (
    <div className="spending container rounded">
      <h2>Spending - Last 7 days</h2>
      <div className="spending__graphs"></div>
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
