import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setCurrentProduct } from "../redux/reducers/currentProduct";

import OrderBtn from "./UI/OrderBtn";

import { Tooltip } from "antd";

const OrderComponent = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleToProduct = () => {
    dispatch(setCurrentProduct(item));
    navigate(`/orders/${item.id}`);
  };

  return (
    <div className="orders__container-item">
      <Tooltip title="Click here" placement="right" arrow>
        <img
          src={item.ProductImage}
          className="orders__container-avatar"
          alt=""
          onClick={handleToProduct}
        />
      </Tooltip>

      <div className="orders__container-description">
        <p
          style={{
            fontSize: 20,
            fontWeight: "bold",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            margin: 0,
          }}
        >
          {item.OrderItems}
        </p>
        <p style={{ color: "grey" }}> {item.CustomerName}</p>
        <span style={{ color: "grey" }}>
          Producing country:
          <span style={{ fontWeight: "bold" }}>{item.Location}</span>
        </span>
        <div
          style={{
            display: "inline-flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p
            style={{
              backgroundColor: item.StatusBg,
              padding: "6px 20px",
              borderRadius: 20,
              fontSize: 12,
              color: "#555",
            }}
          >
            {item.Status}
          </p>
          <span style={{ fontWeight: "bold" }}> ${item.TotalAmount} </span>
        </div>
        <OrderBtn item={item} />
      </div>
    </div>
  );
};

export default OrderComponent;
