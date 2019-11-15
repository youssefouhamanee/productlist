import {ADD_TO_CART,DELETE_PRODUCT_CART,DELETE_WITH_HANDLE_CHANGE, SEARCH_PRODUCT} from "../types/types"

export const addToCart=(product)=>{
    return {
        type: ADD_TO_CART,
       data: product
    }
}
export const deleteProduct=(products, product)=>{
    console.log(products)
    return{
        type: DELETE_PRODUCT_CART,
        data:{products, product}
    }
}
export const handleChangeValue=(v,p)=>{
    console.log("product",v);
   
    
    return{
        type:DELETE_WITH_HANDLE_CHANGE,
        data:{v,p}
    }
}

export const handleSearchProduct=(search)=>{
    // console.log(search);
    return{
        type:SEARCH_PRODUCT,
        data:search
    }
}