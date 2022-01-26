import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavLink = styled(NavLink)`
  font-size: 18px;
  color: ${({ color }) => color || "#000"};
  text-transform: uppercase;
  margin: 5px 5px;
  padding: 10px 10px;
  white-space: nowrap;
  position: relative;

  ::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: ${({ color }) => color || "#000"};
    transition: all 0.5s ease;
    transform: scaleX(0);
  }

  :hover {
    ::before {
      transform: scaleX(1);
    }
  }

  &.active::before {
    transform: scaleX(1);
  }
`;

function NavItem({ color, text }) {
  return (
    <StyledNavLink
      to={`/${text.replace(" ", "-").toLowerCase()}`}
      color={color}
    >
      {text}
    </StyledNavLink>
  );
}

export default NavItem;
