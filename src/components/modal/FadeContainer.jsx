import transition from "styled-transition-group";

const ModalTransition = transition.div`
&:enter {
    opacity: 0.01;
  }
  &:enter-active {
    opacity: 1;
    transition: opacity 1000ms ease-in;
  }
  &:exit {
    opacity: 1;
  }
  &:exit-active {
    opacity: 0.01;
    transition: opacity 800ms ease-in;
  }
`;

export default ModalTransition;
