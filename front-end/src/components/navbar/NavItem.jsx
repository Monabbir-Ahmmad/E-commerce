import styled from "styled-components";

const Container = styled.div`
  cursor: pointer;
  font-size: 18px;
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
    background-color: ${({ underlineColor }) => underlineColor || "#000"};
    transition: all 0.5s ease;
    transform: scaleX(0);
  }

  :hover {
    ::before {
      transform: scaleX(1);
    }
  }
`;

function NavItem({ underlineColor, text }) {
  return <Container underlineColor={underlineColor}>{text}</Container>;
}

export default NavItem;
