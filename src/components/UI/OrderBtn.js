import React from "react";
import { useStateContext } from "../../contexts/ContextProvider";
import { useDispatch, useSelector } from "react-redux";
import {
  removeProductFromCart,
  setProductInCart,
} from "../../redux/reducers/productCart";
import { MdOutlineFileDownloadDone } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";

const OrderBtn = ({ item }) => {
  const { productInCart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { currentColor } = useStateContext();

  const isProductInCart = productInCart.some(
    (product) => product.id === item.id,
  );

  const addProductInCart = (event) => {
    event.stopPropagation();
    if (isProductInCart) {
      dispatch(removeProductFromCart(item.id));
    } else {
      dispatch(setProductInCart(item));
    }
  };

  return (
    <button
      style={{
        backgroundColor: currentColor,
        padding: "7px 40px",
        color: "white",
        borderRadius: "15px",
        fontSize: "15px",
      }}
      onClick={addProductInCart}
      className="orderBtn"
    >
      {isProductInCart ? (
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
          }}
        >
          Remove
          <MdOutlineFileDownloadDone
            style={{ color: "#09f309", fontSize: "17px", marginLeft: "10px" }}
          />
        </span>
      ) : (
        <span style={{ display: "inline-flex", alignItems: "center" }}>
          <AiOutlinePlus /> Add to cart
        </span>
      )}
    </button>
  );
};

export default OrderBtn;
