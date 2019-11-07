import React, { Component } from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  box-sizing: border-box;
  width: 100%;
  height: auto;
  background: ${({ color }) => color};
  overflow: hidden;
  @media (min-width: 460px) {
    height: auto;
    padding: 0;
  }
`;

const withSectionContainer = ComponentChild => props => {
  return class SectionContainer extends Component {
    render() {
      return (
        <StyledSection {...props}>
          <ComponentChild {...this.props} />
        </StyledSection>
      )
    }
  };
};

export default withSectionContainer;
