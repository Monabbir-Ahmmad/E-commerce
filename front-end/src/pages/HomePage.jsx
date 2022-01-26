import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Products from "../components/Products";
import axios from "axios";

const Container = styled.div`
  display: flex;
`;

function HomePage() {
  const [productDataSet, setProductDataSet] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products");
        setProductDataSet(res.data);
      } catch (error) {
        console.log(`Error: ${error.message}`);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Container>
      <Products productDataSet={productDataSet} />
    </Container>
  );
}

export default HomePage;
