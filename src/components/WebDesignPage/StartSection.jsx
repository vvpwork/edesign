import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { Transition } from "react-transition-group";
import { Link } from "react-router-dom";

import OpenText from "../OpenText";
import StandartModal from "../modal/StandartModal";
import SuccessModal from "../modal/SuccessModal";
import withSection from "../withSection";
import ButtonModal from "../ActionButton";
import rightArrow from "../../assets/img/rightArrow.svg";
// style

const StyledWrapper = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 100%;
  padding: 56px 20px 56px 40px;
  & > h2 {
    font: 400 36px var(--main-font-bold);
    color: var(--main-violet);
    margin-bottom: 60px;
  }
  & > p {
    font: 400 16px var(--main-font-light);
    color: white;
    margin-bottom: 22px;
  }
  & > button {
    background: var(--main-violet);
    text-transform: uppercase;
    margin-bottom: 60px;
  }
  @media (min-width: 480px) {
    padding: 160px 0px 0px 0px;
    & > h2 {
      margin-left: 10%;
      font-size: 50px;
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
const OpenTextStyled = styled(OpenText)`
  &::after {
    content: "от 15 000 грн";
    position: absolute;
    display: block;
    right: 0;
    top: 0;
    height: 40px;
    width: 100px;
    font: 400 18px var(--main-font-bold);
    color: rgba(255, 255, 255, 0.6);
  }
`;
const StyledContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: auto;
  margin-bottom: 80px;
  @media (min-width: 480px) {
    padding-left: 10vw;
  }
`;

class StartSection extends Component {
  state = {
    isOpenModal: false,
    isOpenSuccessModal: false
  };
  toggleModal = () => {
    this.setState({
      isOpenModal: !this.state.isOpenModal
    });
  };

  toggleSuccessModal = () => {
    this.setState({
      isOpenSuccessModal: !this.state.isOpenSuccessModal
    });
  };

  render() {
    const { isOpenModal, isOpenSuccessModal } = this.state;
    return (
      <StyledWrapper>
        <h2>Web design</h2>
        <p>К услугам графического дизайна от нашей студии относится:</p>
        <StyledContainer>
          <OpenTextStyled
            value="Landing-page"
            price="от 15 000грн"
            color={null}
            isOpen={true}
          >
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
          </OpenTextStyled>
          <OpenText value="Сайт-визитка" price="от 15 000грн" color={null}>
            <p>
              Зачастую сайт визитка создается для укрепления имиджа вашего
              бизнеса в Интернете. Ее основная цель - краткая передача
              информации о компании или персоне для привлечения внимания
              посетителей. Сайт-визитка - успешный способ взаимодействия с
              клиентом. Зачастую, такой сайт состоит из 2-3 страниц, где
              максимально коротко описана ваша деятельность, есть форма обратной
              связи с посетителем и ваши контактный данные. Но ограничений
              поколичеству страниц нет,главное, чтобы сайт был информативным.
            </p>

            <p>
              {" "}
              <span>Кому подходит сайт-визитка?</span> <br /> Практически всем!
              А особенно тем, кто хочет заявить о себе в интернете и сделать это
              быстро, красиво и надолго.
            </p>
          </OpenText>
          <OpenText value="Интернет-магазин" price="от 25 000грн" color={null}>
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
              <br /> Компаниям, частным предпринимателям, организациям для
              продажи своей продукции. При этом наименований товаров может быть
              как небольшим, так и включать тысячи позиций. Это удобно в любом
              случае. У нас нет шаблонных решений. Для каждого клиента мы
              готовим уникальный проект интернет-магазина полностью
              адаптированный к продажам.
            </p>
          </OpenText>
          <OpenText value="Копоративный сайт" price="от 20 000грн" color={null}>
            <p>
              Корпоративный сайт - идеальное решение для компаний любой сферы
              деятельности. Его целями могут быть привлечение целевой аудитории,
              налаживание новых деловых отношений, формирование позитивного
              имиджа компании и др. Корпоративные сайты помогают в решении
              различных бизнес-задач. На сайте может размещаться вся информация
              о компании, а также о продукции и услугах. Другими словами -
              каждый сможет зайти в любое время на сайт и найти для себя
              полезную информацию.
            </p>
          </OpenText>
        </StyledContainer>
        <ButtonModal value="обсудить проект" click={this.toggleModal} />
        <StyledLink to="/project"> посмотреть работы</StyledLink>
        <Transition in={isOpenModal} unmountOnExit timeout={200}>
          {state => (
            <StandartModal
              state={state}
              toggle={this.toggleModal}
              toggleSuccessModal={this.toggleSuccessModal}
            />
          )}
        </Transition>
        {isOpenSuccessModal && <SuccessModal />}
      </StyledWrapper>
    );
  }
}

export default withSection(StartSection)({ color: "#242424" });
