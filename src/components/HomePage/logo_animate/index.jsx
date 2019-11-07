import React from "react";
import styled, { keyframes } from "styled-components";
import img from "./logo_white.gif";

// import * as data from "./data.json";
// import Lottie from "react-lottie";

const opacity = keyframes`
  from{
    opacity: 1;
  }

 50%{
  opcity: 1;
}
  to{
    opacity: 0
  }
`;

const StyledWrapper = styled.div`
  width: 250px;
  height: auto;
  margin: 0 auto;
  animation: ${opacity} 4s ease-in-out;
  @media (min-width: 421px) {
    width: 400px;
    height: 80px;
    padding-bottom: 100px;
  }
`;

const Logo = () => {
  //   const bodyOptions = {
  //     loop: true,
  //     autoplay: true,
  //     animationData: data,
  //     rendererSettings: {
  //       preserveAspectRatio: "xMidYMid slice"
  //     }
  //   };

  return (
    <StyledWrapper>
      {/* <Lottie options={bodyOptions} height={400} width={400} /> */}
      <img src={img} alt="" />
    </StyledWrapper>
  );
};

export default Logo;
