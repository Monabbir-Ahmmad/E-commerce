import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    background-color: ${({ color }) => color || "#000"};
    height: 3px;
    width: 30px;
    margin: 2px;
    border-radius: 50px;
    transition: transform 0.5s ease;
  }

  span:nth-child(1) {
    transform: rotate(${({ isMenuOpen }) => (isMenuOpen ? 45 : 0)}deg)
      translateY(${({ isMenuOpen }) => (isMenuOpen ? 10 : 0)}px);
  }

  span:nth-child(2) {
    transform: scale(${({ isMenuOpen }) => (isMenuOpen ? 0 : 1)});
  }

  span:nth-child(3) {
    transform: rotate(${({ isMenuOpen }) => (isMenuOpen ? -45 : 0)}deg)
      translateY(${({ isMenuOpen }) => (isMenuOpen ? -10 : 0)}px);
  }

  @media (max-width: 770px) {
    display: flex;
  }
`;
function NavHamburger({ color, isMenuOpen, onClick }) {
  return (
    <Container color={color} isMenuOpen={isMenuOpen} onClick={onClick}>
      <span></span>
      <span></span>
      <span></span>
    </Container>
  );
}

export default NavHamburger;
