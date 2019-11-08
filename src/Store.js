import { createStore } from "redux";
import Products from "./api/products";
import { LIST_PRODUCTS,ADD_TO_CART} from "./types";


const Cart = (state = initState, action) => {
  switch (action.type) {
    case LIST_PRODUCTS:
      return { ...state,
        products:{...state.products} ,
        total : state.total
       };
    case ADD_TO_CART:
        let products = state.products.map(pro => ({ ...pro, remaining: action.data.remaining -1 }))
      return {
        ...state,
        addProduct: [...state.addProduct, action.data],
        total : state.total + 1,
        products
      }
      default:
      return state;
  }
};

const initState = {
  products: Products,
  addProduct:[],
  total:0
};

export const Store = createStore(Cart);
