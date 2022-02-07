import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import NavHamburger from "./NavHamburger";
import { useDispatch, useSelector } from "react-redux";
import { Button, IconButton } from "@mui/material";
import { logout } from "../../actions/userActions";
import { StyledNavLink } from "./NavItem";
import { Search } from "@mui/icons-material";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 1rem;
  background: #fff;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.2);
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
  border: 1px solid lightgray;
  border-radius: 100px;
  margin: 0 2rem;
  flex: 1;
  max-width: 30vw;

  @media (max-width: 800px) {
    max-width: 100vw;
  }
`;

const Input = styled.input`
  border: none;
  outline: none;
  font-size: 1rem;
  width: 100%;
  height: 2rem;
  padding-left: 1rem;
  background-color: transparent;
`;

const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media (max-width: 800px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    margin-bottom: 5px;
    max-height: ${({ isMenuOpen }) => (isMenuOpen ? 1000 : 0)}px;
    transition: max-height 1s ease;
  }
`;

function Navbar() {
  const dispatch = useDispatch();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { userInfo } = useSelector((state) => state.userLogin);

  const isLoggedIn = userInfo && Object.keys(userInfo).length > 0;

  return (
    <Container>
      <StyledLink to="/">
        <Logo>
          <span>O</span>rigin
        </Logo>
      </StyledLink>

      <SearchContainer>
        <Input placeholder="Search" />
        <IconButton>
          <Search />
        </IconButton>
      </SearchContainer>

      <NavHamburger
        color={"#000"}
        isMenuOpen={isMenuOpen}
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
        }}
      />
      <Menu isMenuOpen={isMenuOpen}>
        <StyledNavLink to="/home">Home</StyledNavLink>
        <StyledNavLink to="/cart">Cart</StyledNavLink>
        {!isLoggedIn && <StyledNavLink to="/sign-up">Sign up</StyledNavLink>}
        {isLoggedIn ? (
          <StyledNavLink to="/profile">{userInfo.name}</StyledNavLink>
        ) : (
          <StyledNavLink to="/sign-in">Sign in</StyledNavLink>
        )}

        {isLoggedIn && (
          <Button
            variant="outlined"
            sx={{ fontSize: "1rem" }}
            onClick={() => dispatch(logout())}
          >
            Logout
          </Button>
        )}
      </Menu>
    </Container>
  );
}

export default Navbar;
