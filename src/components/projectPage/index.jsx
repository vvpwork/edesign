import React, { Component } from "react";
import styled from "styled-components";

import SliderList from "../../config/project_carusel";
import { Item } from "../carusel/Caruseltem";
import ActionButton from "../ActionButton";
import { ReactComponent as Logo } from "../../assets/img/logo.svg";

const StyledWrapper = styled.div`
  width: 100%;
  padding-top: 10px;
  background: #242424;
  & > h2 {
    font: 400 36px var(--main-font-bold);
    color: white;
    margin-left: 40px;
    margin-bottom: 50px;
  }
  & > p {
    font: 400 18px var(--main-font-light);
    color: rgba(255, 255, 255, 0.6);
    margin-left: 40px;
  }
`;

const ListMobile = styled.div`
  & > ul {
    width: 100%;
    & > li {
      margin-bottom: 76px;
    }
  }
  & > buttom {
  }
`;

class ProjectPage extends Component {
  render() {
    return (
      <StyledWrapper>
        <h2>Project</h2>
        <p>Наши последние проекты</p>
        <ListMobile>
          <ul>
            {SliderList.map(slide => (
              <Item key={slide.name} arr={slide} />
            ))}
          </ul>
          <ActionButton
            value="Show more..."
            style={{ border: "1px solid #fff" }}
          />

          <Logo />
        </ListMobile>
      </StyledWrapper>
    );
  }
}

export default ProjectPage;
