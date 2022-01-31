import React from "react";
import styled from "@emotion/styled";
import { ImSpinner2 } from "react-icons/im";
import { keyframes } from "@emotion/react";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ bg_color }) => bg_color};
  font-size: 4rem;
  color: ${({ text_color }) => text_color};
  z-index: 100;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled(ImSpinner2)`
  color: ${({ spinner_color }) => spinner_color};
  margin: 0 2rem;
  animation: ${rotate} 1s linear infinite;
`;

function Loader({ children, textColor, spinnerColor, bgColor }) {
  return (
    <Container bg_color={bgColor} text_color={textColor}>
      {children}
      <Spinner spinner_color={spinnerColor} />
    </Container>
  );
}

export default Loader;
