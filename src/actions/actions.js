import {
  ADD_TO_CART,
  DELETE_PRODUCT_CART,
  DELETE_WITH_HANDLE_CHANGE,
  SEARCH_PRODUCT,
  IS_OPEN,
  CREATE_NEW_PRODUCT,
  DELETE_PRODUCT_DASHBOARD
} from "../types/types";
import { Store } from "../reducers/Store";

// ADD PRODUCT TO CART
export const addToCart = product => {
  console.log("state", Store.getState());

  let findproduct = Store.getState().cart.find(cp => cp.id === product.id);

  let cart = [];
  if (findproduct) {
    cart = Store.getState().cart.map(cp =>
      cp.id === product.id ? { ...cp, total: cp.total + 1 } : cp
    );
  } else {
    cart = [...Store.getState().cart, { id: product.id, total: 1 }];
  }
  let products = Store.getState().products.map(p =>
    p.id === product.id ? { ...p, remaining: p.remaining - 1 } : p
  );
  return {
    type: ADD_TO_CART,
    data: { cart, products }
  };
};

// DELETE PRODUCT FROM CART WITH BUTTON TRASH
export const deleteProduct = (products, product) => {
  console.log(products);

  let cart = products;
  let productsList = Store.getState().products.map(p =>
    p.id === product.id ? { ...p, remaining: p.remaining + product.total } : p
  );
  return {
    type: DELETE_PRODUCT_CART,
    data: { products: productsList, cart }
  };
};
// CHANGE THE NUMBER OF STOCKS AND DELETE THE PRODUCT AS EQUAL 0
export const handleChangeValue = (v, p) => {
  console.log("product", v);
  let product = Store.getState().products.find(pr => pr.id === p);
  console.log(product);
  console.log(Store.getState().cart);
  let cart = Store.getState()
    .cart.map(cp =>
      cp.id === product.id && ((product.remaining > 0 && v > 0) || v <= 0)
        ? { ...cp, total: cp.total + v }
        : cp
    )
    .filter(cp => cp.total > 0);
  console.log(cart);

  let products = Store.getState().products.map(p =>
    p.id === product.id && (v < 0 || (product.remaining > 0 && v > 0))
      ? { ...p, remaining: product.remaining - v }
      : p
  );

  return {
    type: DELETE_WITH_HANDLE_CHANGE,
    data: { products, cart }
  };
};
// MODAL
export const openModal = isOpen => {
  return {
    type: IS_OPEN,
    data: isOpen
  };
};

// SEARCH PRODUCT
export const handleSearchProduct = search => {
  // console.log(search);

  console.log(Store.getState().search);

  return {
    type: SEARCH_PRODUCT,
    data: search
  };
};

// ADD NEW PRODUCT TO STOCK
export const createNewProduct = products => {
  return {
    type: CREATE_NEW_PRODUCT,
    data: products
  };
};
export const deleteProductDashboard = product => {
  console.log(product);

  return {
    type: DELETE_PRODUCT_DASHBOARD,
    data: product
  };
};
// // EDIT PRODUCT

// export const editProduct = product => {
//   return {
//     type: EDIT_PRODUCT,
//     payload: product
//   };
// };
