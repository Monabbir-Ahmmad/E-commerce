import React from "react";
import styled from "styled-components";
import ProductItem from "./ProductItem";

const Container = styled.div`
  width: 100%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
`;

function Products({ productDataSet }) {
  return (
    <Container>
      {productDataSet.map((item) => (
        <ProductItem key={item._id} item={item} />
      ))}
    </Container>
  );
}

export default Products;
