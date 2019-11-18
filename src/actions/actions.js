import {ADD_TO_CART,DELETE_PRODUCT_CART,DELETE_WITH_HANDLE_CHANGE, SEARCH_PRODUCT,IS_OPEN} from "../types/types"

export const addToCart=(product,state)=>{
    console.log('state',state);
    
    let findproduct = state.cart.find(cp => cp.id === product.id)

        let cart = []
        if(findproduct){
          cart= state.cart.map(cp => cp.id === product.id ? {...cp,total:cp.total+1}:cp)
        }else{
          cart =  [...state.cart, {id: product.id, total:1}]
        }
    let products = state.products.map(p=>p.id === product.id ? {...p,remaining : p.remaining-1}:p)
    return {
        type: ADD_TO_CART,
       data: {cart,products}
    }
}
export const deleteProduct=(state,products, product)=>{
    console.log(products)
    let cart = products
    let productsList = state.products.map(p=>p.id === product.id ? {...p,remaining : p.remaining+product.total}:p)
    return{
        type: DELETE_PRODUCT_CART,
        data: {products: productsList, cart}
    }
}
export const handleChangeValue=(state, v,p)=>{
    console.log("product",v);
    let product = state.products.find(pr=>pr.id === p )
    console.log(product);
    console.log(state.cart)
   let cart = state.cart.map(cp=>cp.id === product.id && (product.remaining > 0 && v > 0 || v <= 0) ? {...cp,total:cp.total+v}:cp).filter(cp=>cp.total > 0)
   console.log(cart);
   
   let products = state.products.map(p=>p.id === product.id && (v < 0 || product.remaining > 0 && v > 0) ?{...p,remaining:product.remaining-v}:p)
    
    return{
        type:DELETE_WITH_HANDLE_CHANGE,
        data:{products,cart}
    }
}
// modal
export const openModal=(isOpen)=>{
    
    return{
        type:IS_OPEN,
        data:isOpen
    }
}
export const handleSearchProduct=(search)=>{
    // console.log(search);
    return{
        type:SEARCH_PRODUCT,
        data:search
    }
}