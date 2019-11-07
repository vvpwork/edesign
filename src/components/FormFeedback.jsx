import React, { Component } from "react";
import styled from "styled-components";

import ActionButton from "./ActionButton";

const innitialState = {
  name: "",
  email: "",
  tel: ""
};

// style

const StyledForm = styled.form`
  width: 100%;
  & input {
    width: 295px;
    height: 40px;
    margin-bottom: 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 0;
    color: white;
    font-size: 18px;
    font-family: var(--main-font-light);
    &:nth-of-type(3) {
      margin-bottom: 45px;
    }
    &::placeholder {
      font: 400 18px var(--main-font-light);
      color: rgba(255, 255, 255, 0.6);
    }
    &:focus {
      border-color: white;
    }
    & > button {
      background: #f94aff;
    }
  }
`;

class Form extends Component {
  state = innitialState;

  handleSubmit = ev => {
    ev.preventDefault();
    console.log(this.state);
  };

  handleChange = ({ target: { value, name } }) => {
    this.setState({
      [name]: [value]
    });
  };
  render() {
    const { name, email, tel } = this.state;
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          placeholder="Ваше имя"
          name="name"
          value={name}
          required
          type="text"
        />
        <input
          onChange={this.handleChange}
          placeholder="E-mail*"
          name="email"
          value={email}
          required
          type="email"
        />
        <input
          onChange={this.handleChange}
          placeholder="Телефон"
          name="tel"
          value={tel}
          required
          type="text"
        />
        <ActionButton
          value="Обсудить проект"
          type="submit"
          style={{
            textTransform: "uppercase",
            background: "var(--main-neon-green)",
            borderColor: "var(--main-neon-green)"
          }}
        />
      </StyledForm>
    );
  }
}

export default Form;
