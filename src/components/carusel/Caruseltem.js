/* eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { merge, rotateInUpLeft, fadeInUp, flipInY } from "react-animations";

const newAni = merge(fadeInUp, flipInY);
const AnimateItem = keyframes(newAni);
const customAnimet = keyframes`
  from{
    opacity: 0.2;
  }

  to{
    opacity: 1;
  }
`;

const StyledLink = styled.div`
  position: relative;
  width: 100vw;
  transform: scale(0.8);
  height: auto;
  /* margin: 0 ; */
  animation: ${customAnimet} 1s ease-in-out;
  & p {
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    width: 200px;
    text-align: center;
    transform: translate(-50%, -50%);
    font: 400 24px var(--main-font-light);
    color: rgba(255, 255, 255, 0.8);
  }

  & .slick-current a {
    transform: scale(1.2);
    transition: transform 0.5s ease-in;
  }

  @media (min-width: 480px) {
    width: 344px;
    /* margin-right: 50px; */
  }
`;

const Item = ({ arr, style = {} }, ...props) => {
  return (
    <StyledLink {...props} style={style} className="slider__item">
      <Link to={arr.link}>
        <img src={arr.img} alt={arr.name} />
        <p>{arr.name}</p>
      </Link>
    </StyledLink>
  );
};

const CaruselList = ({ arr }) => {
  return (
    <>
      {arr.map(el => (
        <Item arr={el} key={el.name} />
      ))}
    </>
  );
};

export { Item, CaruselList };
