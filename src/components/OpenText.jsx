import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

import OpenButton from "../assets/img/OpenButton.svg";
import OpenButtonViolet from "../assets/img/openButtonViolet.svg";

const textAnimate = keyframes`
  from{
    opacity: 0;
  }
  
  50%{
    opacity: 0.5;
  }
  to{
   opacity: 1; 
  }
`;
const StyledWrapper = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  margin-bottom: 22px;

  &::after {
    content: '${({ price }) => price}';
    position: absolute;
    display: block;
    right: 0;
    top: 0;
    height: 40px;
    width: 100px;
    font: 400 18px var(--main-font-light);
    color: rgba(255, 255, 255, 0.6);
  }
  & p:nth-of-type(1) {
    padding-left: 16px;
    font: 400 20px var(--main-font-light);
    color: white;
    margin-bottom: 39px;
    transition: all 0.2s;
  }

  & .openText {
    display: ${props => (props.isOpen ? "block" : "none")};
    overflow: hidden;
    animation: ${textAnimate} 0.4s ease-in;
    & p {
      color: rgba(255, 255, 255, 0.6);
      font: 400 16px var(--main-font-light);
      transition: all 0.2s linear;
      padding: 0;
      margin: 0 0 20px 0;
    }
    & p > span {
      color: ${({ color }) =>
        color ? `var(--main-neon-green)` : `var(--main-violet)`};
    }
  }
  & button {
    position: absolute;
    width: 12px;
    height: 12px;
    left: 0;
    top: 7px;
    background: ${props =>
      props.color ? `url(${OpenButton})` : `url(${OpenButtonViolet})`}
      no-repeat center;
    background-size: contain;
    transform: ${props => (props.isOpen ? "rotate(90deg)" : "rotate(0)")};
    transition: all 0.2s ease-in;
  }
  @media (min-width: 480px) {
    max-width: 500px;
    
  }
`;

export default class OpenText extends Component {
  state = {
    isOpen: this.props.isOpen ? true : false
  };

  toggleButton = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const { value, children, color = "green", price } = this.props;
    const { isOpen } = this.state;

    return (
      <StyledWrapper isOpen={isOpen} color={color} price={price}>
        <p onClick={this.toggleButton}>{value}</p>
        <button onClick={this.toggleButton} />
        <div className="openText">{children}</div>
      </StyledWrapper>
    );
  }
}
