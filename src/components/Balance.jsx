import React from "react";
import logo from "../assets/logo.svg";

const Balance = () => {
  return (
    <div className="balance container rounded">
      <div className="balance__items">
        <h2>My balance</h2>
        <p>$921.48</p>
      </div>
      <img className="balance__img" src={logo} alt="" />
    </div>
  );
};

export default Balance;
