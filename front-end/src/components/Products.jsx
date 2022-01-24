import React from "react";
import styled from "styled-components";
import ProductItem from "./ProductItem";

const Container = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  gap: 20px;
`;

function Products({ productDataSet }) {
  return (
    <Container>
      {productDataSet.map((item) => (
        <ProductItem key={item.id} item={item} />
      ))}
    </Container>
  );
}

export default Products;
