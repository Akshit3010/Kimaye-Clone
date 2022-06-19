import { getFromLocal, saveInLocal } from "../../localStorageFn/localstorage";
import {
  ADD_CART,
  GET_CART_DATA,
  GET_DATA_BY_CATEGORY,
  IS_ERROR,
  IS_LOADING,
} from "./categoryAction";

const initState = {
  isLoading: false,
  isError: false,
  cartData: getFromLocal("cartData") || [],
  categoryData: [],
  count: getFromLocal("cartData") ? getFromLocal("cartData").length : 0,
};

export const AllProductReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case IS_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
        allFruits: [],
      };
    }
    case IS_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        allFruits: [],
      };
    }
    case GET_DATA_BY_CATEGORY: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        categoryData: payload,
      };
    }
    case ADD_CART: {
      const updateCart = [...state.cartData, payload];
      console.log(updateCart);
      saveInLocal("cartData", updateCart);
      return {
        ...state,
        cartData: updateCart,
        count: getFromLocal("cartData").length,
      };
    }
    case GET_CART_DATA: {
      saveInLocal("cartData", payload);
      return {
        ...state,
        cartData: payload,
      };
    }
    default: {
      return state;
    }
  }
};
