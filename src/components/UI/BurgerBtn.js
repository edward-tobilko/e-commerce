import React, { useContext } from "react";
import styled from "styled-components";
import { useStateContext } from "../../contexts/ContextProvider";
import { SidebarContext } from "../../contexts/SidebarContext";

// styles
const MenuButton = styled.button`
  display: block;
  transform-origin: 16px 11px;
  float: left;
  margin-right: 29px;
  outline: 0;
  border: 0;
  padding: 12px;
  background: none;

  span {
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  :focus {
    outline: 0;
  }

  :hover {
    span:nth-of-type(1) {
      width: 28px;
    }

    span:nth-of-type(2) {
      width: 43px;
    }

    span:nth-of-type(3) {
      width: 20px;
    }
  }

  &.active {
    span:nth-of-type(1) {
      transform: rotate(45deg) translate(10px, 10px);
      width: 40px;
    }

    span:nth-of-type(2) {
      opacity: 0;
      pointer-events: none;
    }

    span:nth-of-type(3) {
      transform: rotate(-45deg) translate(3px, -3px);
      width: 40px;
    }
  }
`;
const Span = styled.span`
  display: block;
  width: 35px;
  height: 2px;
  margin-bottom: 7px;
`;

const BurgerBtn = () => {
  const { isOpenSidebar, toggleMenuMode } = useContext(SidebarContext);
  const { currentColor } = useStateContext();

  const clickHandler = () => {
    toggleMenuMode();
  };
  return (
    <MenuButton
      onClick={clickHandler}
      aria-label="Open menu"
      className={isOpenSidebar ? "active" : ""}
    >
      <Span style={{ backgroundColor: currentColor }} />
      <Span style={{ backgroundColor: currentColor }} />
      <Span style={{ backgroundColor: currentColor }} />
    </MenuButton>
  );
};

export default BurgerBtn;
