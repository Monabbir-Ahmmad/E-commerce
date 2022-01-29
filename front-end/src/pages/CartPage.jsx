import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { addToCart } from "../actions/cartActions";
import Message from "../components/utility/Message";

const Container = styled.div`
  padding: 20px;
`;

function CartPage() {
  const params = useParams();

  const productId = params.productId;

  const [searchParams, setSearchParams] = useSearchParams();

  const quantity = searchParams.get("quantity")
    ? parseInt(searchParams.get("quantity"))
    : 1;

  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.cart);

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, quantity));
    }
  }, [dispatch, productId, quantity]);

  return (
    <Container>
      <h1>Shopping cart</h1>
    </Container>
  );
}

export default CartPage;
