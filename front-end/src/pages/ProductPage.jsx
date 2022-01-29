import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { singleProductDetails } from "../actions/productActions";
import Card from "../components/Card";
import Loader from "../components/utility/Loader";
import Message from "../components/utility/Message";
import RatingStars from "../components/RatingStars";

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

const CartContainer = styled(Card)`
  flex: 1;
  min-width: 200px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
  font-size: 20px;
  font-weight: 600;
`;

const QuantitySelect = styled.select`
  padding: 8px;
  background-color: #f1f1f1;
  margin: 0 15px;
  font-size: 20px;
  border: none;
  border-radius: 4px;
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
  border-radius: 5px;

  :hover {
    background-color: #004c94;
  }
`;

function ProductPage() {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);

  const { loading, error, product } = useSelector(
    (state) => state.productDetails
  );

  useEffect(() => {
    dispatch(singleProductDetails(params.productId));
  }, [dispatch, params.productId]);

  const addToCartHandler = () => {
    navigate(`/cart/${params.productId}?quantity=${quantity}`);
  };

  return (
    <>
      {loading ? (
        <Loader
          bgColor={"#0000000"}
          textColor={"#000"}
          spinnerColor={"#0045b4"}
        >
          Loading
        </Loader>
      ) : error ? (
        <Message>{error}</Message>
      ) : (
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
            <label>Price: ${product.price}</label>

            <Divider />

            <label>
              Stock:
              <span
                style={{
                  color: product.countInStock > 0 ? "#009900" : "#990000",
                }}
              >
                {product.countInStock > 0 ? " In stock" : " Out of stock"}
              </span>
            </label>

            <Divider />

            {product.countInStock > 0 && (
              <label>
                Quantity:
                <QuantitySelect onChange={(e) => setQuantity(e.target.value)}>
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </QuantitySelect>
              </label>
            )}
            {product.countInStock > 0 && (
              <Button onClick={addToCartHandler}>Add to cart</Button>
            )}
          </CartContainer>
        </Container>
      )}
    </>
  );
}

export default ProductPage;
