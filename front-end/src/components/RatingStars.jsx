import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  position: relative;
  font-size: 26px;
  -webkit-text-stroke: gold 1px;
`;

const StarContainer = styled.div`
  color: transparent;
`;

const StarValue = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  color: gold;
  clip-path: inset(0% ${({ percentValue }) => percentValue}% 0% 0%);
`;

function RatingStars({ maxValue, currentValue }) {
  const percentValue = ((maxValue - currentValue) / maxValue) * 100;
  return (
    <Container>
      <StarContainer>★★★★★</StarContainer>
      <StarValue percentValue={percentValue}>★★★★★</StarValue>
    </Container>
  );
}

export default RatingStars;
