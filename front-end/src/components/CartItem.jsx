import { Button, Grid, MenuItem, Select, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../actions/cartActions";

const Image = styled.img`
  width: 80%;
  object-fit: cover;
`;

function CartItem({ item }) {
  const dispatch = useDispatch();
  const itemLink = `/product/id=${item.id}`;

  const changeQuantityHandler = (e) => {
    dispatch(addToCart(item.id, Number(e.target.value)));
  };
  const removeHandler = () => dispatch(removeFromCart(item.id));

  return (
    <Grid container spacing={1} columns={5} alignItems="center" my={2}>
      <Grid item xs={1}>
        <Image src={item.image} alt={item.name} />
      </Grid>
      <Grid item xs={1}>
        <Link to={itemLink}>
          <Typography variant="h6">
            {item.brand} — {item.name}
          </Typography>
        </Link>
      </Grid>
      <Grid item xs={1}>
        <Typography variant="h6">${item.price}</Typography>
      </Grid>
      <Grid item xs={1}>
        <Select
          fullWidth
          value={item.quantity}
          onChange={changeQuantityHandler}
        >
          {Array.from(Array(item.countInStock), (_, index) => (
            <MenuItem key={index} value={index + 1}>
              {index + 1}
            </MenuItem>
          ))}
        </Select>
      </Grid>
      <Grid item xs={1}>
        <Button color="error" fullWidth sx={{ p: 2 }} onClick={removeHandler}>
          <DeleteIcon fontSize="large" />
        </Button>
      </Grid>
    </Grid>
  );
}

export default CartItem;
