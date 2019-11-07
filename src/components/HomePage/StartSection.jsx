import React, { Component } from "react";
import withSection from "../withSection";
import styled, { keyframes } from "styled-components";
import { bounceInRight } from "react-animations";

import Circle from "../animateCircle";

const marginButtom = (heightHeader, heightBlock) => {
  const heightWindow = window.innerHeight;
  const margin = heightWindow - (heightHeader + heightBlock);
  return margin;
};

// style
const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150px;
  @media (min-width: 1000px) {
    height: 200px;
  }
`;
const StyledWrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  padding-top: 30%;
  height: 100%;
  @media (min-width: 480px) {
    padding-top: 10%;
    height: auto;
    margin-bottom: ${marginButtom(113, 460)}px;
  }
`;
// animation
const bounce = keyframes(bounceInRight);
// const textAnimate = keyframes`
//       0%{
//         opacity: 0;
//         transform: translateY(-100%)

//       }
//       50%{
//         opacity: 0;
//         transform: translateY(-50%)
//       }

//       100%{

//         opacity: 1;
//         transform: translateY(0)
//       }

//     `;
const animate_opacity_view = keyframes`
  0%{
    opacity: 0;

  }
  50%{
    opacity: 0.5;

  }

  100%{
    opacity: 1
  }
`;

const StyledTitle = styled.h1`
  color: var(--main-neon-green);
  text-align: left;
  max-width: 290px;
  margin: 0 auto;
  font: 400 89px var(--font-made-evolve), "sans-serif";
  line-height: 1;
  animation: ${animate_opacity_view} 2.5s linear;
  @media (min-width: 480px) {
    line-height: normal;
    font: 400 54px var(--font-made-evolve), "sans-serif";
    max-width: 100%;
    font-size: 70px;
  }
  @media (min-width: 1000px) {
    font-size: 140px;
  }
`;
const StyledTextAfter = styled.div`
  margin: 0 auto;
  margin-bottom: 158px;
  text-align: center;
  font: 400 50px var(--main-font-bold);
  -webkit-text-stroke: 0.5px rgba(255, 255, 255, 0.4);
  color: rgba(255, 255, 255, 0);
  animation: ${bounce} 4s linear;
  @media (min-width: 1000px) {
    font-size: 78px;
    margin-bottom: 100px;
  }
`;

class StartSection extends Component {
  render() {
    const { view } = this.props;
    return (
      <StyledWrapper>
        <StyledContainer>
          <StyledTitle>Graphic & Web</StyledTitle>
        </StyledContainer>
        <StyledTextAfter view={view}>
          amazing design development
        </StyledTextAfter>
        <Circle />
      </StyledWrapper>
    );
  }
}

export default withSection(StartSection)({ heigth: false });
