import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import OrderBtn from "../components/UI/OrderBtn";

import { TiArrowBackOutline } from "react-icons/ti";

const Product = () => {
  const product = useSelector((state) => state.currentProduct.currentProduct);

  const navigate = useNavigate();

  return (
    <div className="apps__container">
      <button onClick={() => navigate(-1)} className="goBack__btn">
        <TiArrowBackOutline />
      </button>

      <div className="product">
        <div className="product__left">
          <img
            src={product.ProductImage}
            alt=""
            className="product__left-img"
          />
          <div className="product__left-about">
            <p className="product__left-about-customerName">
              {" "}
              {product.CustomerName}{" "}
            </p>
            <p className="product__left-about-productName">
              {" "}
              {product.OrderItems}{" "}
            </p>
            <p className="product__left-about-rate"> {product.rate} </p>
          </div>
        </div>

        <div className="product__right">
          <p className="product__right-desc"> {product.descriptions} </p>
          <OrderBtn item={product} />
        </div>
      </div>
    </div>
  );
};

export default Product;
