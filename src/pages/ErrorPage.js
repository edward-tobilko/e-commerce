import React from "react";
import { TbArrowBigUpLines } from "react-icons/tb";

const ErrorPage = () => {
  return (
    <div className="error__bg">
      <div className="error">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginLeft: "37px",
          }}
        >
          <TbArrowBigUpLines style={{ color: "red", width: 35, height: 35 }} />
          <span className="error-name">To go to the main page click here!</span>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
