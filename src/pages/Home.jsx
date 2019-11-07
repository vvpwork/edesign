import React, { Component } from "react";
import styled from "styled-components";

// components
import StartSection from "../components/HomePage/StartSection";
import DesignSection from "../components/HomePage/DesignSection";
import HowWeWork from "../components/HomePage/HowWeWork";
import AboutUs from "../components/HomePage/AboutUsSection";
import Contact from "../components/HomePage/ContactSection";
import Project from "../components/HomePage/ProjectSection";

const StyledWrapper = styled.div`
  box-sizing: border-box;
  background: #242424;
`;
export default class HomePage extends Component {
  render() {
    return (
      <StyledWrapper>
        <StartSection />
        <DesignSection />
        <Project />
        <AboutUs />
        <HowWeWork />
        <Contact />
      </StyledWrapper>
    );
  }
}
