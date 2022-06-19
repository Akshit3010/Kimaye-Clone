import axios from "axios";
import { saveInLocal } from "../../localStorageFn/localstorage";
export const GET_DATA_BY_CATEGORY = "GET_DATA_BY_CATEGORY";
export const IS_ERROR = "IS_ERROR";
export const IS_LOADING = "IS_LOADING";
export const ADD_CART = "ADD_CART";
export const GET_CART_DATA= "GET_CART_DATA"

export const getRequestBycat = (dispatch, category) => {
  dispatch({ type: IS_LOADING });
  axios
    .get(`https://kimaye-backend.herokuapp.com/${category}`)
    .then(({ data }) => {
      dispatch({
        type: GET_DATA_BY_CATEGORY,
        payload: data,
      });
    })
    .catch((error) => {
      dispatch({ type: IS_ERROR });
    });
};

export const addTocart = (payload) => {
  axios
    .post("https://kimaye-backend.herokuapp.com/cart", payload)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
  return {
    type: ADD_CART,
    payload,
  };
};

export const getCartData=(dispatch)=>{
  axios
  .get(`https://kimaye-backend.herokuapp.com/cart`)
  .then(({ data }) => {
    dispatch({
      type: GET_CART_DATA,
      payload: data,
    });
  })
  .catch((error) => console.log(error));

}
