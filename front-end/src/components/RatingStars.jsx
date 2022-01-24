import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  font-size: 24px;
`;

const StarContainer = styled.label`
  color: transparent;
  -webkit-text-stroke: gold 1px;
`;

const StarValue = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  color: gold;
  clip-path: inset(0% ${({ value }) => value}% 0% 0%);
`;

function RatingStars({ maxValue, value }) {
  const percentValue = ((maxValue - value) / maxValue) * 100;

  return (
    <Container>
      <StarContainer>★★★★★</StarContainer>
      <StarValue value={percentValue}>★★★★★</StarValue>
    </Container>
  );
}

export default RatingStars;
