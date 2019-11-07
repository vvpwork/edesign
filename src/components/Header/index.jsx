import React, { Component } from "react";
import styled from "styled-components";

// component
import SiteLogo from "./SiteLogo";
import Menu from "./Menu";
import BurgerButton from "./BurgerButton";

const StyledLogo = styled(SiteLogo)`
  width: 127px;
  height: 127px;
`;

const StyledHeader = styled.header`
  /* position: fixed; */
  z-index: 2;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  height: 17.6%;
  width: 100%;
  align-items: center;
  padding: 0 20px;
  background-color: #242424;
  margin-bottom: -1px;
  @media (min-width: 480px) {
    position: relative;
    padding-top: 40px;
    justify-content: center;
  }
`;

export default class Header extends Component {
  state = {
    windowWidth: window.innerWidth,
    mobileMenu: false
  };
  componentDidMount() {
    // this.handleResize();
    window.removeEventListener("resize", this.handleResize);
    window.addEventListener("resize", this.handleResize);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
    window.removeEventListener();
  }
  handleResize = () => {
    this.setState({
      windowWidth: window.innerWidth
    });
  };
  buttonClick = () => {
    this.setState(prevState => {
      return {
        mobileMenu: !prevState.mobileMenu
      };
    });
  };

  render() {
    const { windowWidth, mobileMenu } = this.state;
    return (
      <StyledHeader>
        <StyledLogo />
        {windowWidth <= 480 && <BurgerButton click={this.buttonClick} />}
        <Menu mobile={mobileMenu} click={this.buttonClick} />
      </StyledHeader>
    );
  }
}
