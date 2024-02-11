import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { MdOutlineCancel } from "react-icons/md";
import { TiMinusOutline, TiPlusOutline } from "react-icons/ti";

import { useStateContext } from "../contexts/ContextProvider";

import {
  decrease,
  getCartTotal,
  increase,
} from "../redux/reducers/productCart";

const Cart = () => {
  const { setIsClicked, currentColor } = useStateContext();

  const { productInCart, totalAmount } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleClickInOrder = () => {
    navigate("/order");
    setIsClicked(false);
  };

  useEffect(() => {
    dispatch(getCartTotal());
  }, [productInCart]);

  return (
    <div className="cart__background">
      <div className="cart">
        <div className="cart__container">
          <div className="cart__container-header">
            <p className="cart__container-title">Shopping Cart</p>
            <button
              className="cart__container-btn"
              type="button"
              onClick={() => setIsClicked(false)}
            >
              <MdOutlineCancel />
            </button>
          </div>
          {productInCart.length > 0 ? (
            <div className="cart__container-content">
              {productInCart.map((item) => (
                <div className="cart__container-item" key={item.id}>
                  <img
                    src={item.ProductImage}
                    alt=""
                    className="cart__container-image"
                  />
                  <div className="cart__container-description">
                    <h3 className="cart__container-description__title">
                      {item.CustomerName}
                    </h3>
                    <p className="cart__container-description__subtitle">
                      {item.OrderItems}
                    </p>
                    <div className="cart__container-description__cost">
                      <h1 className="cart__container-description__price">
                        ${item.TotalAmount}
                      </h1>
                      <button
                        className="cart__container-description__decrement"
                        onClick={() => dispatch(decrease(item.id))}
                      >
                        <TiMinusOutline />
                      </button>
                      <div className="cart__container-description__sum">
                        {item.amount}
                      </div>
                      <button
                        className="cart__container-description__increment"
                        onClick={() => dispatch(increase(item.id))}
                      >
                        <TiPlusOutline />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div
              style={{
                textAlign: "center",
                fontSize: "22px",
                margin: "30px 0",
                color: "red",
              }}
            >
              Cart is empty
            </div>
          )}
        </div>
        <div className="cart__container-footer">
          <h2 className="cart__container-footer__name">Total:</h2>
          <h2 className="cart__container-footer__total">
            {" "}
            ${Math.ceil(totalAmount)}{" "}
          </h2>
        </div>
        <div style={{ textAlign: "center" }}>
          <button
            className="cart__container-footer__btn"
            style={{ backgroundColor: currentColor }}
            onClick={handleClickInOrder}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
