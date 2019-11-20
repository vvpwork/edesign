import React, { useState } from "react";
import styled from "styled-components";
import Media from "react-media";

import { arrDesktop } from "../../config/project_carusel";
import { Item } from "../carusel/Caruseltem";
import ActionButton from "../ActionButton";
import Slider from "../carusel/Slider";
import { ReactComponent as Logo } from "../../assets/img/logo.svg";
import project_page_bg from "../../assets/img/project_page_bg.png";

const ListProjectMobile = () => {
  const [sliders, setSliders] = useState(arrDesktop.slice(0, 4));
  const showMore = () => setSliders(arrDesktop);
  return (
    <ListMobile>
      <ul>
        {sliders.map(slide => (
          <Item key={slide.name} arr={slide} />
        ))}
      </ul>

      {sliders.length < 5 && (
        <ActionButton
          click={showMore}
          value="Show more..."
          style={{ border: "1px solid #fff" }}
        />
      )}

      <LogoWrapper>
        <Logo />
      </LogoWrapper>
    </ListMobile>
  );
};

const ListProjectDesctop = () => {
  const settings = {
    className: "center",
    infinite: false,
    focusOnSelect: true,
    slidesToShow: 1,
    currentSlide: 4,
    speed: 800,
    variableWidth: true
  };

  return (
    <ListDesctop>
      <Slider
        style={{ width: "700px" }}
        sliderList={arrDesktop}
        {...{ settings }}
      />
    </ListDesctop>
  );
};

const ProjectPage = () => {
  return (
    <StyledWrapper>
      <h2>Projects</h2>
      <p>Наши последние проекты</p>
      <Media
        queries={{
          small: "(max-width: 480px)",
          medium: "(min-width: 481px and max-width: 1000px)",
          large: "(min-width: 1001px)"
        }}
      >
        {({ small, medium, large }) => {
          return (
            <>
              {small && <ListProjectMobile />}
              {medium && <ListProjectDesctop />}
              {large && <ListProjectDesctop />}
            </>
          );
        }}
      </Media>
      <div className="bg_project_page"></div>
    </StyledWrapper>
  );
};

// style

const StyledWrapper = styled.div`
  position: relative;
  min-height: 80vh;
  padding-top: 10px;
  width: 100%;
  padding-bottom: 50px;
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
  @media (min-width: 480px) {
    padding-top: 160px;
    & > p {
      display: none;
    }
    & > h2 {
      margin-left: 240px;
      font-size: 50px;
      margin-bottom: 95px;
    }
    & .bg_project_page {
      position: absolute;
      top: 162px;
      width: 1005px;
      height: 207px;
      background: url(${project_page_bg}) no-repeat center;
    }
  }
`;

const ListMobile = styled.div`
  & > ul {
    width: 100%;
    & > li {
      margin-bottom: 76px;
    }
  }
  & > button {
    margin-bottom: 50px;
  }
`;

const LogoWrapper = styled.div`
  width: 169px;
  margin: 0 auto;
`;

const ListDesctop = styled.div`
  position: relative;
  margin-left: 20%;
  background: #242424;
  & .slider__item {
    z-index: 100;
    pointer-events: none;
    margin-left: 95px;
    position: relative;
    opacity: 0.3;
    transition: transform 0.8s ease-in-out;
  }
  & .slick-current .slider__item {
    pointer-events: initial;
    opacity: 1;
    transform: scale(1);
  }
`;

export default ProjectPage;
