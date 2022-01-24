import styled from "styled-components";

const Container = styled.div`
  flex: 1 20%;
  margin: 5px;
  min-width: 300px;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;

const Button = styled.button`
  font-size: 18px;
  border: none;
  padding: 10px;
  background-color: white;
  color: #494949;
  cursor: pointer;
  font-weight: 600;
`;

function CategoryItem({ item }) {
  return (
    <Container>
      <Image src={item.image} />
      <InfoContainer>
        <Title>{item.name}</Title>
        <Button>SHOP NOW</Button>
      </InfoContainer>
    </Container>
  );
}

export default CategoryItem;
