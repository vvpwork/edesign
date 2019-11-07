import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  margin: 0 auto;
  width: 234px;
  height: 47px;
  border: 1px solid var(--main-violet);
  border-radius: 35px;
  font: 400 18px "FuturaPT";
  color: white;
`;

const Button = ({ value, click = () => {}, style = {}, type = "button" }) => (
  <StyledButton style={style} onClick={click} type={type}>
    {value}
  </StyledButton>
);

export default Button;
