import { useRef, useState } from "react";

import { BsBoxSeam } from "react-icons/bs";
import { FiBarChart } from "react-icons/fi";
import { HiOutlineRefresh } from "react-icons/hi";
import {
  MdOutlineFileDownloadDone,
  MdOutlineSupervisorAccount,
} from "react-icons/md";

import { SparkLine, StackedComponent } from "../components";
import { useStateContext } from "../contexts/ContextProvider";
import video from "./../images/eCommerce.mp4";

import { Fade, Button, LinearProgress } from "@mui/material";
import "./pages.scss";

// data
const earningData = [
  {
    icon: <MdOutlineSupervisorAccount />,
    amount: "39,354",
    percentage: "-4%",
    title: "Customers",
    iconColor: "#03C9D7",
    iconBg: "#E5FAFB",
    pcColor: "red",
  },
  {
    icon: <BsBoxSeam />,
    amount: "4,396",
    percentage: "+23%",
    title: "Products",
    iconColor: "rgb(255, 244, 229)",
    iconBg: "rgb(254, 201, 15)",
    pcColor: "green",
  },
  {
    icon: <FiBarChart />,
    amount: "423,39",
    percentage: "+38%",
    title: "Sales",
    iconColor: "rgb(228, 106, 118)",
    iconBg: "rgb(255, 244, 229)",
    pcColor: "green",
  },
  {
    icon: <HiOutlineRefresh />,
    amount: "39,354",
    percentage: "-12%",
    title: "Refunds",
    iconColor: "rgb(0, 194, 146)",
    iconBg: "rgb(235, 250, 242)",
    pcColor: "red",
  },
];

const ECommerce = () => {
  const [progress, setProgress] = useState(0);

  const timerRef = useRef();

  const { currentColor } = useStateContext();

  const handleClickQuery = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    if (progress !== 0) {
      setProgress(0);
      return;
    }

    setProgress("progress");
    timerRef.current = window.setTimeout(() => {
      setProgress("success");
    }, 2000);
  };

  return (
    <>
      <div className="ecommerce">
        <div className="ecommerce-video">
          <video autoPlay loop muted>
            <source src={video} type="video/mp4" />
          </video>
        </div>

        <div className="ecommerce-info">
          <h5 className="ecommerce-title">Earnings</h5>
          <h1 className="ecommerce-earnings">$63,448,78</h1>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Button
              onClick={handleClickQuery}
              variant="contained"
              style={{ background: currentColor }}
            >
              {progress !== 0 ? "RESET" : "Download"}
            </Button>
            {progress === "success" ? (
              <div style={{ textAlign: "center" }}>
                <MdOutlineFileDownloadDone
                  style={{
                    color: "#09f309",
                    fontSize: "30px",
                  }}
                />
              </div>
            ) : (
              <Fade
                in={progress === "progress"}
                style={{
                  transitionDelay: progress === "progress" ? "400ms" : "0ms",
                }}
              >
                <LinearProgress />
              </Fade>
            )}
          </div>
        </div>
      </div>

      <div className="ecommerce__container">
        {earningData.map((item) => (
          <div key={item.title} className="ecommerce__container-item">
            <button
              className="ecommerce__container-btn"
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
            >
              {item.icon}
            </button>
            <p>
              <span className="ecommerce__container-amount">
                {" "}
                {item.amount}{" "}
              </span>
              <span
                className={`ecommerce__container-percentage`}
                style={{ color: item.pcColor }}
              >
                {" "}
                {item.percentage}{" "}
              </span>
            </p>
            <p className="ecommerce__container-title"> {item.title} </p>
          </div>
        ))}
      </div>

      <div className="revenue">
        <div className="container">
          <div className="revenue__content">
            <div className="revenue__content-left">
              <h1 className="ecommerce-earnings">
                $93,438<span className="revenue__content-percentage">23%</span>
              </h1>

              <h5 className="ecommerce-title">Earnings</h5>
              <p className="ecommerce-earnings">$48,569</p>
              <h5 className="ecommerce-title">Expense</h5>

              {/* The first table for the revenue component */}
              <SparkLine />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Button
                  onClick={handleClickQuery}
                  variant="contained"
                  style={{ background: currentColor }}
                >
                  {progress !== 0 ? "RESET" : "Download Report"}
                </Button>
                {progress === "success" ? (
                  <div style={{ textAlign: "center" }}>
                    <MdOutlineFileDownloadDone
                      style={{
                        color: "#09f309",
                        fontSize: "40px",
                      }}
                    />
                  </div>
                ) : (
                  <Fade
                    in={progress === "progress"}
                    style={{
                      transitionDelay:
                        progress === "progress" ? "400ms" : "0ms",
                    }}
                  >
                    <LinearProgress />
                  </Fade>
                )}
              </div>
            </div>
            <div className="revenue__content-right">
              {/* The second table for the revenue component */}
              <StackedComponent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ECommerce;
