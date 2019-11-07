import React from "react";
import styled, { keyframes } from "styled-components";

import scrollImg from "../assets/img/scroll.png";

const buttonAnimate = keyframes`
  
    0%{
       transform: translateY(30%) 
    }
    50%{
        transform: translateY(0) 

    }
    100%{
        transform: translateY(30%) 

    }
`;

const StyledButton = styled.button`
  display: block;
  margin: 0 auto;
  width: 40px;
  height: 40px;
  background: url(${scrollImg}) no-repeat center;
  background-size: contain;
  animation: ${buttonAnimate} 1.2s linear infinite;
  &:hover {
    cursor: pointer;
  }
`;

const nextButton = ({ click }) => <StyledButton onClick={click} />;

export default nextButton;
