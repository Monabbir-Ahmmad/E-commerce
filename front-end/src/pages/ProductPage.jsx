import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Card from "../components/Card";
import RatingStars from "../components/RatingStars";
import axios from "axios";

const Container = styled.div`
  max-width: 80%;
  margin: 40px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px;
`;

const Divider = styled.span`
  background-color: darkgray;
  width: 100%;
  height: 1px;
`;
const ImageContainer = styled.div`
  flex: 1;
  min-width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid darkgray;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  min-width: 200px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  color: #555555;
  gap: 20px;
`;

const Title = styled.h1``;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  width: 100%;
  gap: 20px;
`;

const Price = styled.label`
  font-size: 20px;
  font-weight: 600;
`;

const Description = styled.p`
  font-size: 16px;
`;

const Stock = styled.label`
  font-size: 20px;
  font-weight: 600;
`;

const CartContainer = styled(Card)`
  flex: 1;
  min-width: 200px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
`;

const Button = styled.button`
  cursor: pointer;
  flex: 1;
  background-color: #026bce;
  border: none;
  width: 100%;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  border-radius: 5px;
  display: ${({ count }) => (count > 0 ? "block" : "none")};

  :hover {
    background-color: #004c94;
  }
`;

function ProductPage() {
  const params = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/products/${params.productId}`
        );
        setProduct(res.data);
      } catch (error) {
        console.log(`Error: ${error.message}`);
      }
    };

    fetchProduct();
  }, [params.productId]);

  return (
    <Container>
      <ImageContainer>
        <Image src={product.image} />
      </ImageContainer>
      <InfoContainer>
        <Title>{product.name}</Title>
        <Divider />
        <RatingContainer>
          <RatingStars maxValue={5} currentValue={product.rating} />{" "}
          {product.rating} ({product.numReviews} reviews)
        </RatingContainer>
        <Divider />
        <Price>Price: ${product.price}</Price>
        <Divider />
        <Description>{product.description}</Description>
      </InfoContainer>
      <CartContainer>
        <Price>Price: ${product.price}</Price>
        <Divider />
        <Stock>
          Stock:
          <span
            style={{ color: product.countInStock > 0 ? "#009900" : "#990000" }}
          >
            {product.countInStock > 0 ? " In stock" : " Out of stock"}
          </span>
        </Stock>
        <Divider />
        <Button count={product.countInStock}>Add to cart</Button>
      </CartContainer>
    </Container>
  );
}

export default ProductPage;
