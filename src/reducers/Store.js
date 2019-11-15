import { createStore } from "redux";
import Products from "../api/products";
import { LIST_PRODUCTS,ADD_TO_CART,DELETE_PRODUCT_CART,DELETE_WITH_HANDLE_CHANGE,SEARCH_PRODUCT} from "../types/types";


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
            
          return{
            ...state,
            cart:state.cart.map(p=>p.id === action.data.p.id && p.remaining != 0 ? {...p,total : p.total+action.data.v}:p).filter(p=>p.total != 0),
            products:state.products.map(p=>p.id === action.data.p.id && p.remaining-action.data.v != 0 ? {...p,remaining : p.remaining-action.data.v}:p)
          }
          case SEARCH_PRODUCT:
              
            return{
              ...state,
              search: action.data
            }
      default:
      return state;
  }
};

const initState = {
  products: Products,
  cart:[],
  search:''
};

export const Store = createStore(Cart);