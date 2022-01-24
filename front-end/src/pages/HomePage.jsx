import React from "react";
import styled from "styled-components";
import Products from "../components/Products";
import { productDataSet } from "../productDataSet";

const Container = styled.div`
  display: flex;
`;

function HomePage() {
  return (
    <Container>
      <Products productDataSet={productDataSet} />
    </Container>
  );
}

export default HomePage;
