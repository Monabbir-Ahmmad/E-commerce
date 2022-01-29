import React, { useState } from "react";
import { MdSearch } from "react-icons/md";
import { Link } from "react-router-dom";
import styled from "styled-components";
import NavHamburger from "./NavHamburger";
import NavItem from "./NavItem";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 1rem;
  background: #fff;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2);
`;

const StyledLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: inherit;
`;

const Logo = styled.div`
  font-weight: bold;
  font-size: 2rem;
  span {
    font-size: 3rem;
    color: #0075c4;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 1rem;
  border: 1px solid lightgray;
  border-radius: 100px;
  margin: 0 2rem;
  flex: 1;
  max-width: 30vw;
`;

const Input = styled.input`
  border: none;
  outline: none;
  font-size: 1rem;
  width: 100%;
  height: 2rem;
  background-color: transparent;
`;

const SearchIcon = styled(MdSearch)`
  color: gray;
  font-size: 25px;
  padding: 4px;
  margin: 4px;
  border-radius: 50px;
  transition: 0.5s;

  :hover {
    background-color: #0075c4;
    color: white;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 800px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ isMenuOpen }) => (isMenuOpen ? 1000 : 0)}px;
    transition: max-height 1s ease;
  }
`;

function Navbar({ navItems }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Container>
      <StyledLink to="/">
        <Logo>
          <span>O</span>rigin
        </Logo>
      </StyledLink>

      <SearchContainer>
        <Input placeholder="Search" />
        <SearchIcon />
      </SearchContainer>
      <NavHamburger
        color={"#000"}
        isMenuOpen={isMenuOpen}
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
        }}
      />
      <Menu isMenuOpen={isMenuOpen}>
        {navItems.map((item, index) => (
          <NavItem key={index} color={"#000"} text={item} />
        ))}
      </Menu>
    </Container>
  );
}

export default Navbar;
