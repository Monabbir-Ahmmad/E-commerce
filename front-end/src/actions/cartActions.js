import axios from "axios";
import { GET_SINGLE_PRODUCT } from "../constants/apiLinks";
import { CART_ADD_ITEM } from "../constants/cartConstants";

export const addToCart = (id, quantity) => async (dispatch, getState) => {
  try {
    const res = await axios.get(`${GET_SINGLE_PRODUCT}/${id}`);

    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        productId: res.data._id,
        name: res.data.name,
        image: res.data.image,
        price: res.data.price,
        countInStock: res.data.countInStock,
        quantity: quantity,
      },
    });

    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
  } catch (error) {
    console.error(error);
  }
};
