import React, { Component } from "react";
import styled from "styled-components";

// import transition, { css } from "styled-transition-group";

import ModalWrapper from "./index";
import ActionButton from "../ActionButton";

// style

// const AnimeModal = keyframes`
//   from {
//     transform: scale(0);
//   }

//   to {
//     transform: scale(1);
//   }
// `;
const style = {
  entering: {
    opasity: 0
    // transform: `translateY(100%)`
  },
  entered: {
    opacity: 1
    // transform: `translateY(0)`
  },
  exiting: {
    opacity: 0
  },
  exited: {
    opacity: 0
  }
};

const FormContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  min-height: 100vh;
  opacity: 0;
  transition: all 400ms ease-in;
  & input {
    width: 295px;
    height: 40px;
    margin-bottom: 30px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 0;
    color: white;
    font-size: 20px;
    &::placeholder {
      font: 400 24px var(--main-font-light);
      color: white;
    }

    &:focus {
      border-color: var(--main-neon-green);
    }
  }
  & form > button {
    background: var(--main-neon-green);
    border: var(--main-neon-green);
  }
`;

const initialState = {
  name: "",
  email: "",
  tel: ""
};

export default class StandartModal extends Component {
  state = initialState;

  handleChange = ({ target: { value, name } }) => {
    this.setState({
      [name]: value
    });
  };

  handleSubmit = ev => {
    const { toggleSuccessModal, toggle } = this.props;
    ev.preventDefault();
    toggle();
    toggleSuccessModal();
    setTimeout(() => toggleSuccessModal(), 2000);
  };

  render() {
    const { name, email, tel } = this.state;
    const { toggle, state } = this.props;
    return (
      <ModalWrapper toggle={toggle}>
        <FormContainer style={{ ...style[state] }}>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="modalName">
              <input
                type="text"
                id="modalName"
                value={name}
                onChange={this.handleChange}
                name="name"
                placeholder="Ваше имя"
                required
              />
            </label>
            <label htmlFor="modalEmail">
              <input
                type="email"
                name="email"
                value={email}
                id="modalEmail"
                onChange={this.handleChange}
                placeholder="E-mail*"
                required
              />
            </label>
            <label htmlFor="modalTel">
              <input
                type="telephone"
                id="modalTel"
                name="tel"
                value={tel}
                onChange={this.handleChange}
                placeholder="Телефон"
                required
              />
            </label>
            <ActionButton
              value="Отправить запрос"
              type="submit"
              style={{ textTransform: "uppercase" }}
            />
          </form>
        </FormContainer>
      </ModalWrapper>
    );
  }
}
