import React from "react";

const OrdersHeader = ({ title }) => {
  return (
    <div className="orders__header">
      <h1 className="orders-title">{title}</h1>
    </div>
  );
};

export default OrdersHeader;
