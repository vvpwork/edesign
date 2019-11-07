import React, { Component } from "react";
import styled from "styled-components";

import WithSection from "../withSection";
import bgtext from "../../assets/img/about_us_text.svg";
import bg_wrapper from "../../assets/img/about_us_bg.svg";

const StyledTitle = styled.h2`
  font: 400 36px "FuturaPT";
  text-transform: uppercase;
  margin-bottom: 18.7vh;
`;
const StyledWrapper = styled.div`
  padding: 0 30px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  color: white;
  padding-top: 12vh;
  background-size: 97px 97px;
  background-position: 20vw 4vh;
  @media (min-width: 1000px) {
    padding: 12vh 20vw 0 20vw;
    background: url(${bg_wrapper}) no-repeat top;
    background-size: auto;
    background-position-x: -1px;
    margin-bottom: 100px;
  }
`;

const StyledBeforeText = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  margin-bottom: 15.2vh;
  font: 400 18px var(--main-font-light);

  & > p {
    line-height: 23px;
    text-align: right;
    margin-bottom: 34px;
  }
  & p > span {
    color: var(--main-violet);
    font-weight: bold;
  }
  & p:nth-of-type(2) > span {
    font-family: var(--main-font-medium);
    color: white;
  }
  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 70px;
    height: 70px;
    top: -65px;
    right: 0;
    background: url(${bgtext}) no-repeat center;
    background-size: contain;
  }
  @media (min-width: 1000px) {
    width: 50%;
    margin-bottom: 0;
  }
`;

const StyledSpecialization = styled.div`
  & h3 {
    font: 400 30px var(--font-made-evolve);
    color: white;
    margin-bottom: 45px;
    & span {
      color: var(--main-violet);
    }
    & span:last-child {
      color: var(--main-neon-green);
    }
  }

  & p {
    position: relative;
    box-sizing: border-box;
    font: 400 18px var(--main-font-light);
    color: white;
    max-width: 270px;
    margin-bottom: 42px;
    padding-left: 54px;
  }

  & p:not(:nth-of-type(2)):before {
    content: "ui/ux";
    position: absolute;
    display: block;
    text-transform: uppercase;
    color: var(--main-violet);
    font: 400 30px var(--font-made-evolve);
    top: 82px;
    transform: rotate(-90deg);
    left: -26px;
  }
  & p:last-child:before {
    content: "graphic";
    color: var(--main-neon-green);
    left: -50px;
    top: 34px;
  }
  & p:not(:nth-of-type(2)):after {
    content: "";
    position: absolute;
    display: block;
    width: 1px;
    height: 52px;
    top: 2px;
    left: 12px;
    background: rgba(255, 255, 255, 0.4);
  }
  & p:last-child:after {
    top: -211px;
    height: 188px;
    @media (min-width: 1000px) {
      top: -145px;
      height: 123px;
    }
  }
  @media (min-width: 1000px) {
    & p > br {
      display: none;
    }
    & p {
      max-width: 430px;
      margin-bottom: 65px;
    }
  }
`;
const FlexWrapper = styled.div`
  @media (min-width: 1000px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row-reverse;
  }
`;

class AboutUs extends Component {
  render() {
    return (
      <StyledWrapper>
        <StyledTitle>About us</StyledTitle>
        <FlexWrapper>
          <StyledBeforeText>
            <p>
              Дизайн - это не просто <br />
              «красивая картинка»,
              <br /> это мощный и полезный
              <br /> инструмент для развития бизнеса
              <br /> как на его старте, так и для более
              <br /> опытных компаний.
            </p>
            <p>
              <span>И мы убеждены</span>, что он напрямую <br />
              определяет его успешность.
            </p>
            <p>
              {" "}
              <span> Правильный дизайн</span> это ваша <br />
              узнаваемость, он просто
              <br /> <span>работает сам на себя.</span>
            </p>
          </StyledBeforeText>
          <StyledSpecialization>
            <h3>
              Sp<span>e</span>cializati<span>on</span>
            </h3>
            <p>
              Разработка современных интуитивно понятных сайтов <br />с удобным
              интерфейсом <br />и адаптивных под любые устройства. <br />{" "}
              Разработка SPA & SSR. Progressive Web App.{" "}
            </p>
            <p>
              Создание логотипа <br />и фирменного стиля, который <br />{" "}
              подчеркнёт индивидуальность ваших услуг и увеличит уровень
              <br /> доверия клиентов/партнёров.
            </p>
            <p>
              Оформлекние социальных <br /> сетей (Instagram, Facebook) - <br />{" "}
              как ещё одна возможность привлечь потенциальных покупателей.
            </p>
          </StyledSpecialization>
        </FlexWrapper>
      </StyledWrapper>
    );
  }
}

export default WithSection(AboutUs)({ heigth: true, color: "#242424" });
