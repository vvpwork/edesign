import React, { Component } from "react";
import styled from "styled-components";
import { Transition } from "react-transition-group";
import withSection from "../withSection";

import Modal from "../modal/StandartModal";
import SuccessModal from "../modal/SuccessModal";
import FedbackForm from "../FormFeedback";

import bg_contact from "../../assets/img/bg_contact_desktop.svg";
import bg_contact_mobile from "../../assets/img/contact_bg_mobile.svg";
import { ReactComponent as Logo } from "../../assets/img/logo.svg";
import { ReactComponent as Instagram } from "../../assets/img/instagram-logo.svg";
import { ReactComponent as Telegram } from "../../assets/img/telegram-logo.svg";
import { ReactComponent as Viber } from "../../assets/img/viber.svg";

const StyledWrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  padding: 0 30px;
  width: 100%;
  height: auto;
  padding-top: 60px;
  padding-bottom: 20px;
  background: url(${bg_contact_mobile}) no-repeat -100px 160px;
  background-size: contain;
  & > h2 {
    font: 400 36px var(--main-font-bold);
    color: white;
    line-height: 0.8;
    margin-bottom: 12vh;
  }
  & > a {
    display: block;
    text-decoration: none;
    color: white;
    margin-bottom: 11px;
    font: 400 24px var(--main-font-light);
    &:nth-last-of-type(1) {
      font-size: 18px;
      margin-bottom: 61px;
      @media (min-width: 1000px) {
        margin-bottom: 300px;
      }
    }
  }

  & > button {
    position: relative;
    font: 400 18px var(--main-font-bold);
    color: white;
    text-transform: uppercase;
    margin-bottom: 88px;
    &::after {
      content: "";
      position: absolute;
      display: block;
      height: 1px;
      width: 165px;
      background: var(--main-neon-green);
      bottom: -4px;
    }
  }
  & ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 200px;
    margin: 0 auto;
    margin-bottom: 60px;

    & > li {
      width: 72px;
      height: auto;
    }
  }
  & p {
    width: 150px;
    margin: 0 auto;
    color: white;
    font: 400 18px var(--main-font-light);
    text-align: center;
  }
  @media (min-width: 1000px) {
    background: url(${bg_contact}) no-repeat 70% -4%;
    background-size: auto;
    padding: 120px 20vw 30px 20vw;
    & > h2 {
      margin-bottom: 120px;
    }
    & > button {
      display: none;
    }
    & > ul {
      position: absolute;
      top: 374px;
    }
  }
`;

const FormDekstop = styled.div`
  display: none;
  @media (min-width: 1000px) {
    display: block;
    position: absolute;
    width: 300px;
    top: 256px;
    right: 25%;
  }
`;

const StyledLogo = styled(Logo)`
  display: block;
  width: 167px;
  height: 102px;
  margin: 0 auto;
  margin-bottom: 41px;
`;

class Contact extends Component {
  state = {
    isOpenModal: false,
    isOpenSuccessModal: false
  };

  toggelModal = () => {
    console.log("toogle");
    this.setState(prevState => ({ isOpenModal: !prevState.isOpenModal }));
  };

  toggelSuccessModal = () => {
    this.setState(prevState => ({
      isOpenSuccessModal: !prevState.isOpenSuccessModal
    }));
  };
  render() {
    const { isOpenModal, isOpenSuccessModal } = this.state;
    return (
      <StyledWrapper>
        <Transition unmountOnExit in={isOpenModal} timeout={400}>
          {state => (
            <Modal
              state={state}
              toggle={this.toggelModal}
              toggleSuccessModal={this.toggelSuccessModal}
            />
          )}
        </Transition>
        {isOpenSuccessModal && <SuccessModal />}
        <h2>Contacts</h2>
        <a href="tel:+380639572404">+38 063 957 24 04</a>
        <a href="mailto:edasign@gmail.com">edesign@gmail.com</a>
        <button onClick={this.toggelModal}>Обсудить проект</button>
        <StyledLogo />
        <ul>
          <li>
            <a href="/">
              <Instagram />
            </a>
          </li>
          <li>
            <a href="/">
              <Telegram />
            </a>
          </li>
          <li>
            <a href="/">
              <Viber />
            </a>
          </li>
        </ul>
        <p>Kiev, Ukraine</p>
        <FormDekstop>
          <FedbackForm />
        </FormDekstop>
      </StyledWrapper>
    );
  }
}

export default withSection(Contact)({ heigth: true, color: "#242424" });
