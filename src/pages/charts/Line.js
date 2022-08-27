import React from "react";
import { LineChart } from "../../components";
import OrdersHeader from "../../components/OrdersHeader";

const Line = () => {
  return (
    <div className="apps__container">
      <OrdersHeader category="Line chart" title="Line" />
      <div className="line">
        <LineChart />
      </div>
    </div>
  );
};

export default Line;
