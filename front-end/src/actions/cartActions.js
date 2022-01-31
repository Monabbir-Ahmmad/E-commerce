import axios from "axios";
import { GET_SINGLE_PRODUCT } from "../constants/apiLinks";
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

export const addToCart = (id, quantity) => async (dispatch, getState) => {
  try {
    const res = await axios.get(`${GET_SINGLE_PRODUCT}/${id}`);

    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        id: res.data._id,
        name: res.data.name,
        brand: res.data.brand,
        image: res.data.image,
        price: res.data.price,
        countInStock: res.data.countInStock,
        quantity: quantity,
      },
    });

    saveToLocalStorage(getState().cart.cartItems);
  } catch (error) {
    console.error(error);
  }
};

export const removeFromCart = (id) => async (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: {
      id: id,
    },
  });

  saveToLocalStorage(getState().cart.cartItems);
};

function saveToLocalStorage(cartItems) {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}
