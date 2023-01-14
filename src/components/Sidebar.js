import React, { useContext, useRef } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

import { SidebarContext } from "../contexts/SidebarContext";
import BurgerBtn from "./UI/BurgerBtn";
import { SidebarMenu } from "./SidebarMenu";
import useOnClickOutside from "../hooks/useOnClickOutsite";
import { Cart, Chat, Notification, UserProfile } from "../components";
import avatar from "./../images/avatar3.png";
import { useStateContext } from "../contexts/ContextProvider";

import { RiMessengerLine } from "react-icons/ri";
import { IoIosLogIn, IoMdExit, IoMdNotificationsOutline } from "react-icons/io";
import {
  MdKeyboardArrowDown,
  MdOutlineHowToReg,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { RiReactjsFill } from "react-icons/ri";
import { BsCart2 } from "react-icons/bs";

import Tooltip from "@mui/material/Tooltip";

const Navbar = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;
  outline: currentcolor none medium;
  max-width: 100%;
  align-items: center;
  padding: 6px 40px;
`;

const Sidebar = () => {
  const node = useRef();
  const { isOpenSidebar, toggleMenuMode } = useContext(SidebarContext);
  const { isClicked, handleClick, currentColor, isAuth, setAuth } =
    useStateContext();
  const { productInCart } = useSelector((state) => state.cart);
  const navigate = useNavigate();

  useOnClickOutside(node, () => {
    // Only if menu is open
    if (isOpenSidebar) {
      toggleMenuMode();
    }
  });

  const goHomePage = () => {
    navigate("/", { replace: true });
  };

  const handleLogout = () => {
    setAuth(false);
    navigate("/login");
  };

  return (
    <>
      <Navbar ref={node}>
        <BurgerBtn />

        {isAuth ? (
          <div className="sidebar">
            <div
              onClick={goHomePage}
              className="header-logo"
              style={{ color: currentColor }}
            >
              <RiReactjsFill />
            </div>
            <div className="sidebar__left">
              <Tooltip title="Cart" placement="bottom" arrow>
                <div
                  className="sidebar__left-cart"
                  onClick={() => handleClick("cart")}
                  style={{ color: currentColor }}
                >
                  <BsCart2 style={{ position: "relative" }} />

                  {productInCart.length > 0 ? (
                    <div className="sidebar__left-cart__lenght">
                      {productInCart.length}
                    </div>
                  ) : null}
                </div>
              </Tooltip>
              <Tooltip title="Messages" placement="bottom" arrow>
                <div
                  className="sidebar__left-messages"
                  onClick={() => handleClick("chat")}
                  style={{ color: currentColor }}
                >
                  <RiMessengerLine />
                </div>
              </Tooltip>
              <Tooltip title="Notifications" placement="bottom" arrow>
                <div
                  className="sidebar__left-notifications"
                  onClick={() => handleClick("notification")}
                  style={{ color: currentColor }}
                >
                  <div className="sidebar__left-notifications__point"></div>
                  <IoMdNotificationsOutline />
                </div>
              </Tooltip>
              <div
                className="sidebar__left-userProfile"
                onClick={() => handleClick("userProfile")}
              >
                <img
                  src={avatar}
                  alt={avatar}
                  className="sidebar__left-avatar"
                />
                <span className="sidebar__left-name">John</span>

                {isClicked.userProfile ? (
                  <MdKeyboardArrowDown className="sidebar__left-arrowDown" />
                ) : (
                  <MdOutlineKeyboardArrowUp className="sidebar__left-arrowDown" />
                )}
              </div>
              <div className="sidebar__left-exit">
                <button
                  type="button"
                  className="sidebar__left-exit__btn"
                  onClick={handleLogout}
                >
                  <IoMdExit />
                </button>
              </div>
            </div>

            {/* Navigation header */}
            {isClicked.cart && <Cart />}
            {isClicked.chat && <Chat />}
            {isClicked.notification && <Notification />}
            {isClicked.userProfile && <UserProfile />}
          </div>
        ) : (
          <div className="sidebar__auth">
            <NavLink
              to="/login"
              style={{
                display: "flex",
                alignItems: "center",
                color: currentColor,
              }}
            >
              <IoIosLogIn className="sidebar__auth-log__icon" />{" "}
              <span style={{ fontSize: 15 }}>Login</span>
            </NavLink>
            <NavLink
              to="/register"
              style={{
                display: "flex",
                alignItems: "center",
                color: currentColor,
              }}
            >
              <MdOutlineHowToReg className="sidebar__auth-reg__icon" />
              <span style={{ fontSize: 15 }}>Register</span>
            </NavLink>
          </div>
        )}
      </Navbar>
      <SidebarMenu />
    </>
  );
};

export default Sidebar;
