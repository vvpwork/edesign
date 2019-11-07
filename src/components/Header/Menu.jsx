import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import menuList from "../../config/menuList";

// style

const StyledDiv = styled.div`
  display: flex;
  z-index: 100;
  justify-content: flex-end;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  transform: ${({ mobile }) => (mobile ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.4s linear;

  @media (min-width: 480px) {
    position: relative;
    transform: translateX(0);
    width: 56%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.18);
    height: auto;
    background: none;
    margin-bottom: 3vh;
  }
`;
const StyledMenuWrapper = styled.div`
  padding: 40px 0 0 13vw;
  width: 60%;
  height: 100%;
  box-shadow: 2.6px -18.8px 76.4px 15.6px rgba(11, 11, 11, 0.79);
  background-color: #1c1c1c;
  @media (min-width: 480px) {
    box-shadow: none;
    background: none;
    padding: 0;
    width: 100%;
  }
`;

const StyledTitle = styled.h2`
  display: inline-block;
  width: 51px;
  margin-bottom: 85px;
  margin-right: 50%;
  font-family: "FuturaPT";
  font-size: 18px;
  font-weight: 900;
  text-transform: uppercase;
  text-align: center;
  color: #ffffff;
  @media (min-width: 480px) {
    display: none;
  }
`;

const StyledMenuList = styled.ul`
  @media (min-width: 480px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 98%;
    margin: 0 auto;
  }
`;
const StyledLink = styled.div`
  position: relative;
  font: 400 24px "FuturaPT-lite";
  text-align: center;
  line-height: 48px;
  width: 62px;
  & > a {
    position: relative;
    color: #fff;
    text-decoration: none;
    transition: font 0.2s linear;
    &::after {
      content: "";
      position: absolute;
      display: block;

      width: 0;
      height: 1px;
      background: ${({ color }) => color};
      left: 0;
      bottom: 0;
      transition: all 0.2s linear;
    }
    @media (min-width: 480px) {
      font-size: 18px;
      &::after {
        position: absolute;
        width: 190%;
        bottom: -14px;
        left: -45%;
        background: ${({ color }) => (color ? color : "var(--main-violet)")};
        transform: scaleX(0);
      }

      &:hover {
        color: ${({ color }) => (color ? color : "var(--main-violet)")};
        transition: all 0.3s linear;
        &::after {
          transform: scaleX(1);
          transition: all 0.4s linear;
        }
      }
    }
  }
`;

const StyledCloseButton = styled.button`
  position: relative;
  display: inline-block;
  width: 24px;
  height: 24px;
  &::before,
  ::after {
    content: "";
    display: inline-block;
    position: absolute;
    width: 100%;
    height: 2px;
    background: #fff;
  }
  &::before {
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
  }

  @media (min-width: 421px) {
    display: none;
  }
`;

const Menu = ({ mobile, click, color }) => (
  <StyledDiv
    mobile={mobile}
    onClick={ev => (ev.target === ev.currentTarget ? click() : null)}
  >
    <StyledMenuWrapper>
      <StyledTitle>Menu</StyledTitle>
      <StyledCloseButton onClick={click} />
      <StyledMenuList>
        {menuList.map(el => (
          <StyledLink
            key={el.name}
            onClick={() => setTimeout(() => click(), 300)}
            color={el.color}
          >
            <NavLink
              exact
              to={el.to}
              activeClassName="menu_active"
              activeStyle={{ color: `${el.color}` }}
            >
              {el.name}
            </NavLink>
          </StyledLink>
        ))}
      </StyledMenuList>
    </StyledMenuWrapper>
  </StyledDiv>
);

export default Menu;
