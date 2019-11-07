import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { bounceInRight } from "react-animations";

import withSection from "../withSection";
import ActionButton from "../ActionButton";

import { ReactComponent as Graphic } from "../../assets/img/Graphic_design.svg";
import { ReactComponent as Web } from "../../assets/img/web_design.svg";
// styled
const bounceAnimation = keyframes`${bounceInRight}`;

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-top: 70px;
  @media (min-width: 421px) {
    background-size: contain;
  }
`;

const StyledText = styled.p`
  text-align: center;
  color: white;
  animation: ${bounceAnimation} 6s;
  font: 400 18px "FuturaPT-Lite";
  margin-bottom: 80px;
`;

const StyledServicesWrapper = styled.div`
  transition: 0.2s ease-in;
  margin-bottom: 96px;
  & > button {
    font-size: 16px;
  }
  &:hover {
    & svg {
      fill: white;
    }
    & > button {
      background: var(--button-hover-color);
      border-color: var(--button-hover-color);
    }
  }
`;

const StyledSVG = styled.div`
  width: 200px;
  margin: 0 auto;
  margin-bottom: 20px;
  & svg {
    display: block;
    margin: 0 auto;
    height: auto;
    stroke: rgba(255, 255, 255, 0.4);
    stroke-opacity: 1px;
    fill: none;
  }
`;

const StyledServicesFlexWrapper = styled.div`
  & > :nth-of-type(1) {
    &:hover button {
      background: var(--main-neon-green);
    }
  }
  & > div:nth-last-of-type(2) button {
    border-color: var(--main-neon-green);
  }
  @media (min-width: 600px) {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    width: 100%;
    & > :nth-of-type(1) {
      margin-right: 145px;
    }
  }
`;

class DesignSection extends Component {
  hendleClickButton = url => {};

  render() {
    return (
      <StyledWrapper heigth={true}>
        <StyledText>выберете какой дизайн вам подходит</StyledText>
        <StyledServicesFlexWrapper>
          <StyledServicesWrapper>
            <StyledSVG>
              <Graphic />
            </StyledSVG>
            <ActionButton
              click={ev => (window.location = "/graphic")}
              value="Подробнее..."
              style={{
                marginBottom: "60px"
              }}
            />
          </StyledServicesWrapper>
          <StyledServicesWrapper>
            <StyledSVG>
              <Web />
            </StyledSVG>
            <ActionButton
              click={ev => (window.location = "/webdesign")}
              value="Подробнее..."
              style={{
                marginBottom: "60px"
              }}
            />
          </StyledServicesWrapper>
        </StyledServicesFlexWrapper>
      </StyledWrapper>
    );
  }
}

export default withSection(DesignSection)({ heigth: true, color: "#242424" });
