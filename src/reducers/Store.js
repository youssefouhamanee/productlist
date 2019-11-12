import { createStore } from "redux";
import Products from "../api/products";
import { LIST_PRODUCTS,ADD_TO_CART,DELETE_PRODUCT_CART,DELETE_WITH_HANDLE_CHANGE} from "../types/types";


const Cart = (state = initState, action) => {
  switch (action.type) {
    case LIST_PRODUCTS:
      return { ...state,
        products:{...state.products} ,
        
       };
    case ADD_TO_CART:
      let findproduct = state.cart.find(cp => cp.id === action.data.id)
      let cart = []
      if(findproduct){
        cart= state.cart.map(cp => cp.id === action.data.id ? {...cp,total:cp.total+1}:cp)
      }else{
        cart =  [...state.cart, {id: action.data.id, total:1}]
      }
      return {
        ...state,
        cart: cart ,
       products:state.products.map(p=>p.id === action.data.id ? {...p,remaining : p.remaining-1}:p)
      };
      case DELETE_PRODUCT_CART:
        return{
          ...state,
          cart:action.data.products,
          products: state.products.map(p=>p.id === action.data.product.id ? {...p,remaining : p.remaining+action.data.product.total}:p)
        }
        case DELETE_WITH_HANDLE_CHANGE:
          let product = state.products.find(p=>p.id==action.data.id)
          return{
            ...state,
            cart:state.cart.map(p=>p.id === action.data.id && product.remaining != 0 ? {...p,total : p.total+action.data.v}:p).filter(p=>p.total != 0),
            products:state.products.map(p=>p.id === action.data.id && p.remaining-action.data.v != 0 ? {...p,remaining : p.remaining-action.data.v}:p)
          }
      default:
      return state;
  }
};

const initState = {
  products: Products,
  cart:[],
};

export const Store = createStore(Cart);