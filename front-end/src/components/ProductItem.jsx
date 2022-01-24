import React from "react";
import styled from "styled-components";
import Card from "./Card";
import RatingStars from "./RatingStars";

const Container = styled(Card)`
  flex: 1 10%;
  min-width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ImageContainer = styled.div`
  flex: 1;
  background-color: #dadada;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  width: 80%;
  color: #696969;
`;

const Title = styled.h3``;

const Rating = styled.p`
  font-size: 18px;
  font-weight: 500;
`;
const Price = styled.h2``;

function ProductItem({ item }) {
  return (
    <Container>
      <ImageContainer>
        <Image src={item.image} />
      </ImageContainer>
      <InfoContainer>
        <Title>
          {item.brand} - {item.name}
        </Title>
        <RatingStars maxValue={5} value={item.rating} />
        <Rating>
          {item.rating} from {item.numReviews} reviews
        </Rating>
        <Price>$ {item.price}</Price>
      </InfoContainer>
    </Container>
  );
}

export default ProductItem;
