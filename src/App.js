import React, { useEffect } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./app.scss";

import Header from "./pages/header/Header";
import {
  Orders,
  Employees,
  Customers,
  Kanban,
  Editor,
  Calendar,
  ColorPicker,
  ECommerce,
  Line,
  Area,
  Bar,
  Pie,
  Financial,
  ColorMapping,
  Pyramid,
  Order,
  Messages,
  MyTasks,
  MyProfile,
  Product,
} from "./pages";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import SettingComponent from "./components/SettingComponent";
import { useStateContext } from "./contexts/ContextProvider";
import ErrorPage from "./pages/ErrorPage";

import { CircularProgress } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";

import { FiSettings } from "react-icons/fi";

const App = () => {
  const {
    openSettings,
    setOpenSettings,
    currentColor,
    currentMode,
    setAuth,
    isAuth,
    setIsLoading,
    isLoading,
  } = useStateContext();

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setAuth(true);
    }
    setIsLoading(false);
  }, [setAuth, setIsLoading]);

  if (isLoading) {
    return (
      <div
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.4)",
        }}
      >
        <CircularProgress
          disableShrink
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
          }}
        />
      </div>
    );
  }

  return (
    <>
      <Router>
        <div className={currentMode === "Dark" ? "dark" : ""}>
          <div className="body">
            <div className="body__pages">
              <Header />

              {isAuth ? (
                <div className="body__routes">
                  <Routes>
                    {/* Dashboard */}
                    <Route path="/" element={<ECommerce />} />
                    <Route path="/ecommerce" element={<ECommerce />} />

                    {/* Pages */}
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/orders/:id" element={<Product />} />
                    <Route path="/employees" element={<Employees />} />
                    <Route path="/customers" element={<Customers />} />

                    {/* Apps */}
                    <Route path="/calendar" element={<Calendar />} />
                    <Route path="/kanban" element={<Kanban />} />
                    <Route path="/editor" element={<Editor />} />
                    <Route path="/color-picker" element={<ColorPicker />} />

                    {/* Charts */}
                    <Route path="/line" element={<Line />} />
                    <Route path="/area" element={<Area />} />
                    <Route path="/bar" element={<Bar />} />
                    <Route path="/pie" element={<Pie />} />
                    <Route path="/financial" element={<Financial />} />
                    <Route path="/color-mapping" element={<ColorMapping />} />
                    <Route path="/pyramid" element={<Pyramid />} />

                    {/* Order page */}
                    <Route path="/order" element={<Order />} />

                    {/* Messages */}
                    <Route path="/messages" element={<Messages />} />

                    {/* MyTasks */}
                    <Route path="/tasks" element={<MyTasks />} />

                    {/* MyProfile */}
                    <Route path="/my-profile" element={<MyProfile />} />

                    {/* ErrorPage */}
                    <Route path="*" element={<ErrorPage />} />

                    {/* Redirect */}
                    <Route path="*" element={<Navigate to="/" replace />} />
                  </Routes>

                  {/* Setting component */}
                  <Tooltip title="Settings" placement="left" arrow>
                    <button
                      className="body__btn"
                      type="button"
                      onClick={() => setOpenSettings(true)}
                      style={{ backgroundColor: currentColor }}
                    >
                      <FiSettings className="body__btn-icon" />
                    </button>
                  </Tooltip>
                </div>
              ) : (
                <Routes>
                  {/* Auth */}
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                </Routes>
              )}
            </div>

            {openSettings && (
              <div className="body__settings">
                <SettingComponent />
              </div>
            )}
          </div>
        </div>
      </Router>
    </>
  );
};

export default App;
