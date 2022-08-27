import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { SidebarContext } from "../contexts/SidebarContext";
import { SiTrustedshops } from "react-icons/si";
import "./components-style.scss";
import { Link } from "react-router-dom";
import {
  AiOutlineCalendar,
  AiOutlineShoppingCart,
  AiOutlineAreaChart,
  AiOutlineBarChart,
  AiOutlineStock,
} from "react-icons/ai";
import { BiColorFill } from "react-icons/bi";
import { IoMdContacts } from "react-icons/io";
import { RiContactsLine, RiStockLine } from "react-icons/ri";
import { GiLouvrePyramid } from "react-icons/gi";
import { FiShoppingBag, FiEdit, FiPieChart } from "react-icons/fi";
import { BsKanban, BsBarChart } from "react-icons/bs";

// styles
const SideBar = styled.nav`
  position: fixed;
  top: 80px;
  left: 0px;
  z-index: 1000;

  display: block;
  width: 300px;
  max-width: 100%;
  height: 90vh;
  overflow: auto;
  align-items: stretch;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 8px 16px;
  background: white;

  transform: translateX(-100%);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

  ${(props) =>
    props.open &&
    css`
      transform: translateX(0);
    `}
`;

// data
// FOR "SidebarMenu" COMPONENT
const links = [
  {
    title: "Dashboard",
    links: [
      {
        name: "ecommerce",
        icon: <FiShoppingBag />,
      },
    ],
  },

  {
    title: "Pages",
    links: [
      {
        name: "orders",
        icon: <AiOutlineShoppingCart />,
      },
      {
        name: "employees",
        icon: <IoMdContacts />,
      },
      {
        name: "customers",
        icon: <RiContactsLine />,
      },
    ],
  },
  {
    title: "Apps",
    links: [
      {
        name: "calendar",
        icon: <AiOutlineCalendar />,
      },
      {
        name: "kanban",
        icon: <BsKanban />,
      },
      {
        name: "editor",
        icon: <FiEdit />,
      },
      {
        name: "color-picker",
        icon: <BiColorFill />,
      },
    ],
  },
  {
    title: "Charts",
    links: [
      {
        name: "line",
        icon: <AiOutlineStock />,
      },
      {
        name: "area",
        icon: <AiOutlineAreaChart />,
      },

      {
        name: "bar",
        icon: <AiOutlineBarChart />,
      },
      {
        name: "pie",
        icon: <FiPieChart />,
      },
      {
        name: "financial",
        icon: <RiStockLine />,
      },
      {
        name: "color-mapping",
        icon: <BsBarChart />,
      },
      {
        name: "pyramid",
        icon: <GiLouvrePyramid />,
      },
    ],
  },
];

export const SidebarMenu = ({ children }) => {
  const { isOpenSidebar } = useContext(SidebarContext);

  return <SideBar open={isOpenSidebar}>{children}</SideBar>;
};

SidebarMenu.defaultProps = {
  children: (
    <>
      <div className="sidebar__menu">
        <div className="sidebar__menu-logo">
          <SiTrustedshops /> <span>Shoppy</span>
        </div>
        <div className="sidebar__menu-container">
          {links.map((item) => (
            <div key={item.title}>
              <li className="sidebar__menu-item">{item.title}</li>
              {item.links.map((link) => (
                <Link
                  key={link.name}
                  to={`/${link.name}`}
                  className="sidebar__menu-item__link"
                >
                  {link.icon} <span> {link.name} </span>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  ),
};
