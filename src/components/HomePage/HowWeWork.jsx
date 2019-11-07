import React, { Component } from "react";
import styled from "styled-components";

import WithSection from "../withSection";
import One from "../../assets/img/HowWeWork-1.svg";
import Two from "../../assets/img/HowWeWork-2.svg";
import Three from "../../assets/img/HowWeWork-3.svg";
import For from "../../assets/img/HowWeWork-4.svg";

const WrapperSection = styled.div`
  padding: 0 30px;
  position: relative;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-top: 11.2vh;
`;
const StyledTitle = styled.h2`
  font: 400 36px "FuturaPT";
  width: 255px;
  color: white;
  margin-bottom: 10.8vh;
  & span {
    color: var(--main-neon-green);
  }
  @media (min-width: 1000px) {
    position: absolute;
    right: 3%;
    bottom: 10%;
    transform: rotate(90deg);
    &::before {
      content: "";
      position: absolute;
      display: block;
      width: 117px;
      height: 1px;
      background: rgba(255, 255, 255, 0.4);
      left: -49%;
      top: 50%;
    }
  }
`;

const StyledList = styled.ul`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding-left: 20vw;
  @media (min-width: 1000px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    padding-left: 24vw;
  }
`;

const StyledItem = styled.li`
  margin-bottom: 6.5vh;
  position: relative;
  & > h3 {
    color: white;
    font: 400 30px var(--font-made-evolve);
    margin-bottom: 30px;
  }
  & > p {
    font: 400 16px "FuturaPT-lite";
    color: rgba(255, 255, 255, 0.6);
    min-height: 62px;
  }
  &::before {
    content: "";
    display: block;
    position: absolute;
    left: -86px;
    top: 4px;
    width: 63px;
    height: 95px;
    background: url(${One}) no-repeat center;
    background-size: contain;
    color: var(--main-neon-green);
    font: 400 120px "FuturaPT";
  }
  &:nth-child(2)::before {
    background: url(${Two}) no-repeat center;
  }
  &:nth-child(3)::before {
    background: url(${Three}) no-repeat center;
  }
  &:nth-child(4)::before {
    background: url(${For}) no-repeat center;
  }
  @media (min-width: 1000px) {
    width: 30%;
    margin-right: 10%;
    & p {
      width: 294px;
    }
  }
`;

class HowWeWork extends Component {
  render() {
    return (
      <WrapperSection>
        <StyledTitle>
          Work <span> process</span>
        </StyledTitle>
        <StyledList>
          <StyledItem>
            <h3>Request</h3>
            <p>
              Обжудение проекта и постановка задач. Изучение вашего продукта и
              анализ рынка конкурентов
            </p>
          </StyledItem>
          <StyledItem>
            <h3>Prototype</h3>
            <p>Генерация идей, проработка стилей. Разработка первых макетов</p>
          </StyledItem>
          <StyledItem>
            <h3>Design</h3>
            <p>Cоздание</p>
          </StyledItem>
          <StyledItem>
            <h3>Finish</h3>
            <p>Получение уникального дизайна дял вашего бизнеса</p>
          </StyledItem>
        </StyledList>
      </WrapperSection>
    );
  }
}

export default WithSection(HowWeWork)({ heigth: true });
