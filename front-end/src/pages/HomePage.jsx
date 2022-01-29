import React, { useEffect } from "react";
import styled from "styled-components";
import Products from "../components/Products";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import Message from "../components/utility/Message";
import Loader from "../components/utility/Loader";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 10%;
`;

function HomePage() {
  const dispatch = useDispatch();

  const { loading, error, products } = useSelector(
    (state) => state.productList
  );

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <Container>
      <h1>Products</h1>
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
        <Products productDataSet={products} />
      )}
    </Container>
  );
}

export default HomePage;
