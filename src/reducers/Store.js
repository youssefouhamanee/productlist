import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Products from "../api/products";
import {
  LIST_PRODUCTS,
  ADD_TO_CART,
  DELETE_PRODUCT_CART,
  DELETE_WITH_HANDLE_CHANGE,
  SEARCH_PRODUCT,
  IS_OPEN
  // ADD_PRODUCT
} from "../types/types";

const Cart = (state = initState, action) => {
  switch (action.type) {
    case LIST_PRODUCTS:
      return { ...state, products: { ...state.products } };
    case ADD_TO_CART:
      return {
        ...state,
        ...action.data
        // products: action.data.product
      };
    case DELETE_PRODUCT_CART:
      return {
        ...state,
        ...action.data
      };

    // valueInput
    case DELETE_WITH_HANDLE_CHANGE:
      return {
        ...state,
        ...action.data
      };
    case SEARCH_PRODUCT:
      return {
        ...state,
        search: action.data
      };
    case IS_OPEN:
      return {
        ...state,
        isOpen: !action.data
      };
    // case ADD_PRODUCT:
    //   return{
    //     ...state,
    //     p
    //   }

    default:
      return state;
  }
};

const initState = {
  products: Products,
  cart: [],
  search: "",
  isOpen: false
  // currentTitle: "",
  // currentPrice: "",
  // currentStock: "",
  // currentPic: ""
};

export const Store = createStore(Cart, applyMiddleware(thunk));
