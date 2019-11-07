import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { ReactComponent as Logo } from "../../assets/img/logo.svg";

const StyledLogo = styled(Logo)`
  width: 129px;
  height: 129px;
  @media (min-width: 480px) {
    height: auto;
    fill: red;
  }
`;

const StyledLink = styled(Link)`
  @media (min-width: 480px) {
    position: absolute;
    top: 52px;
    left: 9%;
  }
`;

const SiteLogo = () => (
  <StyledLink to="/">
    <StyledLogo />
  </StyledLink>
);

export default SiteLogo;
