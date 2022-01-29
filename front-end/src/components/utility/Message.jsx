import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  padding: 20px;
  margin: 20px;
  border-radius: 4px;
  background-color: ${({ bg_color }) => bg_color};
  color: ${({ text_color }) => text_color};
`;

function Message({ variant, children }) {
  let bgColor, textColor;

  switch (variant) {
    case "danger":
      bgColor = "#ffd3d3";
      textColor = "#a50000";
      break;

    case "success":
      bgColor = "#c9ffc2";
      textColor = "#00a529";
      break;

    case "warning":
      bgColor = "#ffecaf";
      textColor = "#a57900";
      break;

    default:
      bgColor = "#c7dbff";
      textColor = "#003aa5";
      break;
  }

  return (
    <Container bg_color={bgColor} text_color={textColor}>
      {children}
    </Container>
  );
}

export default Message;
