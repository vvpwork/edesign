import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

import FormFeadback from "../FormFeedback";
import withSection from "../withSection";
import bg_top from "../../assets/img/ux_bg_desktop.svg";
import rightArrow from "../../assets/img/rightArrow.svg";
import { ReactComponent as Text } from "../../assets/img/bg_ux_bottom_.svg";
import { ReactComponent as Logo } from "../../assets/img/logo.svg";

const StyledWrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  min-height: 100vh;
  background: url(${bg_top}) no-repeat 10px 0px;
  background-size: auto;
  & > h2 {
    font: 400 50px var(--main-font-bold);
    color: var(--main-violet);
    margin-top: 160px;
    margin-bottom: 60px;
    margin-left: 12%;
  }
  & > ul {
    margin-bottom: 160px;
  }
`;
const StyledItem = styled.li`
  position: relative;
  box-sizing: border-box;
  list-style: none;
  width: 100%;
  padding-top: 40px;
  padding-bottom: 20px;
  padding-left: 12%;
  font: 200 14px var(--main-font-light);
  color: rgba(255, 255, 255, 0.8);
  background: none;
  transition: all 0.9s linear;
  &:hover {
    background: rgba(0, 0, 0, 0.2);
    & > p {
      font-family: var(--main-font-bold);
    }
  }
  & h3 {
    color: white;
    font: 400 20px var(--main-font-bold);
  }
  & > p {
    position: absolute;
    left: 75%;
    top: 50%;
    width: 103px;
    text-align: center;
    font: 200 20px var(--main-font-light);
    color: rgba(255, 255, 255, 0.8);
    transition: all 0.6s linear;
  }

  & > div {
    & span {
      color: var(--main-violet);
    }

    & > p {
      margin-bottom: 20px;
      max-width: 520px;
      @media (max-width: 1000px) {
        max-width: 420px;
      }
    }
  }
`;
const arrowAnimate = keyframes`
    from {
        transform: translateX(0)
    }
    50%{
        
        transform: translateX(20%)
    }
    to{
        
        transform: translateX(0)
    }

`;

const StyledLink = styled(Link)`
  position: relative;
  text-transform: uppercase;
  text-decoration: none;
  font: 400 18px var(--main-font-bold);
  color: white;
  margin-left: 62%;
  &::before {
    content: "";
    position: absolute;
    display: block;
    width: 57px;
    height: 40px;
    right: -69px;
    top: -8px;
    background: url(${rightArrow}) no-repeat center;
    background-size: contain;
    animation: ${arrowAnimate} 1.2s linear infinite;
  }
`;

const StyledFooter = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  margin-top: 61px;
  padding-top: 160px;
  padding-bottom: 87px;
  background: rgba(0, 0, 0, 0.2);
  & input {
    width: 392px;
  }
`;

const LogoWrapper = styled.div`
  position: absolute;
  width: 165px;
  right: 50px;
  bottom: 50px;
`;
const StyledTextSVG = styled(Text)`
  z-index: 999;
  position: absolute;
  bottom: 392px;
  left: 20px;
  @media (max-width: 1000px) {
    /* display: none; */
    width: 400px;
  }
`;

const Item = ({ value, price, children }) => {
  return (
    <StyledItem>
      <h3>{value}</h3>
      <p>{price}</p>
      <div>{children}</div>
    </StyledItem>
  );
};

const Dekstop = () => {
  return (
    <StyledWrapper>
      <h2>Web Design</h2>
      <ul>
        <Item value="Landing-page" price="от $600">
          <p>
            <span>Что такое Лендинг?</span> <br /> Это одостраничный сайт,
            который призывает посетителя к целевому действию. Цель перед
            пользователем - замотивировать, а для бизнеса - получить контакты
            пользователя. Например, подписаться на рассылку, купить билет на
            конференцию, получить презентацию и др.
          </p>
          <p>
            {" "}
            <span>Кому подходит landing-page?</span>
            <br />
            Фактически, лендинг подойдет для продвижения практически любого
            продукта или услуги, цель которых получить больше лидов, то есть
            заявок от потенциальных клиентов.
          </p>{" "}
        </Item>
        <Item value="Сайт-визитка" price="от $600">
          <p>
            в Интернете. Ее основная цель - краткая передача информации о
            Зачастую сайт визитка создается для укрепления имиджа вашего бизнеса
            компании или персоне для привлечения внимания посетителей.
            Сайт-визитка - успешный способ взаимодействия с клиентом. Зачастую,
            такой сайт состоит из 2-3 страниц, где максимально коротко описана
            ваша деятельность, есть форма обратной связи с посетителем и ваши
            контактный данные. Но ограничений поколичеству страниц нет,главное,
            чтобы сайт был информативным.
          </p>

          <p>
            {" "}
            <span>Кому подходит сайт-визитка?</span> <br /> Практически всем! А
            особенно тем, кто хочет заявить о себе в интернете и сделать это
            быстро, красиво и надолго.
          </p>
        </Item>
        <Item value="Интернет-магазин" price="от $100">
          <p>
            Преимущества «виртуальногой» магазина:
            <br /> - свобода (владелец имеет возможность управлять своим
            магазином из любой точки мира)
            <br /> - экономичность (экономия времени и денег).
            <br /> - неограниченные возможности (в такой магазин заходят
            покупатели, буквально, с любого континента планеты)
          </p>
          <p>
            <span>Кому нужен интернет-магазин?</span>
            <br /> Компаниям, частным предпринимателям, организациям для продажи
            своей продукции. При этом наименований товаров может быть как
            небольшим, так и включать тысячи позиций. Это удобно в любом случае.
            У нас нет шаблонных решений. Для каждого клиента мы готовим
            уникальный проект интернет-магазина полностью адаптированный к
            продажам.
          </p>
        </Item>
        <Item value="Копоративный сайт" price="от $800">
          <p>
            Корпоративный сайт - идеальное решение для компаний любой сферы
            деятельности. Его целями могут быть привлечение целевой аудитории,
            налаживание новых деловых отношений, формирование позитивного имиджа
            компании и др. Корпоративные сайты помогают в решении различных
            бизнес-задач. На сайте может размещаться вся информация о компании,
            а также о продукции и услугах. Другими словами - каждый сможет зайти
            в любое время на сайт и найти для себя полезную информацию.
          </p>
        </Item>
      </ul>
      <StyledTextSVG />
      <StyledLink to="/project">посмотреть работы</StyledLink>
      <StyledFooter>
        <FormFeadback />
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
      </StyledFooter>
    </StyledWrapper>
  );
};
export default withSection(Dekstop)({ color: "#242424" });
