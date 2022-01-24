import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #0074c2;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
  padding: 2px;
`;

function Announcement() {
  return <Container>Super deal ongoing!!!</Container>;
}

export default Announcement;
