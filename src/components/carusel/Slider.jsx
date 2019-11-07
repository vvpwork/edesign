import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import prev from "../../assets/img/slick-prev.svg";
import next from "../../assets/img/slick-next.svg";

import { Item } from "../carusel/Caruseltem";

const StyledContainer = styled.div`
  max-width: 100%;
  position: relative;
  height: auto;
  & .slick-slider > button {
    display: none !important;
  }
  & .slick-current div {
    & a > p {
      color: white;
    }
  }
  @media (max-width: 421px) {
    /* display: none;  */
  }
`;
const ButtonContainer = styled.div`
  display: none;
  @media (min-width: 480px) {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 200px;
    height: auto;
    top: -164px;
    right: 20%;
    & button {
      position: relative;
      color: rgba(255, 255, 255, 0.6);
      &::before {
        content: "";
        display: block;
        position: absolute;
        width: 60px;
        height: 10px;
        top: 23%;
        background-size: contain;
      }
    }
    & button:nth-of-type(2) {
      &::before {
        left: 31px;
        background: url(${next}) center no-repeat;
      }
    }
    & button:nth-of-type(1) {
      margin-right: 20px;
      &::before {
        right: 31px;
        background: url(${prev}) center no-repeat;
      }
    }
  }
`;

class SliderTest extends Component {
  next = () => {
    this.slider.slickNext();
  };

  prev = () => {
    this.slider.slickPrev();
  };

  render() {
    const { settings, sliderList } = this.props;
    return (
      <StyledContainer>
        <Slider ref={c => (this.slider = c)} {...settings}>
          {sliderList.map(el => (
            <Item arr={el} key={el.name} />
          ))}
        </Slider>
        <ButtonContainer>
          <button onClick={this.next}>prev</button>
          <button onClick={this.prev}>next</button>
        </ButtonContainer>
      </StyledContainer>
    );
  }
}

export default SliderTest;
