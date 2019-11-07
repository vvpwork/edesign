import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { Transition } from "react-transition-group";

import withSection from "../withSection";
import OpenText from "../OpenText";
import ModalButton from "../ActionButton";
import StardatModal from "../modal/StandartModal";
import SuccessModal from "../modal/SuccessModal";

import rightArrow from "../../assets/img/rightArrow.svg";
//style

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

const StyledWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: auto;
  padding: 58px 10px 58px 40px;
  & h2 {
    font: 400 36px var(--main-font-bold);
    color: var(--main-neon-green);
    margin-bottom: 68px;
  }
  & > p {
    font: 400 16px var(--main-font-light);
    color: white;
    margin-bottom: 22px;
  }
  & > button {
    text-transform: uppercase;
    background: var(--main-neon-green);
    border-color: var(--main-neon-green);
    margin-bottom: 60px;
  }
  @media (min-width: 480px) {
    padding-left: 20%;
    & > p {
      width: 502px;
    }
  }
`;

const StyledContainer = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: auto;
  margin-bottom: 80px;
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
    this.setState(prevState => ({
      isOpenSuccessModal: !prevState.isOpenSuccessModal
    }));
  };
  render() {
    const { isOpenModal, isOpenSuccessModal } = this.state;
    return (
      <StyledWrapper>
        <h2>Graphic design</h2>
        <p>
          К услугам графического дизайна от нашей
          <br /> студии относится:
        </p>
        <StyledContainer>
          <OpenText
            isOpen={true}
            value="Разработка логотипа /редизайн существующего логотипа"
          >
            <p>
              Профессиональный логотип — достойное лицо вашего бизнеса. Он может
              быть простым, замысловатым, эксцентричным и эпатирующим, но в
              любом случае он должен отражать суть вашего бизнеса и создавать
              необходимый образ.
            </p>
            <p>
              Мы создаем логотипы любой стилистики и сложности. Найдем и
              подчеркнем вашу уникальность.
            </p>
            <p>
              В услуги нашей студии входит разработка логотипа с нуля или
              редизайн существующего логотипа.
            </p>
            <p>
              <span>В каком случае нужен редизайн лого?</span> <br /> Если ваш
              бизнес вырос, и его ценности изменились. Если вы планируете
              расширить свою аудиторию и соответствовать ей. Если появился
              сильный конкурент и вы решили пересмотреть концепцию подачи себя.
              Есть множество причин, по которым необходимо пересмотреть дизайн.
              Также тренды, они не стоят на месте, и если вы хотите им следовать
              и сохранить узнаваемость бренда- редизайн поможет повысить его
              актуальность и привлекательность
            </p>
          </OpenText>
          <OpenText value="Разработка фирменного стиля">
            <p>
              Разработка и создание фирменного стиля компании —это создание
              цельного образа, что позволит, с одной стороны, выделиться из
              конкурентов, с другой — сделает не только ваш товар, но и любую
              исходящую от вас информацию узнаваемой.
              <br /> Фирменный стиль - это набор графических элементов,
              созданных в одном стиле. Это повышает вашу узнаваемость и уровень
              доверия перед партнерами или клиентами. Элементами фирменного
              стиля могут быть фирменный знак/логотип, фирменные шрифты,
              надписи, цветовая схема и тд. А носителями - визитки, деловая
              документация, рекламная продукция, упаковка и др. Создание
              форменного стиля гарантирует вам ефеективное продвижение своего
              бизнеса.
            </p>
          </OpenText>
          <OpenText value="Дизайн рекламной продукции">
            <p>
              {" "}
              Разработка стильного дизайна любой рекламной продукции. <br />
              - визитки <br />- деловая документация (бланки писем, конверты,
              папки) <br />- печатная продукция (рекламные флаеры, листовки,
              каталоги, буклеты, афиши, дисконтные карты, бейджи, наклейки и
              т.д) <br />- фирменная упаковка ...и многое другое по вашему
              запросу.
            </p>
          </OpenText>
          <OpenText value="Дизайн наружной широкоформатной рекламы">
            <p>
              Разработка стильного дизайна любой рекламной продукции. <br />
              - визитки <br />- деловая документация (бланки писем, конверты,
              папки) <br />- печатная продукция (рекламные флаеры, листовки,
              каталоги, буклеты, афиши, дисконтные карты, бейджи, наклейки и
              т.д) <br />- фирменная упаковка ...и многое другое по вашему
              запросу.
            </p>
            .
          </OpenText>
          <OpenText value="Оформление социальных сетей (Instagram, Facebok)" />
        </StyledContainer>
        <ModalButton value="обсудить проект" click={this.toggleModal} />
        <StyledLink to="/project">Посмотреть работы</StyledLink>
        <Transition in={isOpenModal} unmountOnExit timeout={400}>
          {state => (
            <StardatModal
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
