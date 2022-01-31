import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Stack,
  Typography,
} from "@mui/material";

function ProductItem({ item }) {
  const navigate = useNavigate();

  const itemLink = `/product/id=${item._id}`;

  const onItemClick = () => navigate(itemLink);

  return (
    <Card onClick={onItemClick}>
      <CardActionArea>
        <CardMedia
          component="img"
          height={250}
          image={item.image}
          alt={item.name}
        />
      </CardActionArea>

      <CardContent>
        <Typography variant="h6" mb={2}>
          {item.brand} — {item.name}
        </Typography>

        <Stack spacing={1} direction="row" mb={2}>
          <Rating defaultValue={item.rating} precision={0.1} readOnly />
          <Typography variant="body1">{item.rating}</Typography>
        </Stack>

        <Typography variant="h5">${item.price}</Typography>
      </CardContent>
      <CardActions>
        <Button onClick={onItemClick}>Shop now</Button>
      </CardActions>
    </Card>
  );
}

export default ProductItem;
