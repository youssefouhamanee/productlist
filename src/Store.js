import { createStore } from "redux";
import Products from "./api/products";
import { LIST_PRODUCTS,ADD_TO_CART } from "./types";

const Cart = (state = initState, action) => {
  switch (action.type) {
    case LIST_PRODUCTS:
      return { ...state.products };
    case ADD_TO_CART:
      return ()
    default:
      return state;
  }
};

const initState = {
  products: Products
};

export const Store = createStore(Cart);
