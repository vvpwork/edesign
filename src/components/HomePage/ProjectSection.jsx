import React, { Component } from "react";
import styled from "styled-components";

import { arr } from "../../config/project_carusel";
import SliderProject from "../carusel/Slider";

import withSection from "../withSection";

const StyledWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: auto;
  padding-top: 90px;
  /* padding-left: 12%; */
  & > h2 {
    position: relative;
    color: white;
    margin-left: 40px;
    font: 400 36px var(--main-font-bold);
    margin-bottom: 7vh;
    &::after {
      content: "Наши последние проекты";
      position: absolute;
      display: block;
      bottom: -28px;
      font: 400 18px var(--main-font-light);
      color: rgba(255, 255, 255, 0.6);
    }
  }
  @media (min-width: 480px) {
    & > h2 {
      margin-bottom: 25vh;
      margin-left: 20%;
    }
  }
  @media (min-width: 1000px) {
    margin-bottom: 100px;
  }
`;

class ProjectSection extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerPadding: "0px",
      speed: 700,
      initialSlide: 1,
      variableWidth: true,
      adaptiveHeight: true,
      useTransform: true,
      responsive: [
        {
          breakpoint: 480,
          settings: {
            speed: 400,
            // infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <StyledWrapper className="homeSlider">
        <h2>Projects</h2>
        <SliderProject settings={settings} sliderList={arr} />
      </StyledWrapper>
    );
  }
}

export default withSection(ProjectSection)({ heigth: true, color: "#2424242" });
