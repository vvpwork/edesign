import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

const AnimetFunc = opacity => {
  const Animate = keyframes`
        from{
            opacity: ${opacity}
        
        }
        50%{

            opacity: 0;
        }  
        to{
            opacity: ${opacity}
        }

    `;
  return Animate;
};

const StyledWrapper = styled.div`
  width: 50px;
  height: auto;
  margin: 0 auto;
  text-align: center;
  & span {
    margin: 0 auto;
    display: block;
    width: 10px;
    height: 10px;
    margin-bottom: 5px;
    border-radius: 50%;
    background: #6f55ec;
    &:nth-of-type(1) {
      animation: ${AnimetFunc(1)} 1s linear infinite;
    }
    &:nth-of-type(2) {
      animation: ${AnimetFunc(0.6)} 1.5s linear infinite;
    }
    &:nth-of-type(3) {
      animation: ${AnimetFunc(0.3)} 2s linear infinite;
    }
    &:nth-of-type(4) {
      animation: ${AnimetFunc(0.1)} 2.5s linear infinite;
    }
  }
`;

class AnimateCircle extends Component {
  render() {
    return (
      <StyledWrapper>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </StyledWrapper>
    );
  }
}

export default AnimateCircle;
