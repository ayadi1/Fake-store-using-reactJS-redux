import * as actions from "../actionsType/actionTypes";

export const setProducts = (products) => ({
  type: actions.SET_PRODUCTS,
  payload: products,
});

export const selectedProduct = (product) => ({
  type: actions.SELECTED_PRODUCT,
  payload: { product },
});

export const addToCart = (id) => ({
  type: actions.ADD_TO_CART,
  payload: { id },
});

export const removeFromCart = (id) => ({
  type: actions.REMOVE_FROM_CART,
  payload: { id },
});

export const removeSelectedProduct = () => ({
  type: actions.REMOVE_SELECTED_PRODUCT,
});

export const editArticleInCartNumber = (id, number) => ({
  type: actions.EDIT_ARTICLE_IN_CART_NUMBER,
  payload: { id, number },
});

export const addToSubTotal = (sub) => ({
  type: actions.ADD_TO_SUB_TOTAL,
  payload: { sub },
});

export const removeDataFromCartAndSubtotal = () => ({
  type: actions.REMOVE_DATA_FROM_CART_AND_SUBTOTAL,
});
