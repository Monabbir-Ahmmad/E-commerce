import styled from "styled-components";

const Card = styled.div`
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.4s;
  overflow: hidden;

  //To give hover effect pass a non-empty string to hover
  :hover {
    box-shadow: 0 ${({ hover }) => (hover ? "8px 16px" : "4px 8px")} 0
      rgba(0, 0, 0, 0.2);
  }
`;

export default Card;
