import axios from "axios";
export const GET_DATA_BY_CATEGORY = "GET_DATA_BY_CATEGORY";
export const IS_ERROR = "IS_ERROR";
export const IS_LOADING = "IS_LOADING";
export const ADD_CART = "ADD_CART";

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
  return {
    type: ADD_CART,
    payload,
  };
};
