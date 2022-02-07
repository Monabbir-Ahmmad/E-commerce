import { useSelector } from "react-redux";
import {
  Alert,
  AlertTitle,
  Button,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import CartItem from "../components/CartItem";
import styled from "@emotion/styled";

const Container = styled.div`
  padding: 20px 10%;
`;

function CartPage() {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <Container>
      <Typography variant="h4" mb={4}>
        Shopping cart
      </Typography>
      {cartItems.length > 0 ? (
        <Grid container columns={{ md: 1, lg: 5 }} spacing={10}>
          <Grid item xs={3}>
            <Stack divider={<Divider />}>
              {cartItems.map((item, index) => (
                <CartItem key={index} item={item} />
              ))}
            </Stack>
          </Grid>
          <Grid item xs={2}>
            <Paper variant="outlined">
              <Stack spacing={2} divider={<Divider />} p={2}>
                <Typography variant="h4" sx={{ textTransform: "uppercase" }}>
                  Subtotal (
                  {cartItems.reduce((acc, item) => acc + item.quantity, 0)})
                  items
                </Typography>
                <Typography variant="h5" sx={{ textTransform: "uppercase" }}>
                  Total price: $
                  {cartItems
                    .reduce((acc, item) => acc + item.price * item.quantity, 0)
                    .toFixed(2)}
                </Typography>
                <Button variant="contained" fullWidth size="large">
                  Proceed to checkout
                </Button>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      ) : (
        <Alert severity="info">
          <AlertTitle>Info</AlertTitle>
          Your shopping cart is empty
        </Alert>
      )}
    </Container>
  );
}

export default CartPage;
