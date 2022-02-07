import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "@emotion/styled";
import { singleProductDetails } from "../actions/productActions";
import {
  Alert,
  AlertTitle,
  Button,
  Divider,
  LinearProgress,
  MenuItem,
  Paper,
  Rating,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { addToCart } from "../actions/cartActions";

const Container = styled.div`
  max-width: 80%;
  margin: 40px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px;
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

const InfoContainer = styled(Stack)`
  flex: 1;
  min-width: 200px;
  color: #353535;
`;

const CartContainer = styled(Paper)`
  flex: 1;
  min-width: 200px;
  padding: 20px;
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
    dispatch(addToCart(params.productId, quantity));
    navigate(`/cart`);
  };

  return (
    <>
      {loading ? (
        <LinearProgress />
      ) : error ? (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          {error}
        </Alert>
      ) : (
        <Container>
          <ImageContainer>
            <Image src={product.image} />
          </ImageContainer>

          <InfoContainer spacing={2} divider={<Divider />}>
            <Typography variant="h4" fontWeight={600}>
              {product.name}
            </Typography>

            <Stack direction="row" spacing={2}>
              <Rating
                defaultValue={product.rating}
                precision={0.1}
                readOnly
                size="large"
              />
              <Typography variant="h6">
                {product.rating} ({product.numReviews} reviews)
              </Typography>
            </Stack>

            <Typography variant="h5">Price: ${product.price}</Typography>

            <Typography variant="body1">{product.description}</Typography>
          </InfoContainer>

          <CartContainer>
            <Stack spacing={2} divider={<Divider />}>
              <Typography variant="h6" fontWeight={600}>
                Price: ${product.price}
              </Typography>

              <Typography variant="h6" fontWeight={600}>
                Stock:{" "}
                <span
                  variant="h6"
                  style={{
                    color: product.countInStock > 0 ? "#009900" : "#990000",
                  }}
                >
                  {product.countInStock > 0 ? "In stock" : "Out of stock"}
                </span>
              </Typography>

              {product.countInStock > 0 && (
                <Typography variant="h6" fontWeight={600}>
                  Quantity:
                  <Select
                    size="small"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    sx={{ m: 1 }}
                  >
                    {Array.from(Array(product.countInStock), (_, index) => (
                      <MenuItem key={index} value={index + 1}>
                        {index + 1}
                      </MenuItem>
                    ))}
                  </Select>
                </Typography>
              )}
              {product.countInStock > 0 && (
                <Button
                  fullWidth
                  variant="contained"
                  onClick={addToCartHandler}
                >
                  Add to cart
                </Button>
              )}
            </Stack>
          </CartContainer>
        </Container>
      )}
    </>
  );
}

export default ProductPage;
