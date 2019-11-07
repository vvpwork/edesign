import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  @media (min-width: 480px) {
    /* display: none; */
  }
  display: flex;
  align-items: center;
  position: relative;
  width: 41px;
  height: 29px;
  &::before,
  ::after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 6px;
    border-radius: 5px;
    background: #fff;
  }
  &::before {
    top: 0;
  }
  &::after {
    bottom: 0;
  }
  & > span {
    display: block;
    width: 100%;
    height: 6px;
    background: #fff;
    border-radius: 5px;
  }
`;

const BurgerButton = ({ click }) => (
  <StyledButton onClick={click}>
    <span />
  </StyledButton>
);

export default BurgerButton;
