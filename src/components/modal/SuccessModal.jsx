import React from "react";

import ModalWrapper from "./index";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  & p {
    font: 400 24px var(--main-font-light);
    color: white;
    text-align: center;
    & span {
      color: var(--main-violet);
    }
  }
`;
const SuccessModal = () => {
  return (
    <ModalWrapper button={false}>
      <StyledContainer>
        <p>
          <span>Ваш запрос отправлен!</span>
          <br /> Мы скоро свяжимся с вами!
        </p>
      </StyledContainer>
    </ModalWrapper>
  );
};

export default SuccessModal;
