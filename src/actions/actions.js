import {ADD_TO_CART,DELETE_PRODUCT_CART,DELETE_WITH_HANDLE_CHANGE} from "../types/types"

export const addToCart=(product)=>{
    return {
        type: ADD_TO_CART,
       data: product
    }
}
export const deleteProduct=(products, product)=>{
    return{
        type: DELETE_PRODUCT_CART,
        data:{products, product}
    }
}
export const  handleChangeValue=(id,v)=>{
    return{
        type:DELETE_WITH_HANDLE_CHANGE,
        data:{id,v}
    }
}