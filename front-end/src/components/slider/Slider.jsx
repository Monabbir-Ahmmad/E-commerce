import { useState } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import styled from "styled-components";
import { slideDataSet } from "../data";
import SliderItem from "./SliderItem";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  cursor: pointer;
  width: 50px;
  height: 50px;
  margin: 5px;
  background-color: lightgray;
  opacity: 0.7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${({ direction }) => direction === "left" && "10px"};
  right: ${({ direction }) => direction === "right" && "10px"};
  margin: auto;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${({ slideIndex }) => -100 * slideIndex}vw);
`;

// Main slide function
function Slider() {
  //This is the slide index
  const [slideIndex, setSlideIndex] = useState(0);

  //This is the arrow click handler for the slides
  const handleSliderArrowClick = (direction, slideItemCount) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : slideItemCount - 1);
    } else {
      setSlideIndex(slideIndex < slideItemCount - 1 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow
        direction="left"
        onClick={() => {
          handleSliderArrowClick("left", slideDataSet.length);
        }}
      >
        <MdArrowBackIos />
      </Arrow>

      <Arrow
        direction="right"
        onClick={() => {
          handleSliderArrowClick("right", slideDataSet.length);
        }}
      >
        <MdArrowForwardIos />
      </Arrow>

      <Wrapper slideIndex={slideIndex}>
        {slideDataSet.map((item, index) => (
          <SliderItem key={index} item={item} />
        ))}
      </Wrapper>
    </Container>
  );
}

export default Slider;
