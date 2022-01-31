import { useEffect } from "react";
import styled from "@emotion/styled";
import Products from "../components/Products";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import Loader from "../components/utility/Loader";
import { Alert, AlertTitle, Typography } from "@mui/material";

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
      <Typography variant="h4" mb={2}>
        Products
      </Typography>
      {loading ? (
        <Loader
          bgColor={"#0000000"}
          textColor={"#000"}
          spinnerColor={"#0045b4"}
        >
          Loading
        </Loader>
      ) : error ? (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          {error}
        </Alert>
      ) : (
        <Products productDataSet={products} />
      )}
    </Container>
  );
}

export default HomePage;
