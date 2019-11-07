import React, { Component } from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";

const StyledModal = styled.div`
  position: fixed;
  overflow: hidden;
  box-sizing: border-box;
  top: 0;
  left: 0;
  width: 100vw;
  min-height: 100vh;
  background: #242424;
  z-index:999;
  & .closeModal {
    position: absolute;
    z-index: 1;
    display: block;
    width: 30px;
    height: 30px;
    right: 40px;
    top: 90px;
    &::before,
    ::after {
      content: "";
      position: absolute;
      display: inline-block;
      width: 30px;
      height: 1px;
      background: #fff;
      top: 50%;
      left: 0;
      transform: rotate(45deg);
    }
    &::after {
      bottom: 0;
      transform: rotate(-45deg);
    }
  }
`;

export default class Modal extends Component {
  componentDidMount() {
    const { isOpen } = this.props;
    console.log(isOpen);
    isOpen
      ? (document.getElementById("root").style.overflowY = "hidden")
      : (document.getElementById("root").style.overflowY = "true");
  }

  render() {
    const { button = true, toggle, children } = this.props;
    return ReactDOM.createPortal(
      <StyledModal>
        {button && (
          <button type="button" onClick={toggle} className="closeModal" />
        )}
        {children}
      </StyledModal>,
      document.getElementById("portal")
    );
  }
}
