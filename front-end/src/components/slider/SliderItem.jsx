import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;

  @media (max-width: 770px) {
    flex-direction: column;
  }
`;

const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 2rem;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0 3rem;
`;

const Image = styled.img`
  width: 100%;
`;

const Title = styled.h1`
  font-size: 3rem;
`;

const Description = styled.p`
  margin: 2rem 0;
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: transparent;
  font-size: 1.5rem;
  cursor: pointer;
`;

function SliderItem({ item }) {
  return (
    <Container>
      <ImgContainer>
        <Image src={item.image} />
      </ImgContainer>
      <InfoContainer>
        <Title>{item.title}</Title>
        <Description>{item.description}</Description>
        <Button>Shop now</Button>
      </InfoContainer>
    </Container>
  );
}

export default SliderItem;
