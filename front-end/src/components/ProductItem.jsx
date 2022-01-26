import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Card from "./Card";
import RatingStars from "./RatingStars";

const Container = styled(Card)`
  flex: 1 20%;
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

const Title = styled.h3`
  :hover {
    text-decoration: underline;
  }
`;

const Rating = styled.p`
  font-size: 18px;
  font-weight: 500;
`;

const Price = styled.h2``;

function ProductItem({ item }) {
  const itemLink = `/product/id=${item.id}`;

  return (
    <Container hover="hover">
      <ImageContainer>
        <Link to={itemLink}>
          <Image src={item.image} />
        </Link>
      </ImageContainer>
      <InfoContainer>
        <Link to={itemLink}>
          <Title>
            {item.brand} - {item.name}
          </Title>
          <RatingStars maxValue={5} currentValue={item.rating} />
          <Rating>
            {item.rating} from {item.numReviews} reviews
          </Rating>
          <Price>$ {item.price}</Price>
        </Link>
      </InfoContainer>
    </Container>
  );
}

export default ProductItem;
